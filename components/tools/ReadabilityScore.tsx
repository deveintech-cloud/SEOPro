import React, { useState } from 'react';
import { calculateReadabilityMetrics } from '../../services/seoService';
import { ReadabilityResult } from '../../types';
import { BookOpen, AlertCircle, CheckCircle, BarChart2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ReadabilityScore: React.FC = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState<ReadabilityResult | null>(null);

  const handleAnalyze = () => {
    if (!text.trim()) return;
    const metrics = calculateReadabilityMetrics(text);
    setResult(metrics);
  };

  // Gauge Data
  const gaugeData = result ? [
    { name: 'Score', value: result.score },
    { name: 'Remaining', value: 100 - result.score }
  ] : [];

  const getColor = (score: number) => {
    if (score >= 80) return '#10b981'; // Emerald
    if (score >= 60) return '#3b82f6'; // Blue
    if (score >= 40) return '#f59e0b'; // Amber
    return '#ef4444'; // Red
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">Readability Analyzer</h2>
          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full">Free Tool</span>
        </div>
        
        <textarea
          className="w-full h-48 p-4 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none resize-none text-slate-700 dark:text-slate-200 placeholder-slate-400 bg-transparent transition-shadow"
          placeholder="Paste your content here to check reading ease (Flesch-Kincaid)..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        
        <div className="mt-4 flex gap-3">
          <button
            onClick={handleAnalyze}
            className="px-6 py-2 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors shadow-sm"
          >
            Calculate Score
          </button>
          <button
            onClick={() => { setText(''); setResult(null); }}
            className="px-6 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 font-medium rounded-lg transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      {result && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8">
          
          {/* Main Score Gauge */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center">
            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Reading Ease Score</h3>
            <div className="h-48 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={gaugeData}
                    cx="50%"
                    cy="50%"
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                    stroke="none"
                  >
                    <Cell fill={getColor(result.score)} />
                    <Cell fill="#f1f5f9" className="dark:fill-slate-700" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
                <span className="text-4xl font-bold text-slate-800 dark:text-white">{result.score}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">out of 100</span>
              </div>
            </div>
            <div className="text-center mt-[-20px]">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: `${getColor(result.score)}20`, color: getColor(result.score) }}>
                {result.label}
              </span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Grade Level</div>
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{result.gradeLevel}</div>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Words</div>
                  <div className="text-2xl font-bold text-slate-700 dark:text-slate-200">{result.wordCount}</div>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Avg. Sent. Len</div>
                  <div className={`text-2xl font-bold ${result.avgSentenceLength > 20 ? 'text-amber-500' : 'text-emerald-500'}`}>
                    {result.avgSentenceLength}
                  </div>
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Complex Words</div>
                  <div className="text-2xl font-bold text-slate-700 dark:text-slate-200">{result.complexWords}</div>
               </div>
            </div>

            {/* Recommendations / Solutions */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="text-brand-600 dark:text-brand-400" size={20} />
                Improvement Suggestions
              </h3>
              <div className="space-y-3">
                {result.recommendations.map((rec, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-700/30 rounded-lg">
                    {rec.includes('Great job') ? (
                       <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    ) : (
                       <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    )}
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{rec}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadabilityScore;