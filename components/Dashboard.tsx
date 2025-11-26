import React from 'react';
import { TOOLS_NAV, MOCK_BLOG_POSTS } from '../constants';
import { ToolId, BlogPost } from '../types';
import { ArrowRight, Star, BookOpen } from 'lucide-react';
import AdPlaceholder from './AdPlaceholder';

interface DashboardProps {
  onNavigate: (tool: ToolId) => void;
  onViewPost: (post: BlogPost) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate, onViewPost }) => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
          Master Your <span className="text-brand-600 dark:text-brand-400">SEO Strategy</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Free professional-grade digital marketing tools to analyze, optimize, and grow your online presence with data-driven insights.
        </p>
        <AdPlaceholder width={728} height={90} className="mx-auto hidden md:flex" slotName="Leaderboard Ad" />
      </section>

      {/* Tools Grid */}
      <section>
        <div className="flex items-center justify-between mb-6 px-2">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Popular Tools</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS_NAV.filter(t => t.id !== 'dashboard').map((tool) => (
            <div 
              key={tool.id}
              onClick={() => onNavigate(tool.id as ToolId)}
              className="group bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-brand-200 dark:hover:border-brand-700 hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                <tool.icon size={100} className="text-brand-600 dark:text-brand-400 transform rotate-12 translate-x-4 -translate-y-4" />
              </div>
              
              <div className="w-12 h-12 bg-brand-50 dark:bg-slate-700 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 mb-4 group-hover:scale-110 transition-transform">
                <tool.icon size={24} />
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{tool.label}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                Optimize your content with our advanced {tool.label.toLowerCase()}. Fast, free, and secure.
              </p>
              
              <div className="flex items-center text-brand-600 dark:text-brand-400 text-sm font-bold group-hover:gap-2 transition-all">
                Launch Tool <ArrowRight size={16} className="ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog/Resources Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            Latest SEO Insights
            <span className="text-xs font-normal text-slate-400 dark:text-slate-500 px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">Updated Daily</span>
          </h2>
          <div className="grid gap-6">
            {MOCK_BLOG_POSTS.map((post, idx) => (
              <div 
                key={idx} 
                onClick={() => onViewPost(post)}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all cursor-pointer group hover:border-indigo-100 dark:hover:border-slate-600"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2.5 py-1 rounded-full uppercase tracking-wide">
                    <BookOpen size={12} /> Article
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">{post.readTime} • {post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-3">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  {post.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                  Read Analysis <ArrowRight size={14} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Featured Partner</h2>
          <div className="bg-indigo-900 rounded-xl p-6 text-center text-white relative overflow-hidden shadow-lg">
            <div className="relative z-10">
              <div className="inline-block p-3 bg-indigo-800 rounded-full mb-4 shadow-inner">
                <Star className="text-yellow-400 fill-yellow-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Semrush Pro</h3>
              <p className="text-indigo-200 text-sm mb-6 leading-relaxed">Get the industry-standard all-in-one marketing toolkit. Keyword research, site audit, and competitor tracking.</p>
              <button className="w-full py-3 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors shadow-md">
                Start Free 7-Day Trial
              </button>
            </div>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          </div>

           <AdPlaceholder width={300} height={250} className="mx-auto" slotName="Sidebar Ad" />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;