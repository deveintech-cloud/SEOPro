import React, { useEffect } from 'react';
import { Users, Globe, Target, Award, ShieldCheck } from 'lucide-react';
import { ToolId } from '../../types';

interface AboutUsProps {
  onNavigate: (tool: ToolId) => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-8">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Democratizing <span className="text-brand-600 dark:text-brand-400">SEO Data</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          We believe high-quality marketing intelligence shouldn't be locked behind expensive paywalls. SEOPro Suite empowers creators in South Africa and beyond.
        </p>
      </section>

      {/* Mission Grid */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Globe size={24} />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Global Access</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Our tools run primarily in the browser, making them accessible even on low-bandwidth connections.
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-center">
           <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Target size={24} />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Precision Data</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            We use the same evaluation logic as modern search engine crawlers (Googlebot, Bingbot) for our audits.
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-center">
           <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4">
            <ShieldCheck size={24} />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Privacy First</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            We do not store your keyword data or analyzed text. Your intellectual property remains yours.
          </p>
        </div>
      </section>

      {/* Our Story / E-E-A-T Content */}
      <section className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-2xl border border-slate-100 dark:border-slate-700 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Users size={24} className="text-brand-600" /> Who We Are
        </h2>
        <div className="prose prose-slate dark:prose-invert max-w-none">
            <p>
                Founded in 2024, SEOPro Suite started as a simple internal toolset for a digital marketing agency based in South Africa. We realized that many small business owners and freelance writers were struggling to afford enterprise tools like Ahrefs or Semrush just to check simple metrics like keyword density or meta tag length.
            </p>
            <p>
                We decided to polish our internal scripts and release them to the public for free.
            </p>
            <p>
                <strong>Our Philosophy:</strong> Good SEO isn't about tricking robots; it's about organizing information clearly for humans. All our tools are built with this "user-first" philosophy in mind, ensuring your content meets the high standards of Google's E-E-A-T guidelines.
            </p>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center py-8">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Ready to optimize your site?</h3>
        <button 
            onClick={() => onNavigate(ToolId.SEO_AUDIT)}
            className="px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-brand-900/20"
        >
            Start Free SEO Audit
        </button>
      </div>
    </div>
  );
};

export default AboutUs;