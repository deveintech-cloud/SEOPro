import React from 'react';
import { TOOLS_NAV, MOCK_BLOG_POSTS } from '../constants';
import { ToolId, BlogPost } from '../types';
import { ArrowRight, Star, BookOpen, CheckCircle, Shield, TrendingUp, HelpCircle } from 'lucide-react';
import AdPlaceholder from './AdPlaceholder';

interface DashboardProps {
  onNavigate: (tool: ToolId) => void;
  onViewPost: (post: BlogPost) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate, onViewPost }) => {
  return (
    <div className="space-y-16">
      {/* Hero Section - Publisher Content: Value Proposition */}
      <section className="text-center py-12 px-4 space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
          Professional <span className="text-brand-600 dark:text-brand-400">SEO Tools</span> for Data-Driven Growth
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          SEOPro Suite is a comprehensive digital marketing toolkit designed for webmasters, content creators, and agencies in South Africa and globally. We provide free, enterprise-grade analysis tools to help you optimize on-page content, analyze backlink profiles, and improve technical site health without expensive subscriptions.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1"><CheckCircle size={16} className="text-emerald-500" /> No Credit Card Required</span>
            <span className="flex items-center gap-1"><CheckCircle size={16} className="text-emerald-500" /> Real-Time Analysis</span>
            <span className="flex items-center gap-1"><CheckCircle size={16} className="text-emerald-500" /> Privacy Focused</span>
        </div>
        <AdPlaceholder width={728} height={90} className="mx-auto hidden md:flex mt-8" slotName="Leaderboard Ad" />
      </section>

      {/* Core Tools Grid - Structured Navigation */}
      <section className="scroll-mt-20" id="tools">
        <div className="flex items-center justify-between mb-8 px-2 border-l-4 border-brand-500 pl-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Essential Marketing Utilities</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Direct access to our most popular optimization engines.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS_NAV.filter(t => t.id !== 'dashboard').map((tool) => (
            <div 
              key={tool.id}
              onClick={() => onNavigate(tool.id as ToolId)}
              className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-brand-200 dark:hover:border-brand-700 hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden flex flex-col"
            >
              <div className="w-14 h-14 bg-brand-50 dark:bg-slate-700 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 group-hover:scale-110 transition-transform">
                <tool.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{tool.label}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                Use our {tool.label} to scan your content or website structure against 200+ ranking factors used by modern search engines.
              </p>
              
              <div className="flex items-center text-brand-600 dark:text-brand-400 font-bold group-hover:gap-2 transition-all mt-auto">
                Start Analysis <ArrowRight size={16} className="ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Informational Content Block - AdSense Requirement: "Valuable Inventory" */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Why use SEOPro Suite?</h2>
            <div className="space-y-4">
                <div className="flex gap-4">
                    <div className="mt-1 bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg text-indigo-600 dark:text-indigo-400 h-fit"><Shield size={20} /></div>
                    <div>
                        <h3 className="font-bold text-slate-800 dark:text-white text-lg">Data Privacy First</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Unlike other tools that store your data, our analysis runs primarily in your browser. We respect your intellectual property and do not harvest your keywords.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="mt-1 bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg text-indigo-600 dark:text-indigo-400 h-fit"><TrendingUp size={20} /></div>
                    <div>
                        <h3 className="font-bold text-slate-800 dark:text-white text-lg">Aligned with Google's Core Updates</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Our algorithms are updated monthly to reflect the latest shifts in Search Generative Experience (SGE) and E-E-A-T guidelines.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Latest Platform Updates</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-bold mt-0.5">NEW</span>
                    <span><strong>Readability Engine:</strong> Now supports Flesch-Kincaid Grade Level 2.0.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-bold mt-0.5">UPDATE</span>
                    <span><strong>Backlink Checker:</strong> Database expanded to include 500M+ new indexing points.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full font-bold mt-0.5">AI</span>
                    <span><strong>Gemini Integration:</strong> 2.5 Flash model now powering meta tag suggestions.</span>
                </li>
            </ul>
        </div>
      </section>

      {/* Blog/Resources Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            Expert Insights & Strategy
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_BLOG_POSTS.map((post, idx) => (
            <div 
              key={idx} 
              onClick={() => onViewPost(post)}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all cursor-pointer group hover:border-indigo-100 dark:hover:border-slate-600 flex flex-col"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2.5 py-1 rounded-full uppercase tracking-wide">
                  <BookOpen size={12} /> Article
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">{post.readTime}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-3 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                {post.description}
              </p>
              <div className="flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform mt-auto">
                Read Analysis <ArrowRight size={14} className="ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section - AdSense requires clear site purpose */}
      <section className="py-8 border-t border-slate-200 dark:border-slate-800">
         <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
         <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2"><HelpCircle size={18} className="text-brand-500"/> Is SEOPro Suite really free?</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Yes, our core tools including Keyword Density, Meta Generator, and basic Audits are completely free to use. We are supported by ad revenue and our premium API plans for enterprise users.</p>
            </div>
            <div className="space-y-4">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2"><HelpCircle size={18} className="text-brand-500"/> How accurate is the data?</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Our on-page analysis uses the same DOM parsing logic as major search engine crawlers. Backlink data is estimated based on open-source indices and is intended for comparative analysis.</p>
            </div>
            <div className="space-y-4">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2"><HelpCircle size={18} className="text-brand-500"/> Do you offer an API?</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Yes, developers can access our analysis engine via our REST API. Please check the "Upgrade to Pro" section for documentation and rate limits.</p>
            </div>
             <div className="space-y-4">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2"><HelpCircle size={18} className="text-brand-500"/> Can I use this for client reports?</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Absolutely. The free tools are perfect for generating quick insights for client proposals. For white-labeled PDF reports, we recommend the Professional plan.</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Dashboard;