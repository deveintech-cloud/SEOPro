
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { generateMockBacklinkData } from '../../services/seoService';
import { BacklinkData } from '../../types';
import { Search, Globe, Shield, AlertTriangle, Link as LinkIcon, Download, Lock, TrendingUp } from 'lucide-react';

const BacklinkChecker: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<BacklinkData | null>(null);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setLoading(true);
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

  const COLORS = ['#0d9488', '#e2e8f0'];

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800">Backlink Analyzer</h2>
          <div className="flex gap-2">
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full flex items-center">Free Tool</span>
             <button 
                onClick={handleConnectPremium}
                className="text-xs font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1 rounded-full flex items-center gap-1 transition-colors"
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
            className="w-full pl-12 pr-32 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none text-lg transition-shadow"
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
          {/* Top Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Domain Authority</div>
              <div className={`text-3xl font-black ${data.domainAuthority > 50 ? 'text-emerald-500' : 'text-amber-500'}`}>
                {data.domainAuthority}
              </div>
              <div className="text-[10px] text-slate-400 mt-1">out of 100</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
               <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Page Authority</div>
              <div className="text-3xl font-black text-indigo-500">{data.pageAuthority}</div>
              <div className="text-[10px] text-slate-400 mt-1">out of 100</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
               <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Total Backlinks</div>
              <div className="text-3xl font-black text-slate-700">{data.totalBacklinks.toLocaleString()}</div>
              <div className="text-[10px] text-slate-400 mt-1">Indexed Links</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
               <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Spam Score</div>
              <div className={`text-3xl font-black ${data.spamScore < 5 ? 'text-emerald-500' : 'text-red-500'}`}>
                {data.spamScore}%
              </div>
              <div className="text-[10px] text-slate-400 mt-1">Risk Level</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* DoFollow Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 md:col-span-1">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
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
                    >
                      {COLORS.map((color, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Anchor Text */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 md:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-slate-800">Top Anchor Text</h3>
                <button className="text-slate-400 hover:text-brand-600">
                  <Download size={16} />
                </button>
              </div>
              <div className="space-y-4">
                {data.topAnchors.map((anchor, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-slate-700">{anchor.text}</span>
                      <span className="text-slate-500">{anchor.percent}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div 
                        className="bg-brand-500 h-2 rounded-full" 
                        style={{ width: `${anchor.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Solution Strategy Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
             <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <TrendingUp className="text-brand-600" size={20} />
                Improvement Strategy (Solutions)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-slate-700">How to increase Domain Authority</h4>
                      <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4">
                          <li>Create high-quality, linkable content (infographics, original research).</li>
                          <li>Audit your link profile and disavow toxic backlinks to lower Spam Score.</li>
                          <li>Improve internal linking structure to distribute page authority.</li>
                      </ul>
                  </div>
                  <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-slate-700">How to get more Backlinks</h4>
                      <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4">
                          <li>Use the "Skyscraper Technique": find popular content, improve it, and reach out to linkers.</li>
                          <li>Guest post on reputable industry blogs (avoid low-quality networks).</li>
                          <li>Reclaim broken links by finding 404s on competitor sites and offering your content as replacement.</li>
                      </ul>
                  </div>
              </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 p-4 rounded-lg flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-amber-800">
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
    </div>
  );
};

export default BacklinkChecker;
