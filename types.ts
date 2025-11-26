
export interface KeywordData {
  word: string;
  count: number;
  density: number;
}

export interface AnalysisResult {
  totalWords: number;
  keywords: KeywordData[];
  readabilityScore?: number;
}

export enum ToolId {
  DASHBOARD = 'dashboard',
  KEYWORD_DENSITY = 'keyword-density',
  META_TAGS = 'meta-tags',
  READABILITY = 'readability',
  BACKLINK = 'backlink',
  SEO_AUDIT = 'seo-audit',
  CONTACT = 'contact',
  PRIVACY = 'privacy',
  TERMS = 'terms',
  UPGRADE = 'upgrade',
  BLOG_POST = 'blog-post'
}

export interface AffiliateLink {
  name: string;
  description: string;
  url: string;
  category: 'hosting' | 'tools' | 'themes';
  icon: string;
}

export interface MetaTagState {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export interface ReferrerData {
  domain: string;
  authority: number;
  dofollowCount: number;
  nofollowCount: number;
}

export interface BacklinkData {
  domainAuthority: number;
  pageAuthority: number;
  totalBacklinks: number;
  referringDomains: number;
  dofollowRatio: number;
  spamScore: number;
  topAnchors: { text: string; percent: number }[];
  topReferrers: ReferrerData[];
}

export interface AuditIssue {
  type: 'error' | 'warning' | 'success';
  label: string;
  details: string;
  recommendation?: string;
}

export interface SeoAuditResult {
  score: number;
  loadTime: number; // in seconds
  issues: AuditIssue[];
  details: {
    metaTitle: boolean;
    metaDesc: boolean;
    h1Count: number;
    imgAltMissing: number;
    internalLinks: number;
  };
}

export interface ReadabilityResult {
  score: number;
  label: string;
  gradeLevel: number;
  wordCount: number;
  sentenceCount: number;
  complexWords: number;
  avgSentenceLength: number;
  recommendations: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  description: string;
  category: string;
  author: string;
  content: string;
}
