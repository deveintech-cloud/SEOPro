import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { generateMockBacklinkData } from '../../services/seoService';
import { BacklinkData } from '../../types';
import { Search, Globe, Shield, AlertTriangle, Link as LinkIcon, Download, Lock, TrendingUp, ExternalLink, Copy, Check, BarChart2, AlertOctagon } from 'lucide-react';
import AdPlaceholder from '../AdPlaceholder';

const BacklinkChecker: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<BacklinkData | null>(null);
  const [copied, setCopied] = useState(false);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setLoading(true);
    setCopied(false);
    // Simulate API delay
    setTimeout(() => {
      const result = generateMockBacklinkData(url);
      setData(result);
      setLoading(false);
    }, 1500);
  };

  const handleConnectPremium = () => {
    alert("This would open the Stripe payment modal or API key configuration dialog in a production app.");
  };

  const handleCopyMetrics = () => {
    if (!data) return;

    const summary = `Backlink Analysis for ${url}:
- Domain Authority: ${data.domainAuthority}/100
- Page Authority: ${data.pageAuthority}/100
- Total Backlinks: ${data.totalBacklinks.toLocaleString()}
- Referring Domains: ${data.referringDomains.toLocaleString()}
- Spam Score: ${data.spamScore}%
- DoFollow Ratio: ${data.dofollowRatio}%`;

    navigator.clipboard.writeText(summary).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const COLORS = ['#0d9488', '#cbd5e1'];

  return (
    <div className="space-y-8">
       {/* Intro Section */}
      <div className="space-y-2 mb-2">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Free Backlink Checker</h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-3xl">
          Check the domain authority and backlink profile of any website. Discover who links to your competitors and identify opportunities to build high-quality inbound links.
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">Backlink Analyzer</h2>
          <div className="flex gap-2">
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full flex items-center">Free Tool</span>
             <button 
                onClick={handleConnectPremium}
                className="text-xs font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 hover:bg-amber-100 dark:hover:bg-amber-900/50 border border-amber-200 dark:border-amber-800 px-3 py-1 rounded-full flex items-center gap-1 transition-colors"
             >
                <Lock size={10} /> Connect Premium Data
             </button>
          </div>
        </div>
        
        <form onSubmit={handleAnalyze} className="relative">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter domain URL (e.g. example.com)..."
            className="w-full pl-12 pr-32 py-4 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none text-lg transition-shadow bg-transparent dark:text-white dark:placeholder-slate-500"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-2 top-2 bottom-2 px-6 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Scanning...' : 'Check Links'}
          </button>
        </form>
        <p className="text-xs text-slate-400 mt-3 ml-1 flex items-center gap-1">
          <Globe size={12} />
          Checks Domain Authority, Backlinks count, and Referring Domains
        </p>
      </div>

      {data && (
        <div className="animate-in fade-in slide-in-from-bottom-8 space-y-6">
          <div className="flex justify-between items-center px-1">
             <h3 className="text-lg font-bold text-slate-800 dark:text-white">Analysis Results</h3>
             <button 
                onClick={handleCopyMetrics}
                className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow transition-all"
             >
               {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
               {copied ? 'Copied!' : 'Copy Metrics'}
             </button>
          </div>

          {/* Top Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-center relative overflow-hidden">
              <div className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Domain Authority</div>
              <div className={`text-3xl font-black ${data.domainAuthority > 50 ? 'text-emerald-500' : 'text-amber-500'}`}>
                {data.domainAuthority}
              </div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 mb-2">out of 100</div>
              {/* Progress Bar */}
              <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 mt-2 rounded-full overflow-hidden">
                 <div className={`h-full ${data.domainAuthority > 50 ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ width: `${data.domainAuthority}%` }}></div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-center">
               <div className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Page Authority</div>
              <div className="text-3xl font-black text-indigo-500 dark:text-indigo-400">{data.pageAuthority}</div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">out of 100</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-center">
               <div className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Total Backlinks</div>
              <div className="text-3xl font-black text-slate-700 dark:text-slate-200">{data.totalBacklinks.toLocaleString()}</div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">Indexed Links</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-center">
               <div className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Spam Score</div>
              <div className={`text-3xl font-black ${data.spamScore < 5 ? 'text-emerald-500' : 'text-red-500'}`}>
                {data.spamScore}%
              </div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">Risk Level</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* DoFollow Chart */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 md:col-span-1">
              <h3 className="font-semibold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <LinkIcon size={18} className="text-brand-500" /> Link Types
              </h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'DoFollow', value: data.dofollowRatio },
                        { name: 'NoFollow', value: 100 - data.dofollowRatio }
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {COLORS.map((color, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <RechartsTooltip contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: '#1e293b', color: '#f8fafc' }} />
                    <Legend verticalAlign="bottom" height={36} wrapperStyle={{ color: '#94a3b8' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Anchor Text */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 md:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-slate-800 dark:text-white">Top Anchor Text</h3>
                <button className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400">
                  <Download size={16} />
                </button>
              </div>
              <div className="space-y-4">
                {data.topAnchors.map((anchor, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-slate-700 dark:text-slate-200">{anchor.text}</span>
                      <span className="text-slate-500 dark:text-slate-400">{anchor.percent}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-brand-500 h-2 rounded-full" 
                        style={{ width: `${anchor.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* New: Top Referring Domains */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 md:col-span-3">
              <h3 className="font-semibold text-slate-800 dark:text-white mb-4 flex items-center justify-between">
                <span>Top Referring Domains</span>
                <span className="text-xs font-normal text-slate-500 dark:text-slate-400">Sorted by Authority</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.topReferrers.map((referrer, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-lg transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                    <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-300 font-bold shrink-0">
                      {referrer.authority}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200 truncate" title={referrer.domain}>
                          {referrer.domain}
                        </h4>
                        <div className="flex items-center text-xs text-slate-400 gap-1">
                           <ExternalLink size={10} />
                           {referrer.dofollowCount + referrer.nofollowCount} links
                        </div>
                      </div>
                      {/* Stacked Bar for DoFollow/NoFollow Ratio */}
                      <div className="flex h-1.5 w-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                        <div 
                          className="bg-emerald-500 h-full" 
                          style={{ width: `${(referrer.dofollowCount / (referrer.dofollowCount + referrer.nofollowCount)) * 100}%` }}
                          title={`DoFollow: ${referrer.dofollowCount}`}
                        ></div>
                        <div 
                          className="bg-slate-300 dark:bg-slate-600 h-full" 
                          style={{ width: `${(referrer.nofollowCount / (referrer.dofollowCount + referrer.nofollowCount)) * 100}%` }}
                          title={`NoFollow: ${referrer.nofollowCount}`}
                        ></div>
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">DoFollow</span>
                        <span className="text-slate-500 dark:text-slate-500">NoFollow</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Solution Strategy Section */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
             <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp className="text-brand-600 dark:text-brand-400" size={20} />
                Improvement Strategy (Solutions)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300">How to increase Domain Authority</h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-4">
                          <li>Create high-quality, linkable content (infographics, original research).</li>
                          <li>Audit your link profile and disavow toxic backlinks to lower Spam Score.</li>
                          <li>Improve internal linking structure to distribute page authority.</li>
                      </ul>
                  </div>
                  <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300">How to get more Backlinks</h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-4">
                          <li>Use the "Skyscraper Technique": find popular content, improve it, and reach out to linkers.</li>
                          <li>Guest post on reputable industry blogs (avoid low-quality networks).</li>
                          <li>Reclaim broken links by finding 404s on competitor sites and offering your content as replacement.</li>
                      </ul>
                  </div>
              </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/50 p-4 rounded-lg flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-amber-800 dark:text-amber-200">
            <div className="flex gap-3">
               <AlertTriangle className="shrink-0 mt-0.5" size={16} />
               <p>
                 <strong>Note:</strong> This is a free demonstration tool. Metrics shown are simulated estimations based on domain heuristics.
                 <br />
                 For precise historical backlink data, please upgrade to our Pro API plan or connect a premium data source.
               </p>
            </div>
            <button 
                onClick={handleConnectPremium}
                className="whitespace-nowrap px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors shadow-sm"
            >
                Upgrade to Pro
            </button>
          </div>
        </div>
      )}

      {/* AdSense Publisher Content Wrapper */}
      <div className="mt-12 bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700 prose prose-slate dark:prose-invert max-w-none">
         <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
             <BarChart2 className="text-brand-600" />
             Understanding Backlink Metrics
         </h2>
         
         <div className="grid md:grid-cols-2 gap-8 mt-6">
             <div>
                 <h3 className="font-bold text-lg text-slate-800 dark:text-white">What is Domain Authority (DA)?</h3>
                 <p className="text-slate-600 dark:text-slate-300">
                     Domain Authority is a search engine ranking score developed by Moz that predicts how likely a website is to rank on search engine result pages (SERPs). It ranges from 1 to 100, with higher scores corresponding to a greater ability to rank.
                 </p>
             </div>
             <div>
                 <h3 className="font-bold text-lg text-slate-800 dark:text-white">DoFollow vs NoFollow</h3>
                 <p className="text-slate-600 dark:text-slate-300">
                     <strong>DoFollow</strong> links pass "link juice" and authority to your site, directly helping SEO. <strong>NoFollow</strong> links (often from social media or comments) do not pass authority but still drive traffic and brand awareness. A natural profile needs both.
                 </p>
             </div>
         </div>

         <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-100 dark:border-red-900/50 mt-8">
             <h3 className="text-lg font-bold text-red-700 dark:text-red-400 flex items-center gap-2">
                 <AlertOctagon size={20} />
                 Warning: High Spam Score
             </h3>
             <p className="text-slate-700 dark:text-slate-300 mt-2">
                 If your Spam Score is above 5%, you may be at risk of a Google Penalty. Common causes include:
             </p>
             <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-700 dark:text-slate-300">
                 <li>Links from low-quality directories or link farms.</li>
                 <li>A low ratio of branded anchor text (e.g., overly optimized anchors like "cheap shoes").</li>
                 <li>Thin content on the linking pages.</li>
             </ul>
         </div>
      </div>
    </div>
  );
};

export default BacklinkChecker;