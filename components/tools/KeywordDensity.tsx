import React, { useState, useCallback } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { calculateKeywordDensity } from '../../services/seoService';
import { getSEOSuggestions } from '../../services/geminiService';
import { KeywordData } from '../../types';
import { Download, Copy, Sparkles, AlertCircle, BookOpen, Target, Layers } from 'lucide-react';
import AdPlaceholder from '../AdPlaceholder';

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
    <div className="space-y-8">
      {/* Intro Section for AdSense Content Policy */}
      <div className="space-y-2 mb-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Free Keyword Density Checker</h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-3xl">
          Analyze your text for optimal keyword frequency. Identify keyword stuffing risks and uncover opportunities to improve semantic relevance for better search rankings.
        </p>
      </div>

      {/* The Tool Interface */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">Input Content</h2>
          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full">Unlimited Use</span>
        </div>
        
        <textarea
          className="w-full h-48 p-4 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none resize-none text-slate-700 dark:text-slate-200 placeholder-slate-400 bg-transparent transition-shadow font-mono text-sm"
          placeholder="Paste your article, blog post, or website copy here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={handleAnalyze}
            className="px-6 py-2 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors shadow-sm shadow-brand-200 dark:shadow-none"
          >
            Analyze Text
          </button>
          <button
            onClick={() => setText('')}
            className="px-6 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 font-medium rounded-lg transition-colors"
          >
            Clear
          </button>
          
          {results && (
             <button
             onClick={handleAiAnalyze}
             disabled={loadingAi}
             className="ml-auto px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 font-medium rounded-lg transition-colors flex items-center gap-2"
           >
             <Sparkles size={16} />
             {loadingAi ? 'Asking AI...' : 'Get AI Optimization Tips'}
           </button>
          )}
        </div>
      </div>

      {/* Results Section */}
      {aiTip && (
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-800 p-6 rounded-xl border border-indigo-100 dark:border-indigo-900 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-start gap-3">
            <Sparkles className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-2">AI Optimization Suggestions</h3>
              <p className="text-indigo-800 dark:text-indigo-200 leading-relaxed text-sm whitespace-pre-wrap">{aiTip}</p>
            </div>
          </div>
        </div>
      )}

      {results && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8">
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-slate-800 dark:text-white">Top Keyword Distribution</h3>
              <div className="text-sm text-slate-500 dark:text-slate-400">Total Words: <span className="font-bold text-slate-900 dark:text-white">{results.totalWords}</span></div>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={results.keywords.slice(0, 10)}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" className="dark:opacity-20" />
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

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col h-[24rem]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-slate-800 dark:text-white">Keyword Stats</h3>
              <div className="flex gap-2">
                <button onClick={copyToClipboard} className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors" title="Copy to Clipboard">
                  <Copy size={16} />
                </button>
                <button className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors" title="Export CSV">
                  <Download size={16} />
                </button>
              </div>
            </div>
            <div className="overflow-y-auto flex-1 pr-2 space-y-3">
              <div className="grid grid-cols-4 text-xs font-semibold text-slate-400 pb-2 border-b border-slate-100 dark:border-slate-700">
                <span className="col-span-2">Keyword</span>
                <span className="text-right">Count</span>
                <span className="text-right">Density</span>
              </div>
              {results.keywords.map((k, idx) => (
                <div key={idx} className="grid grid-cols-4 text-sm items-center hover:bg-slate-50 dark:hover:bg-slate-700/50 p-1 rounded">
                  <span className="col-span-2 text-slate-700 dark:text-slate-200 font-medium truncate" title={k.word}>{k.word}</span>
                  <span className="text-right text-slate-600 dark:text-slate-400">{k.count}</span>
                  <span className={`text-right font-medium ${k.density > 2.5 ? 'text-amber-500' : 'text-emerald-600 dark:text-emerald-400'}`}>
                    {k.density}%
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <AlertCircle size={12} />
              <span>Aim for 1-2% density for main keywords.</span>
            </div>
          </div>
        </div>
      )}

      {/* Mid-Page Ad Placeholder - Contextual Placement */}
      <div className="flex justify-center py-4">
         <AdPlaceholder width={728} height={90} className="hidden md:flex" slotName="Mid-Content Banner" />
      </div>

      {/* REQUIRED PUBLISHER CONTENT: Detailed Guide & Educational Material */}
      <div className="prose prose-slate dark:prose-invert max-w-none bg-white dark:bg-slate-800/50 p-8 rounded-xl border border-slate-100 dark:border-slate-700">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
          <BookOpen className="text-brand-600" size={24} /> 
          Complete Guide to Keyword Density
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">What is Keyword Density?</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Keyword density is a foundational concept in Search Engine Optimization (SEO). It refers to the percentage of times a specific keyword or phrase appears on a webpage compared to the total number of words on that page.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Formula: <code>(Keyword Count / Total Word Count) * 100</code>
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              While search engines like Google have evolved beyond simple keyword matching, density remains a crucial metric for ensuring your content stays <strong>topically relevant</strong> without crossing the line into spam.
            </p>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
            <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
              <Target size={20} className="text-red-500" /> 
              The Dangers of Keyword Stuffing
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              In the early 2000s, repeating a keyword 50 times helped you rank. Today, algorithms like Google Panda penalize this practice heavily.
            </p>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex gap-2">
                <span className="text-red-500 font-bold">✗</span> 
                <span>Reading experience becomes unnatural and robotic.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500 font-bold">✗</span> 
                <span>Search engines flag the page as "Low Quality".</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500 font-bold">✗</span> 
                <span>Increases bounce rate as users leave quickly.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <Layers size={22} className="text-brand-600" />
                Advanced Strategy: TF-IDF and LSI
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Modern SEO isn't about repeating the same word. It's about <strong>Semantic Relevance</strong>. This is where TF-IDF (Term Frequency-Inverse Document Frequency) and LSI (Latent Semantic Indexing) come into play.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Instead of using "Coffee Shop" 20 times, use related terms like "Barista," "Espresso," "Beans," and "Wifi." Google's BERT and RankBrain algorithms look for these context clusters to understand if your content is truly comprehensive. Our tool helps you visualize your dominant terms so you can diversify your vocabulary.
            </p>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">How to use this tool effectively:</h4>
            <ol className="list-decimal pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                <li>Paste your draft content into the text area above.</li>
                <li>Aim for a primary keyword density of <strong>1% to 2%</strong>.</li>
                <li>Check the "Top Keywords" list. Are filler words (like "very", "really") appearing too often? Remove them to tighten your copy.</li>
                <li>Use the <strong>AI Optimization</strong> button to get suggestions on related keywords you might have missed.</li>
            </ol>
        </div>
      </div>
    </div>
  );
};

export default KeywordDensity;