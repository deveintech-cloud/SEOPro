import React, { useState } from 'react';
import { analyzeSeoHtml } from '../../services/seoService';
import { SeoAuditResult } from '../../types';
import { Activity, CheckCircle, XCircle, AlertTriangle, Code, ArrowRight, Lightbulb } from 'lucide-react';

const SeoAudit: React.FC = () => {
  const [mode, setMode] = useState<'url' | 'source'>('url');
  const [input, setInput] = useState('');
  const [result, setResult] = useState<SeoAuditResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    
    // In a real app with backend, we'd fetch the URL here.
    // Client-side, we can only really analyze pasted source properly due to CORS.
    // We will simulate a fetch for URL mode for demo purposes, or analyze the text if it looks like HTML.
    
    setTimeout(() => {
      let analysisInput = input;
      
      if (mode === 'url') {
         // Mock HTML content for the simulation if they entered a URL
         // This ensures the demo always "works"
         analysisInput = `
            <html>
                <head>
                    <title>${input.replace(/(^\w+:|^)\/\//, '')} - Official Site</title>
                    <meta name="description" content="Welcome to the official website. We provide excellent services for our customers worldwide.">
                </head>
                <body>
                    <h1>Welcome to ${input}</h1>
                    <img src="logo.png" alt="Company Logo">
                    <img src="hero.jpg"> <!-- Missing Alt -->
                    <p>Some content here.</p>
                </body>
            </html>
         `;
      }

      const auditData = analyzeSeoHtml(analysisInput);
      setResult(auditData);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">On-Page SEO Audit</h2>
          
          <div className="flex bg-slate-100 dark:bg-slate-700 p-1 rounded-lg">
            <button
              onClick={() => { setMode('url'); setInput(''); setResult(null); }}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${mode === 'url' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
            >
              URL Audit
            </button>
            <button
              onClick={() => { setMode('source'); setInput(''); setResult(null); }}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${mode === 'source' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
            >
              Paste HTML
            </button>
          </div>
        </div>

        <form onSubmit={handleAudit} className="space-y-4">
          {mode === 'url' ? (
            <div>
                <input
                    type="url"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="https://example.com"
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none bg-transparent dark:text-white dark:placeholder-slate-500"
                    required
                />
                <p className="text-xs text-slate-400 mt-2 ml-1">
                    * Simulates a crawler visit. For actual code analysis, use "Paste HTML".
                </p>
            </div>
          ) : (
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste your raw HTML source code here (<!DOCTYPE html>...)"
                className="w-full h-48 px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none font-mono text-xs bg-transparent dark:text-white dark:placeholder-slate-500"
                required
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg transition-colors flex justify-center items-center gap-2"
          >
            {loading ? <Activity className="animate-spin" /> : <Activity />}
            {loading ? 'Auditing...' : 'Run Audit'}
          </button>
        </form>
      </div>

      {result && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4">
          {/* Score Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-center">
              <h3 className="text-slate-500 dark:text-slate-400 font-medium mb-4">Overall Health</h3>
              <div className="relative inline-flex items-center justify-center">
                 <svg className="w-32 h-32 transform -rotate-90">
                   <circle cx="64" cy="64" r="60" stroke="#f1f5f9" className="dark:stroke-slate-700" strokeWidth="8" fill="none" />
                   <circle 
                     cx="64" cy="64" r="60" 
                     stroke={result.score > 80 ? '#10b981' : result.score > 50 ? '#f59e0b' : '#ef4444'} 
                     strokeWidth="8" 
                     fill="none" 
                     strokeDasharray={377} 
                     strokeDashoffset={377 - (377 * result.score) / 100}
                     className="transition-all duration-1000 ease-out"
                   />
                 </svg>
                 <span className="absolute text-3xl font-bold text-slate-800 dark:text-white">{result.score}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                <div>
                   <div className="text-sm text-slate-500 dark:text-slate-400">Errors</div>
                   <div className="text-xl font-bold text-red-500">{result.issues.filter(i => i.type === 'error').length}</div>
                </div>
                <div>
                   <div className="text-sm text-slate-500 dark:text-slate-400">Warnings</div>
                   <div className="text-xl font-bold text-amber-500">{result.issues.filter(i => i.type === 'warning').length}</div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <h3 className="font-semibold text-slate-800 dark:text-white mb-4">Core Vitals (Est.)</h3>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="dark:text-slate-300">Load Time</span>
                            <span className={result.loadTime < 1.5 ? 'text-green-600 dark:text-green-400' : 'text-red-500'}>{result.loadTime}s</span>
                        </div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className={`h-full ${result.loadTime < 1.5 ? 'bg-green-500' : 'bg-red-500'}`} style={{width: `${Math.min(100, (result.loadTime/3)*100)}%`}}></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Details List */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-lg text-slate-800 dark:text-white">Audit Report</h3>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-700">
                {result.issues.map((issue, idx) => (
                    <div key={idx} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
                        <div className="flex gap-4">
                            <div className="shrink-0 mt-1">
                                {issue.type === 'success' && <CheckCircle className="text-emerald-500" size={20} />}
                                {issue.type === 'warning' && <AlertTriangle className="text-amber-500" size={20} />}
                                {issue.type === 'error' && <XCircle className="text-red-500" size={20} />}
                            </div>
                            <div className="flex-1">
                                <h4 className={`font-semibold text-sm ${
                                    issue.type === 'success' ? 'text-emerald-700 dark:text-emerald-400' : 
                                    issue.type === 'warning' ? 'text-amber-700 dark:text-amber-400' : 'text-red-700 dark:text-red-400'
                                }`}>
                                    {issue.label}
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{issue.details}</p>
                                
                                {/* Solution / Recommendation Section */}
                                {issue.recommendation && (
                                    <div className="mt-3 flex items-start gap-2 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md border border-blue-100 dark:border-blue-900/50">
                                        <Lightbulb className="text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" size={16} />
                                        <div>
                                            <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wide">Solution: </span>
                                            <span className="text-sm text-blue-800 dark:text-blue-200">{issue.recommendation}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
             <div className="p-4 bg-slate-50 dark:bg-slate-800/50 text-center">
                <button className="text-brand-600 dark:text-brand-400 text-sm font-medium hover:underline flex items-center justify-center gap-1 mx-auto">
                    Download PDF Report <ArrowRight size={14} />
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeoAudit;