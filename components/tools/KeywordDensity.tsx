import React, { useState, useCallback } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { calculateKeywordDensity } from '../../services/seoService';
import { getSEOSuggestions } from '../../services/geminiService';
import { KeywordData } from '../../types';
import { Download, Copy, Sparkles, AlertCircle } from 'lucide-react';

const KeywordDensity: React.FC = () => {
  const [text, setText] = useState('');
  const [results, setResults] = useState<{ keywords: KeywordData[], totalWords: number } | null>(null);
  const [aiTip, setAiTip] = useState<string>('');
  const [loadingAi, setLoadingAi] = useState(false);

  const handleAnalyze = useCallback(() => {
    if (!text.trim()) return;
    const data = calculateKeywordDensity(text);
    setResults(data);
    setAiTip(''); // Reset AI tip on new analysis
  }, [text]);

  const handleAiAnalyze = async () => {
    if (!text.trim()) return;
    setLoadingAi(true);
    const tip = await getSEOSuggestions(text, 'keyword');
    setAiTip(tip);
    setLoadingAi(false);
  };

  const copyToClipboard = () => {
    if (!results) return;
    const textData = results.keywords.map(k => `${k.word}: ${k.count} (${k.density}%)`).join('\n');
    navigator.clipboard.writeText(textData);
    alert('Results copied to clipboard!');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-slate-800">Keyword Density Checker</h2>
          <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">Free Tool</span>
        </div>
        
        <textarea
          className="w-full h-48 p-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none resize-none text-slate-700 placeholder-slate-400 transition-shadow"
          placeholder="Paste your content here to analyze keyword density..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={handleAnalyze}
            className="px-6 py-2 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors shadow-sm shadow-brand-200"
          >
            Analyze Text
          </button>
          <button
            onClick={() => setText('')}
            className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium rounded-lg transition-colors"
          >
            Clear
          </button>
          
          {results && (
             <button
             onClick={handleAiAnalyze}
             disabled={loadingAi}
             className="ml-auto px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-medium rounded-lg transition-colors flex items-center gap-2"
           >
             <Sparkles size={16} />
             {loadingAi ? 'Asking AI...' : 'Get AI Optimization Tips'}
           </button>
          )}
        </div>
      </div>

      {aiTip && (
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-start gap-3">
            <Sparkles className="text-indigo-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-semibold text-indigo-900 mb-2">AI Optimization Suggestions</h3>
              <p className="text-indigo-800 leading-relaxed text-sm whitespace-pre-wrap">{aiTip}</p>
            </div>
          </div>
        </div>
      )}

      {results && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-slate-800">Top Keyword Distribution</h3>
              <div className="text-sm text-slate-500">Total Words: <span className="font-bold text-slate-900">{results.totalWords}</span></div>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={results.keywords.slice(0, 10)}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="word" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{ fill: '#f1f5f9' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="count" fill="#0d9488" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Detailed List */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col h-[24rem]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-slate-800">Keyword Stats</h3>
              <div className="flex gap-2">
                <button onClick={copyToClipboard} className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition-colors" title="Copy to Clipboard">
                  <Copy size={16} />
                </button>
                <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition-colors" title="Export CSV">
                  <Download size={16} />
                </button>
              </div>
            </div>
            <div className="overflow-y-auto flex-1 pr-2 space-y-3">
              <div className="grid grid-cols-4 text-xs font-semibold text-slate-400 pb-2 border-b border-slate-100">
                <span className="col-span-2">Keyword</span>
                <span className="text-right">Count</span>
                <span className="text-right">Density</span>
              </div>
              {results.keywords.map((k, idx) => (
                <div key={idx} className="grid grid-cols-4 text-sm items-center hover:bg-slate-50 p-1 rounded">
                  <span className="col-span-2 text-slate-700 font-medium truncate" title={k.word}>{k.word}</span>
                  <span className="text-right text-slate-600">{k.count}</span>
                  <span className={`text-right font-medium ${k.density > 2.5 ? 'text-amber-500' : 'text-emerald-600'}`}>
                    {k.density}%
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <AlertCircle size={12} />
              <span>Aim for 1-2% density for main keywords.</span>
            </div>
          </div>
        </div>
      )}

      {/* Content Section for SEO */}
      <div className="prose prose-slate max-w-none mt-12 bg-slate-50 p-8 rounded-xl">
        <h3>Why Check Keyword Density?</h3>
        <p>
          Keyword density is the percentage of times a keyword or phrase appears on a web page compared to the total number of words on the page. In the context of SEO, keyword density can be used as a factor to determine whether a web page is relevant to a specified keyword or keyword phrase.
        </p>
        <h4>Best Practices:</h4>
        <ul>
          <li>Avoid "Keyword Stuffing" - it can lead to search penalties.</li>
          <li>Focus on natural language and readability first.</li>
          <li>Use Latent Semantic Indexing (LSI) keywords (synonyms and related terms).</li>
          <li>Keep your primary keyword density between 1% and 2%.</li>
        </ul>
      </div>
    </div>
  );
};

export default KeywordDensity;
