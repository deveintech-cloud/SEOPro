
import { AffiliateLink, BlogPost } from './types';
import { LayoutDashboard, FileText, Search, BookOpen, Link as LinkIcon, BarChart } from 'lucide-react';

export const TOOLS_NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'keyword-density', label: 'Keyword Density', icon: FileText },
  { id: 'meta-tags', label: 'Meta Tag Generator', icon: Search },
  { id: 'readability', label: 'Readability Score', icon: BookOpen },
  { id: 'backlink', label: 'Backlink Checker', icon: LinkIcon },
  { id: 'seo-audit', label: 'SEO Audit', icon: BarChart },
];

export const AFFILIATE_LINKS: AffiliateLink[] = [
  {
    name: "Semrush",
    description: "All-in-one Marketing Toolkit",
    url: "#",
    category: "tools",
    icon: "https://picsum.photos/40/40?random=1"
  },
  {
    name: "Bluehost",
    description: "Recommended Hosting",
    url: "#",
    category: "hosting",
    icon: "https://picsum.photos/40/40?random=2"
  },
  {
    name: "Elegant Themes",
    description: "Premium WordPress Themes",
    url: "#",
    category: "themes",
    icon: "https://picsum.photos/40/40?random=3"
  }
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'seo-trends-2025',
    title: "10 SEO Trends for 2025: Surviving the AI Revolution",
    date: "Oct 28, 2024",
    readTime: "8 min read",
    category: "Industry Strategy",
    author: "Sarah Jenkins, SEO Strategist",
    description: "Search is evolving faster than ever with Google's SGE (Search Generative Experience). From the rise of 'zero-click' searches to the absolute necessity of E-E-A-T, we break down the 10 critical shifts you must adapt to if you want to stay visible in an AI-first world.",
    content: `
      <h2>The Paradigm Shift: From Search Engines to Answer Engines</h2>
      <p>The introduction of Google's Search Generative Experience (SGE) marks the biggest disruption to SEO since the invention of the PageRank algorithm. In 2025, we are no longer just optimizing for blue links; we are optimizing for AI snapshots and conversational interfaces. Here is your survival guide.</p>
      
      <h3>1. SGE and the "Zero-Click" Reality</h3>
      <p>With AI summaries pushing organic results further down the page, ranking #1 is no longer enough. The goal for 2025 is to become the <strong>cited source</strong> within the AI snapshot. This requires structuring content in concise, answer-first formats that Large Language Models (LLMs) can easily digest and reproduce.</p>
      
      <h3>2. E-E-A-T is Your Shield Against "AI Slop"</h3>
      <p>As the web floods with AI-generated content, Google places a premium on Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). Real human experience is the new gold standard. <strong>Actionable tip:</strong> Enhance author bios with specific credentials and use first-person narratives that demonstrate hands-on experience with the topic.</p>
      
      <h3>3. The Rise of "Hidden Gems"</h3>
      <p>Google's algorithm updates now prioritize forum discussions (Reddit, Quora) and personal blogs to surface authentic human perspectives. Creating community-focused content and engaging in industry discussions is now a viable SEO strategy.</p>
      
      <h3>4. Video SEO and "Search off Google"</h3>
      <p>For Gen Z, TikTok and YouTube are primary search engines. 2025 SEO strategies must include video optimization: transcriptions, chapter markers, and keyword-rich titles to appear in Google's video carousels and answer packs.</p>
      
      <h3>5. Intent optimization over Keyword Matching</h3>
      <p>Exact match keywords are dying. Semantic search understands the "why" behind the query. Focus on answering the user's next three questions before they even ask them. Comprehensive topical authority wins over individual keyword targeting.</p>
      
      <h3>6. Technical SEO: Schema is the Language of AI</h3>
      <p>If LLMs are the readers, Schema markup is the translator. Implementing robust structured data (Organization, Person, FAQ, Article) is non-negotiable to help AI agents parse and trust your content contextually.</p>
      
      <h3>7. User Signals (Navboost)</h3>
      <p>Google confirms that user interaction data (clicks, dwell time, return visits) heavily influences rankings. A high bounce rate due to poor UX or invasive ads will tank your rankings faster than ever.</p>
      
      <h3>8. Brand Authority as a Ranking Factor</h3>
      <p>In a world of synthetic content, brands are trust anchors. Build your entity's footprint through digital PR, mentions (even unlinked), and consistent knowledge panel management.</p>
      
      <h3>9. Local SEO: The Visual Evolution</h3>
      <p>Local search is becoming visual-first. Google Maps listings with high-quality, user-generated photos and videos are seeing significantly higher conversion rates than text-heavy profiles.</p>
      
      <h3>10. Sustainable SEO</h3>
      <p>Finally, the trend is moving back to "less is more." Pruning low-quality content (content decay) to improve overall site health is often more effective than publishing mediocre new posts daily.</p>
    `
  },
  {
    id: 'core-web-vitals-inp',
    title: "Mastering Core Web Vitals: INP, LCP, and CLS Explained",
    date: "Oct 25, 2024",
    readTime: "6 min read",
    category: "Technical SEO",
    author: "Mike Chen, Web Performance Lead",
    description: "Speed isn't just about loading time—it's about interaction. Google's new INP (Interaction to Next Paint) metric is a game changer. Learn actionable, non-technical steps to pass the Web Vitals assessment and secure that coveted green score for better mobile rankings.",
    content: `
      <h2>The UX Ranking Factor</h2>
      <p>Google's Page Experience update made it clear: if your site annoys users, it won't rank. Core Web Vitals are the technical metrics Google uses to measure that annoyance. In 2024, Google replaced First Input Delay (FID) with <strong>Interaction to Next Paint (INP)</strong>, shifting the focus from "first click" to "overall responsiveness."</p>

      <h3>1. Largest Contentful Paint (LCP): Loading Performance</h3>
      <p>LCP measures how long it takes for the main content (hero image or H1) to load. <strong>Target: Under 2.5 seconds.</strong></p>
      <ul>
        <li><strong>The Fix:</strong> Upgrade your hosting. Cheap shared hosting is the #1 killer of LCP.</li>
        <li><strong>Image Optimization:</strong> Convert PNGs to WebP. Ensure your hero image is <em>not</em> lazy-loaded; it should prioritize loading immediately.</li>
      </ul>

      <h3>2. Cumulative Layout Shift (CLS): Visual Stability</h3>
      <p>Does your page jump around while loading, causing users to misclick? That's CLS. <strong>Target: 0.1 or less.</strong></p>
      <ul>
        <li><strong>The Fix:</strong> Always define <code>width</code> and <code>height</code> attributes for images and video.</li>
        <li><strong>Ad Space:</strong> Reserve static space for ad slots so content doesn't get pushed down when the ad loads.</li>
      </ul>

      <h3>3. Interaction to Next Paint (INP): The New Standard</h3>
      <p>INP measures the time between a user interaction (click, tap, key press) and the visual feedback from the browser. Unlike FID, which only measured the first click, INP monitors <em>all</em> interactions throughout the visit.</p>
      
      <h4>Why You Might Be Failing INP</h4>
      <p>If you click a "Menu" button and nothing happens for 500ms because the browser is busy running heavy JavaScript, you fail INP. The goal is <strong>under 200ms</strong>.</p>
      
      <h4>How to Optimize INP:</h4>
      <ul>
        <li><strong>Break up Long Tasks:</strong> JavaScript tasks running longer than 50ms block the main thread. Developers should split these into smaller chunks.</li>
        <li><strong>Defer Non-Essential JS:</strong> Chat widgets, analytics, and social pixels often clog the main thread. Defer them until after the main content loads.</li>
        <li><strong>Visual Feedback:</strong> Ensure buttons have immediate CSS states (active/hover) so the user knows their click was registered, even if the background process takes a moment.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Passing Core Web Vitals isn't just a vanity metric—it's a confirmed ranking tie-breaker and essential for mobile conversion rates. Use Google PageSpeed Insights and Search Console's "Core Web Vitals" report to identify your weak spots today.</p>
    `
  },
  {
    id: 'high-ctr-meta-tags',
    title: "The Art of High-CTR Meta Tags: Writing for Humans",
    date: "Oct 22, 2024",
    readTime: "5 min read",
    category: "On-Page SEO",
    author: "Emma Roberts, Copy Chief",
    description: "Stop writing for robots. Your Title Tag is your 2-second sales pitch in the SERPs. Discover how to use psychological hooks and 'power words' to craft meta descriptions that irresistibly drive clicks, even if you aren't ranking in the #1 spot.",
    content: `
      <h2>Rankings vs. Clicks</h2>
      <p>You can rank #1 for a keyword, but if your title tag is boring, the user will scroll right past you to the compelling result at position #3. Organic Click-Through Rate (CTR) is not just a performance metric—it's a feedback loop that tells Google your result is relevant.</p>

      <h3>The Title Tag: Your Headline</h3>
      <p>Your title tag is the single most important on-page SEO element. It must balance keyword relevance with psychological appeal.</p>
      <ul>
        <li><strong>Front-Load Keywords:</strong> Place your primary keyword as close to the start as possible. Mobile screens often truncate titles after 50-60 characters.</li>
        <li><strong>Use Brackets and Parentheses:</strong> Data shows that titles with <code>[Guide]</code>, <code>(2025 Update)</code>, or <code>[PDF]</code> get up to 38% higher CTR. It promises a specific format.</li>
        <li><strong>The Curiosity Gap:</strong> "10 SEO Tips" is boring. "10 SEO Tips That Doubled Our Traffic" creates a gap between what the user knows and what they <em>want</em> to know.</li>
      </ul>

      <h3>The Meta Description: The Sales Pitch</h3>
      <p>Meta descriptions are not a direct ranking factor, but they are crucial for CTR. Think of them as ad copy.</p>
      <ul>
        <li><strong>Address the Pain Point:</strong> Start with the problem. "Struggling to rank?" instantly qualifies the audience.</li>
        <li><strong>Offer a Solution:</strong> "Our free tool analyzes your site in seconds."</li>
        <li><strong>Use Power Words:</strong> Words like <em>Proven, Instant, Free, Ultimate,</em> and <em>Easy</em> trigger subconscious action.</li>
        <li><strong>Bold the Keywords:</strong> Google often bolds the search terms in the description, drawing the eye. Ensure your description naturally includes the query.</li>
      </ul>

      <h3>Rich Snippets: Visual Dominance</h3>
      <p>Standard text results are invisible. Use Schema markup to gain visual real estate:</p>
      <ul>
        <li><strong>Review Stars:</strong> Immediate social proof.</li>
        <li><strong>FAQ Schema:</strong> Take up more vertical space with dropdown questions.</li>
        <li><strong>Price/In-Stock:</strong> crucial for e-commerce.</li>
      </ul>

      <h3>A/B Testing Your SERP Presence</h3>
      <p>Don't set it and forget it. If a page has high impressions but low clicks in Search Console, rewrite the title tag. A 1% increase in CTR can result in thousands of new visitors without building a single new backlink.</p>
    `
  },
];
