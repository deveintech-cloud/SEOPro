
import { KeywordData, BacklinkData, SeoAuditResult, AuditIssue, ReadabilityResult, ReferrerData } from '../types';

// Stop words to exclude from analysis
const STOP_WORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
  'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'it', 'that',
  'this', 'these', 'those', 'as', 'if', 'when', 'than', 'from', 'into', 'during', 'since',
  'will', 'would', 'shall', 'should', 'can', 'could', 'may', 'might', 'must', 'do', 'does', 'did',
  'i', 'you', 'he', 'she', 'we', 'they', 'me', 'him', 'her', 'us', 'them', 'my', 'your', 'his', 'their'
]);

export const calculateKeywordDensity = (text: string): { keywords: KeywordData[], totalWords: number } => {
  if (!text) return { keywords: [], totalWords: 0 };

  // 1. Clean text: remove special chars, extra spaces, lowercase
  const cleanText = text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const words = cleanText.split(' ');
  const totalWords = words.length;

  if (totalWords === 0) return { keywords: [], totalWords: 0 };

  // 2. Count frequency
  const frequencyMap: Record<string, number> = {};
  
  words.forEach(word => {
    if (word.length > 2 && !STOP_WORDS.has(word)) { // Filter short words and stop words
      frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    }
  });

  // 3. Convert to array and calculate density
  const keywords: KeywordData[] = Object.entries(frequencyMap)
    .map(([word, count]) => ({
      word,
      count,
      density: parseFloat(((count / totalWords) * 100).toFixed(2))
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 15); // Top 15 keywords

  return { keywords, totalWords };
};

const countSyllables = (word: string): number => {
  word = word.toLowerCase();
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  return word.match(/[aeiouy]{1,2}/g)?.length || 1;
};

export const calculateReadabilityMetrics = (text: string): ReadabilityResult => {
  const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [text];
  const sentenceCount = Math.max(1, sentences.length);
  const words = text.trim().split(/\s+/);
  const wordCount = Math.max(1, words.length);
  
  let syllableCount = 0;
  let complexWords = 0;

  words.forEach(w => {
    const s = countSyllables(w);
    syllableCount += s;
    if (s >= 3) complexWords++;
  });

  // Flesch Reading Ease
  // 206.835 - 1.015(total words/total sentences) - 84.6(total syllables/total words)
  const score = 206.835 - (1.015 * (wordCount / sentenceCount)) - (84.6 * (syllableCount / wordCount));
  
  // Flesch-Kincaid Grade Level
  // 0.39(total words/total sentences) + 11.8(total syllables/total words) - 15.59
  const gradeLevel = (0.39 * (wordCount / sentenceCount)) + (11.8 * (syllableCount / wordCount)) - 15.59;

  let label = '';
  if (score >= 90) label = 'Very Easy (5th grade)';
  else if (score >= 80) label = 'Easy (6th grade)';
  else if (score >= 70) label = 'Fairly Easy (7th grade)';
  else if (score >= 60) label = 'Standard (8th-9th grade)';
  else if (score >= 50) label = 'Fairly Difficult (10th-12th grade)';
  else if (score >= 30) label = 'Difficult (College)';
  else label = 'Very Difficult (Professional)';

  // Recommendations
  const recommendations: string[] = [];
  const avgSentenceLength = wordCount / sentenceCount;

  if (avgSentenceLength > 20) {
    recommendations.push("Your sentences are too long. Try splitting them into shorter sentences.");
  }
  if ((complexWords / wordCount) > 0.15) {
    recommendations.push("You are using too many complex words. Try using simpler alternatives.");
  }
  if (score < 60) {
    recommendations.push("The content is difficult to read for the general public. Aim for a score of 60-70.");
  }
  if (recommendations.length === 0) {
    recommendations.push("Great job! Your writing is clear and easy to understand.");
  }

  return {
    score: Math.max(0, Math.min(100, Math.round(score))),
    label,
    gradeLevel: Math.max(0, parseFloat(gradeLevel.toFixed(1))),
    wordCount,
    sentenceCount,
    complexWords,
    avgSentenceLength: parseFloat(avgSentenceLength.toFixed(1)),
    recommendations
  };
};

/**
 * Generates deterministic mock data based on domain name hash
 * This simulates an API call for the frontend demo
 */
export const generateMockBacklinkData = (domain: string): BacklinkData => {
  let hash = 0;
  for (let i = 0; i < domain.length; i++) {
    hash = domain.charCodeAt(i) + ((hash << 5) - hash);
  }
  const seed = Math.abs(hash);
  
  const domainAuthority = (seed % 90) + 5; // 5-95
  const pageAuthority = Math.min(domainAuthority + (seed % 10), 99);
  const totalBacklinks = (seed % 50000) + 100;
  const referringDomains = Math.floor(totalBacklinks / ((seed % 20) + 5));
  
  // Mock Referrers
  const potentialReferrers = [
    'wikipedia.org', 'nytimes.com', 'medium.com', 'reddit.com', 'github.com', 
    'stackoverflow.com', 'forbes.com', 'techcrunch.com', 'hubspot.com', 'moz.com'
  ];
  
  const topReferrers: ReferrerData[] = [];
  const numReferrers = 5;
  for (let i = 0; i < numReferrers; i++) {
    const refSeed = seed + i;
    const totalLinks = (refSeed % 200) + 10;
    const dofollowCount = Math.floor(totalLinks * ((refSeed % 100) / 100));
    
    topReferrers.push({
      domain: potentialReferrers[(seed + i) % potentialReferrers.length],
      authority: 90 - (refSeed % 40),
      dofollowCount,
      nofollowCount: totalLinks - dofollowCount
    });
  }

  return {
    domainAuthority,
    pageAuthority,
    totalBacklinks,
    referringDomains,
    dofollowRatio: (seed % 40) + 40, // 40-80%
    spamScore: (seed % 15), // 0-14%
    topAnchors: [
      { text: domain, percent: 35 },
      { text: "click here", percent: 15 },
      { text: "website", percent: 10 },
      { text: "read more", percent: 5 },
      { text: domain.split('.')[0], percent: 35 }
    ],
    topReferrers
  };
};

/**
 * Analyzes HTML content for SEO best practices
 */
export const analyzeSeoHtml = (html: string): SeoAuditResult => {
  const issues: AuditIssue[] = [];
  let score = 100;

  // Basic parsing
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i);
  const h1Matches = html.match(/<h1[^>]*>/gi) || [];
  const imgMatches = html.match(/<img[^>]*>/gi) || [];
  const internalLinkMatches = html.match(/<a[^>]*href=["'](?!(http|https|mailto|tel):)[^"']*["'][^>]*>/gi) || [];

  // 1. Title Check
  if (titleMatch && titleMatch[1]) {
    const len = titleMatch[1].length;
    if (len < 30 || len > 60) {
      issues.push({ 
        type: 'warning', 
        label: 'Title Length', 
        details: `Title is ${len} chars. Optimal is 30-60.`,
        recommendation: "Shorten or lengthen your title tag to ensure it displays fully in search results without being cut off."
      });
      score -= 5;
    } else {
      issues.push({ type: 'success', label: 'Title Tag', details: 'Perfect length.' });
    }
  } else {
    issues.push({ 
      type: 'error', 
      label: 'Missing Title', 
      details: 'No <title> tag found.',
      recommendation: "Add a <title> tag within the <head> section of your HTML."
    });
    score -= 20;
  }

  // 2. Meta Description
  if (metaDescMatch && metaDescMatch[1]) {
    const len = metaDescMatch[1].length;
    if (len < 100 || len > 160) {
      issues.push({ 
        type: 'warning', 
        label: 'Meta Description Length', 
        details: `Description is ${len} chars. Optimal is 120-160.`,
        recommendation: "Adjust description length. Too short fails to engage; too long gets truncated."
      });
      score -= 5;
    } else {
      issues.push({ type: 'success', label: 'Meta Description', details: 'Perfect length.' });
    }
  } else {
    issues.push({ 
      type: 'error', 
      label: 'Missing Meta Description', 
      details: 'No meta description found.',
      recommendation: "Add a <meta name='description'> tag to summarize your page for search engines and improve CTR."
    });
    score -= 20;
  }

  // 3. H1 Usage
  if (h1Matches.length === 0) {
    issues.push({ 
      type: 'error', 
      label: 'Missing H1', 
      details: 'No H1 tag found. Each page needs one main heading.',
      recommendation: "Add exactly one <h1> tag that describes the main topic of the page."
    });
    score -= 15;
  } else if (h1Matches.length > 1) {
    issues.push({ 
      type: 'warning', 
      label: 'Multiple H1s', 
      details: `Found ${h1Matches.length} H1 tags. Use only one per page.`,
      recommendation: "Use only one <h1> tag for the main title, and use <h2>-<h6> for subsections."
    });
    score -= 10;
  } else {
    issues.push({ type: 'success', label: 'H1 Tag', details: 'One H1 tag found.' });
  }

  // 4. Image Alt Tags
  let missingAlts = 0;
  imgMatches.forEach(img => {
    if (!img.includes('alt=')) missingAlts++;
  });
  
  if (missingAlts > 0) {
    issues.push({ 
      type: 'warning', 
      label: 'Missing Alt Text', 
      details: `${missingAlts} images are missing alt text.`,
      recommendation: "Add descriptive 'alt' attributes to all <img> tags to improve accessibility and image SEO."
    });
    score -= (missingAlts * 2);
  } else if (imgMatches.length > 0) {
    issues.push({ type: 'success', label: 'Image Alt Text', details: 'All images have alt text.' });
  }

  // Mock Performance
  const loadTime = Number((Math.random() * 2 + 0.5).toFixed(2));
  if (loadTime > 2.0) {
    issues.push({ 
      type: 'warning', 
      label: 'Page Speed', 
      details: `Estimated load time ${loadTime}s is slow.`,
      recommendation: "Optimize images, minify CSS/JS files, and leverage browser caching to reduce load time."
    });
    score -= 10;
  }

  return {
    score: Math.max(0, score),
    loadTime,
    issues,
    details: {
      metaTitle: !!titleMatch,
      metaDesc: !!metaDescMatch,
      h1Count: h1Matches.length,
      imgAltMissing: missingAlts,
      internalLinks: internalLinkMatches.length
    }
  };
};
