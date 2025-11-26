import React, { useEffect } from 'react';
import { BlogPost as BlogPostType, ToolId } from '../../types';
import { ArrowLeft, Clock, Calendar, User, Share2, Tag } from 'lucide-react';
import AdPlaceholder from '../AdPlaceholder';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post.id]);

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4">
      <button 
        onClick={onBack}
        className="flex items-center text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors mb-6 group"
      >
        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </button>

      <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
        {/* Header */}
        <div className="p-8 md:p-12 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
          <div className="flex flex-wrap gap-4 items-center text-sm text-slate-500 dark:text-slate-400 mb-6">
            <span className="flex items-center gap-1.5 bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 px-3 py-1 rounded-full font-semibold">
              <Tag size={14} /> {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{post.author}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">SEOPro Contributor</p>
              </div>
            </div>
            
            <button className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-full transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div 
              className="prose prose-lg prose-slate dark:prose-invert max-w-none 
                prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:text-indigo-900 dark:prose-h3:text-indigo-300 prose-h3:mt-6
                prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed
                prose-li:text-slate-600 dark:prose-li:text-slate-300
                prose-strong:text-slate-800 dark:prose-strong:text-slate-100 prose-strong:font-bold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block space-y-8">
            <div className="sticky top-24">
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">Advertisement</p>
              <AdPlaceholder width={160} height={600} slotName="Sidebar Skyscraper" />
            </div>
          </div>
        </div>

        {/* Footer Ad */}
        <div className="p-8 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30 flex justify-center">
           <AdPlaceholder width={728} height={90} className="hidden md:flex" slotName="Footer Ad" />
           <AdPlaceholder width={300} height={250} className="md:hidden flex" slotName="Footer Ad" />
        </div>
      </article>
    </div>
  );
};

export default BlogPost;