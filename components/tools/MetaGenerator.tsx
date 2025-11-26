import React, { useState, useEffect } from 'react';
import { MetaTagState } from '../../types';
import { Copy, Eye, RefreshCw, Sparkles } from 'lucide-react';
import { getSEOSuggestions } from '../../services/geminiService';

const MetaGenerator: React.FC = () => {
  const [state, setState] = useState<MetaTagState>({
    title: '',
    description: '',
    keywords: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: ''
  });
  
  const [loadingAi, setLoadingAi] = useState(false);

  // Auto-sync Open Graph tags if empty
  useEffect(() => {
    setState(prev => ({
      ...prev,
      ogTitle: prev.ogTitle || prev.title,
      ogDescription: prev.ogDescription || prev.description
    }));
  }, [state.title, state.description]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAiGenerate = async () => {
    if (!state.title && !state.description) return alert("Please enter at least a topic or partial title first.");
    setLoadingAi(true);
    const suggestion = await getSEOSuggestions(`Title: ${state.title}\nDesc: ${state.description}`, 'meta');
    // In a real app, we'd parse the JSON response from AI to populate fields. 
    // Here we'll just show the text result in an alert or separate area for demo simplicity
    alert("AI Suggestion:\n" + suggestion); 
    setLoadingAi(false);
  };

  const generateCode = () => {
    return `<!-- SEO Meta Tags -->
<title>${state.title}</title>
<meta name="description" content="${state.description}">
<meta name="keywords" content="${state.keywords}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:title" content="${state.ogTitle}">
<meta property="og:description" content="${state.ogDescription}">
<meta property="og:image" content="${state.ogImage}">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:title" content="${state.ogTitle}">
<meta property="twitter:description" content="${state.ogDescription}">
<meta property="twitter:image" content="${state.ogImage}">`;
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generateCode());
    alert("Code copied to clipboard!");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <div className="space-y-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Configuration</h2>
            <button 
              onClick={handleAiGenerate}
              disabled={loadingAi}
              className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-1"
            >
              <Sparkles size={14} />
              {loadingAi ? 'Generating...' : 'Auto-Fill with AI'}
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Page Title</label>
                <span className={`text-xs ${state.title.length > 60 ? 'text-red-500' : 'text-slate-400'}`}>
                  {state.title.length}/60
                </span>
              </div>
              <input
                type="text"
                name="title"
                value={state.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-transparent dark:text-white"
                placeholder="e.g., Best SEO Tools 2024 - Free Suite"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Meta Description</label>
                <span className={`text-xs ${state.description.length > 160 ? 'text-red-500' : 'text-slate-400'}`}>
                  {state.description.length}/160
                </span>
              </div>
              <textarea
                name="description"
                value={state.description}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none bg-transparent dark:text-white"
                placeholder="Summarize your page content..."
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1">Keywords (Comma separated)</label>
              <input
                type="text"
                name="keywords"
                value={state.keywords}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-transparent dark:text-white"
                placeholder="seo, marketing, tools"
              />
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Social Media (Open Graph)</h3>
              
              <div className="space-y-3">
                <input
                  type="text"
                  name="ogImage"
                  value={state.ogImage}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-transparent dark:text-white"
                  placeholder="Image URL (e.g. https://example.com/image.jpg)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className="space-y-6">
        {/* Google Preview */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Eye size={16} /> Google Search Preview
          </h3>
          
          <div className="bg-white p-4 max-w-xl rounded">
            <div className="flex items-center gap-2 text-sm text-slate-800 mb-1 group cursor-pointer">
              <div className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center text-xs">Fav</div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-900 font-medium">example.com</span>
                <span className="text-[10px] text-slate-500">https://www.example.com › tools</span>
              </div>
            </div>
            <h3 className="text-xl text-[#1a0dab] hover:underline cursor-pointer truncate font-normal">
              {state.title || "Your Page Title Goes Here"}
            </h3>
            <p className="text-sm text-slate-600 mt-1 line-clamp-2">
              {state.description || "Your meta description will appear here. It should be descriptive, engaging, and contain your main keywords to improve click-through rates."}
            </p>
          </div>
        </div>

        {/* Facebook/Social Preview */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
           <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Eye size={16} /> Social Share Preview
          </h3>
          
          <div className="border border-slate-200 rounded-lg overflow-hidden max-w-md mx-auto bg-[#f0f2f5]">
            <div className="h-48 bg-slate-300 w-full flex items-center justify-center overflow-hidden relative">
              {state.ogImage ? (
                <img src={state.ogImage} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <span className="text-slate-500 font-medium">1200 x 630 Image</span>
              )}
            </div>
            <div className="p-3 bg-[#f0f2f5] border-t border-slate-200">
              <p className="text-xs text-slate-500 uppercase">EXAMPLE.COM</p>
              <h4 className="font-bold text-slate-900 text-sm mt-1 truncate">{state.ogTitle || state.title || "Title"}</h4>
              <p className="text-xs text-slate-600 mt-1 line-clamp-1">{state.ogDescription || state.description || "Description..."}</p>
            </div>
          </div>
        </div>

        {/* Code Output */}
        <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg">
          <div className="flex justify-between items-center px-4 py-3 bg-slate-800 border-b border-slate-700">
            <span className="text-xs font-mono text-slate-300">generated_tags.html</span>
            <button 
              onClick={copyCode}
              className="text-xs flex items-center gap-1 text-brand-400 hover:text-brand-300 font-medium transition-colors"
            >
              <Copy size={12} /> Copy Code
            </button>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto whitespace-pre-wrap">
            {generateCode()}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default MetaGenerator;