import React from 'react';
import { TOOLS_NAV, MOCK_BLOG_POSTS } from '../constants';
import { ToolId } from '../types';
import { ArrowRight, Star } from 'lucide-react';
import AdPlaceholder from './AdPlaceholder';

interface DashboardProps {
  onNavigate: (tool: ToolId) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Master Your <span className="text-brand-600">SEO Strategy</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Free professional-grade digital marketing tools to analyze, optimize, and grow your online presence.
        </p>
        <AdPlaceholder width={728} height={90} className="mx-auto hidden md:flex" slotName="Leaderboard Ad" />
      </section>

      {/* Tools Grid */}
      <section>
        <div className="flex items-center justify-between mb-6 px-2">
          <h2 className="text-2xl font-bold text-slate-800">Popular Tools</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS_NAV.filter(t => t.id !== 'dashboard').map((tool) => (
            <div 
              key={tool.id}
              onClick={() => onNavigate(tool.id as ToolId)}
              className="group bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                <tool.icon size={100} className="text-brand-600 transform rotate-12 translate-x-4 -translate-y-4" />
              </div>
              
              <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-4 group-hover:scale-110 transition-transform">
                <tool.icon size={24} />
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2">{tool.label}</h3>
              <p className="text-slate-500 text-sm mb-4">
                Optimize your content with our advanced {tool.label.toLowerCase()}. fast, free, and secure.
              </p>
              
              <div className="flex items-center text-brand-600 text-sm font-medium group-hover:gap-2 transition-all">
                Launch Tool <ArrowRight size={16} className="ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog/Resources Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Latest SEO Insights</h2>
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-100">
            {MOCK_BLOG_POSTS.map((post, idx) => (
              <div key={idx} className="p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-1 rounded uppercase tracking-wide">Article</span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-brand-600 transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm">
                  Learn the fundamental strategies to improve your ranking...
                </p>
                <div className="mt-4 text-xs text-slate-400">{post.date}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Featured Partner</h2>
          <div className="bg-indigo-900 rounded-xl p-6 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-block p-3 bg-indigo-800 rounded-full mb-4">
                <Star className="text-yellow-400 fill-yellow-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Semrush Pro</h3>
              <p className="text-indigo-200 text-sm mb-6">Get the all-in-one marketing toolkit for digital marketing professionals.</p>
              <button className="w-full py-3 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors">
                Start Free Trial
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
