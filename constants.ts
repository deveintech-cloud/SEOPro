import { AffiliateLink } from './types';
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

export const MOCK_BLOG_POSTS = [
  { title: "10 SEO Trends for 2025", date: "Oct 12, 2024", readTime: "5 min read" },
  { title: "Understanding Core Web Vitals", date: "Oct 10, 2024", readTime: "8 min read" },
  { title: "How to Optimize Meta Tags", date: "Oct 05, 2024", readTime: "4 min read" },
];
