import React from 'react';
import { Check, Zap, Shield, TrendingUp, X as XIcon, HelpCircle, Server, Users, BarChart } from 'lucide-react';
import { ToolId } from '../../types';

interface UpgradeProProps {
  onNavigate: (tool: ToolId) => void;
}

const UpgradePro: React.FC<UpgradeProProps> = ({ onNavigate }) => {
  
  const handleContactRedirect = () => {
    onNavigate(ToolId.CONTACT);
  };

  const featureCategories = [
    {
      title: "Core SEO Tools",
      icon: <Zap size={18} className="text-amber-500" />,
      rows: [
        { name: 'Keyword Density Analysis', starter: 'Basic', pro: 'Advanced + LSI', ent: 'Unlimited' },
        { name: 'Meta Tag Generator', starter: 'Manual', pro: 'AI Auto-fill', ent: 'Bulk Generation' },
        { name: 'Readability Score', starter: 'Standard', pro: 'Deep Analysis', ent: 'Deep Analysis' },
        { name: 'Social Preview', starter: true, pro: true, ent: true },
      ]
    },
    {
      title: "Advanced Intelligence",
      icon: <TrendingUp size={18} className="text-brand-500" />,
      rows: [
        { name: 'Backlink Checker', starter: 'Simulated Est.', pro: 'Real-time Data', ent: 'Raw API Access' },
        { name: 'Site Audit Capacity', starter: '10 Pages / Day', pro: '10,000 Pages / Mo', ent: '500,000+ Pages' },
        { name: 'Competitor Tracking', starter: false, pro: '5 Sites', ent: 'Unlimited' },
        { name: 'Keyword Rank Tracking', starter: false, pro: '500 Keywords', ent: 'Unlimited' },
        { name: 'AI Optimization Tokens', starter: '5 / Day', pro: 'Unlimited', ent: 'Unlimited' },
      ]
    },
    {
      title: "Reporting & Access",
      icon: <BarChart size={18} className="text-indigo-500" />,
      rows: [
        { name: 'PDF Reports', starter: 'Standard', pro: 'White-label', ent: 'Custom Branding' },
        { name: 'Data Retention', starter: 'Session Only', pro: '12 Months', ent: 'Lifetime' },
        { name: 'API Access', starter: false, pro: false, ent: true },
        { name: 'Team Seats', starter: '1 User', pro: '1 User', ent: 'Unlimited + SSO' },
      ]
    },
    {
      title: "Support & Security",
      icon: <Shield size={18} className="text-emerald-500" />,
      rows: [
        { name: 'Support Level', starter: 'Community', pro: 'Priority Email', ent: 'Dedicated Manager' },
        { name: 'Onboarding', starter: 'Self-serve', pro: 'Webinar', ent: '1-on-1 Training' },
        { name: 'SLA Guarantee', starter: false, pro: false, ent: '99.9% Uptime' },
      ]
    }
  ];

  const renderCellContent = (content: string | boolean) => {
    if (content === true) return <Check className="mx-auto text-emerald-500" size={20} />;
    if (content === false) return <XIcon className="mx-auto text-slate-300 dark:text-slate-600" size={20} />;
    return content;
  };

  return (
    <div className="max-w-7xl mx-auto space-y-16 py-8">
      {/* Hero */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-brand-600 dark:text-brand-400 font-bold tracking-widest uppercase text-xs">Unlock Your Potential</span>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
          Supercharge Your SEO
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Choose the plan that fits your growth. From essential tools for beginners to enterprise-grade API access.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 items-stretch relative z-10">
        {/* Starter */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Starter</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">Essential tools for hobbyists.</p>
          <div className="mb-8">
            <span className="text-5xl font-black text-slate-900 dark:text-white">$0</span>
            <span className="text-slate-500 dark:text-slate-400 font-medium">/mo</span>
          </div>
          
          <button disabled className="w-full py-4 bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 font-bold rounded-xl mb-8 cursor-not-allowed text-sm uppercase tracking-wide">
            Current Plan
          </button>

          <ul className="space-y-4 flex-1">
            <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
              <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>Keyword Density Analysis</span>
            </li>
             <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
              <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>Meta Tag Generator</span>
            </li>
             <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
              <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>Basic Readability Score</span>
            </li>
             <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
              <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>Limited SEO Audit (10/day)</span>
            </li>
          </ul>
        </div>

        {/* Professional */}
        <div className="bg-slate-900 dark:bg-slate-950 p-8 rounded-3xl shadow-2xl border border-indigo-500/50 flex flex-col relative transform md:-translate-y-4 md:scale-105 z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-500 to-indigo-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            Most Popular
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
          <p className="text-indigo-200 mb-6 text-sm">For freelancers & marketers.</p>
          <div className="mb-8">
            <span className="text-5xl font-black text-white">$29</span>
            <span className="text-indigo-200 font-medium">/mo</span>
          </div>

          <button 
             onClick={handleContactRedirect}
             className="w-full py-4 bg-gradient-to-r from-brand-500 to-indigo-500 text-white font-bold rounded-xl mb-3 hover:shadow-lg hover:shadow-brand-500/25 transition-all text-sm uppercase tracking-wide"
           >
              Start Free 7-Day Trial
           </button>
           <p className="text-center text-xs text-indigo-400 mb-8">No credit card required</p>
          
          <ul className="space-y-4 flex-1">
            <li className="flex items-start gap-3 text-sm text-indigo-50">
              <div className="p-0.5 bg-brand-500 rounded-full shrink-0 mt-0.5"><Check size={12} className="text-white" /></div>
              <span><strong>Real-time</strong> Backlink Data</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-indigo-50">
              <div className="p-0.5 bg-brand-500 rounded-full shrink-0 mt-0.5"><Check size={12} className="text-white" /></div>
              <span>Unlimited AI Suggestions</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-indigo-50">
              <div className="p-0.5 bg-brand-500 rounded-full shrink-0 mt-0.5"><Check size={12} className="text-white" /></div>
              <span>Competitor Tracking (5 Sites)</span>
            </li>
             <li className="flex items-start gap-3 text-sm text-indigo-50">
              <div className="p-0.5 bg-brand-500 rounded-full shrink-0 mt-0.5"><Check size={12} className="text-white" /></div>
              <span>White-label PDF Reports</span>
            </li>
             <li className="flex items-start gap-3 text-sm text-indigo-50">
              <div className="p-0.5 bg-brand-500 rounded-full shrink-0 mt-0.5"><Check size={12} className="text-white" /></div>
              <span>Advanced SEO Audit (10k pages)</span>
            </li>
          </ul>
        </div>

        {/* Enterprise */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Enterprise</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">For agencies & large teams.</p>
          <div className="mb-8">
            <span className="text-5xl font-black text-slate-900 dark:text-white">$99</span>
            <span className="text-slate-500 dark:text-slate-400 font-medium">/mo</span>
          </div>

          <button 
            onClick={handleContactRedirect}
            className="w-full py-4 bg-slate-800 text-white font-bold rounded-xl mb-8 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 transition-all text-sm uppercase tracking-wide shadow-lg"
          >
              Contact Sales
          </button>
          
          <ul className="space-y-4 flex-1">
            <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
               <Check size={18} className="text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
               <span>Everything in Pro</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
               <Check size={18} className="text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
               <span>Full API Access</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
               <Check size={18} className="text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
               <span>Unlimited Competitors</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
               <Check size={18} className="text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
               <span>Custom Integrations</span>
            </li>
             <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
               <Check size={18} className="text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
               <span>Dedicated Account Manager</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-8 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center">Compare All Features</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700">
                <th className="p-6 text-left text-sm font-semibold text-slate-500 dark:text-slate-400 w-1/4">Feature Category</th>
                <th className="p-6 text-center text-lg font-bold text-slate-900 dark:text-white w-1/4">Starter</th>
                <th className="p-6 text-center text-lg font-bold text-brand-600 dark:text-brand-400 w-1/4 bg-brand-50/20 dark:bg-brand-900/10">Professional</th>
                <th className="p-6 text-center text-lg font-bold text-slate-900 dark:text-white w-1/4">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {featureCategories.map((category, catIdx) => (
                <React.Fragment key={catIdx}>
                  <tr className="bg-slate-50/80 dark:bg-slate-700/30">
                    <td colSpan={4} className="px-6 py-4">
                      <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider text-xs">
                        {category.icon}
                        {category.title}
                      </div>
                    </td>
                  </tr>
                  {category.rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="hover:bg-slate-50 dark:hover:bg-slate-700/20 transition-colors border-b border-slate-100 dark:border-slate-700 last:border-0">
                      <td className="p-6 text-sm font-medium text-slate-700 dark:text-slate-300 pl-8">{row.name}</td>
                      <td className="p-6 text-center text-sm text-slate-600 dark:text-slate-400">
                        {renderCellContent(row.starter)}
                      </td>
                      <td className="p-6 text-center text-sm font-semibold text-brand-700 dark:text-brand-400 bg-brand-50/10 dark:bg-brand-900/5">
                        {renderCellContent(row.pro)}
                      </td>
                      <td className="p-6 text-center text-sm text-slate-600 dark:text-slate-400">
                        {renderCellContent(row.ent)}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ / Trust */}
      <div className="grid md:grid-cols-3 gap-8 py-8">
         <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
               <HelpCircle size={18} className="text-slate-400" />
               Can I cancel anytime?
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.</p>
         </div>
         <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl">
             <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
               <Zap size={18} className="text-slate-400" />
               Is the API included?
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">API access is available exclusively on the Enterprise plan. Contact sales for documentation.</p>
         </div>
         <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl">
             <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
               <Shield size={18} className="text-slate-400" />
               Secure Payment?
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">All payments are processed securely via Stripe. We never store your credit card information.</p>
         </div>
      </div>
    </div>
  );
};

export default UpgradePro;