import React from 'react';
import { Check, Zap, Shield, TrendingUp } from 'lucide-react';
import { ToolId } from '../../types';

interface UpgradeProProps {
  onNavigate: (tool: ToolId) => void;
}

const UpgradePro: React.FC<UpgradeProProps> = ({ onNavigate }) => {
  
  const handleContactRedirect = () => {
    onNavigate(ToolId.CONTACT);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 py-8">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Unlock Your Potential</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Supercharge Your SEO Strategy
        </h1>
        <p className="text-lg text-slate-600">
          Get unlimited access to premium tools, real-time data, and advanced analytics.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {/* Free Plan */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative h-full flex flex-col">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
          <p className="text-slate-500 text-sm mb-6">Essential tools for beginners.</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-slate-900">$0</span>
            <span className="text-slate-500">/mo</span>
          </div>
          
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-sm text-slate-700">
              <div className="p-1 bg-slate-100 rounded-full"><Check size={12} className="text-slate-600" /></div>
              Basic Keyword Density
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-700">
               <div className="p-1 bg-slate-100 rounded-full"><Check size={12} className="text-slate-600" /></div>
               Meta Tag Generator
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-700">
               <div className="p-1 bg-slate-100 rounded-full"><Check size={12} className="text-slate-600" /></div>
               Basic Readability Score
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-700">
               <div className="p-1 bg-slate-100 rounded-full"><Check size={12} className="text-slate-600" /></div>
               Limited SEO Audit (Public)
            </li>
          </ul>

          <button disabled className="w-full py-3 bg-slate-100 text-slate-400 font-bold rounded-xl cursor-not-allowed">
            Current Plan
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-indigo-500 relative transform md:-translate-y-4 h-full flex flex-col">
          <div className="absolute top-0 right-0 bg-gradient-to-r from-brand-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">
            Most Popular
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
          <p className="text-indigo-200 text-sm mb-6">For serious marketers & agencies.</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">$29</span>
            <span className="text-indigo-200">/mo</span>
          </div>
          
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-sm text-indigo-100">
              <div className="p-1 bg-brand-500 rounded-full"><Check size={12} className="text-white" /></div>
              Real-time Backlink Data
            </li>
            <li className="flex items-center gap-3 text-sm text-indigo-100">
              <div className="p-1 bg-brand-500 rounded-full"><Check size={12} className="text-white" /></div>
              Unlimited AI Suggestions
            </li>
            <li className="flex items-center gap-3 text-sm text-indigo-100">
              <div className="p-1 bg-brand-500 rounded-full"><Check size={12} className="text-white" /></div>
              Full SEO Site Audit Reports
            </li>
            <li className="flex items-center gap-3 text-sm text-indigo-100">
              <div className="p-1 bg-brand-500 rounded-full"><Check size={12} className="text-white" /></div>
              Competitor Analysis
            </li>
            <li className="flex items-center gap-3 text-sm text-indigo-100">
              <div className="p-1 bg-brand-500 rounded-full"><Check size={12} className="text-white" /></div>
              Export to PDF & CSV
            </li>
          </ul>

           <button 
             onClick={handleContactRedirect}
             className="w-full py-3 bg-gradient-to-r from-brand-500 to-indigo-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-brand-500/25 transition-all"
           >
              Start Free 7-Day Trial
           </button>
          <p className="text-center text-xs text-indigo-300 mt-3">No credit card required for waitlist</p>
        </div>

        {/* Enterprise */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative h-full flex flex-col">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
          <p className="text-slate-500 text-sm mb-6">Custom solutions for large teams.</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-slate-900">$99</span>
            <span className="text-slate-500">/mo</span>
          </div>
          
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-sm text-slate-700">
               <div className="p-1 bg-brand-100 rounded-full"><Check size={12} className="text-brand-700" /></div>
               Everything in Pro
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-700">
               <div className="p-1 bg-brand-100 rounded-full"><Check size={12} className="text-brand-700" /></div>
               API Access
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-700">
               <div className="p-1 bg-brand-100 rounded-full"><Check size={12} className="text-brand-700" /></div>
               White-label Reports
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-700">
               <div className="p-1 bg-brand-100 rounded-full"><Check size={12} className="text-brand-700" /></div>
               Priority 24/7 Support
            </li>
          </ul>

          <button 
            onClick={handleContactRedirect}
            className="w-full py-3 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-900 hover:text-slate-900 transition-all"
          >
              Contact Sales
          </button>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Go Pro?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-2">
                    <Zap />
                </div>
                <h3 className="font-bold text-slate-900">Faster Analysis</h3>
                <p className="text-sm text-slate-600">Skip the queue with high-speed priority processing servers.</p>
            </div>
            <div className="space-y-3">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-2">
                    <Shield />
                </div>
                <h3 className="font-bold text-slate-900">Historical Data</h3>
                <p className="text-sm text-slate-600">Access up to 5 years of historical backlink and keyword data.</p>
            </div>
            <div className="space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-2">
                    <TrendingUp />
                </div>
                <h3 className="font-bold text-slate-900">Competitor Tracking</h3>
                <p className="text-sm text-slate-600">Automatically track and monitor up to 10 competitor websites.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradePro;