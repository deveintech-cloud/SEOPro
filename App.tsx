import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import KeywordDensity from './components/tools/KeywordDensity';
import MetaGenerator from './components/tools/MetaGenerator';
import BacklinkChecker from './components/tools/BacklinkChecker';
import SeoAudit from './components/tools/SeoAudit';
import ReadabilityScore from './components/tools/ReadabilityScore';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';
import Contact from './components/pages/Contact';
import AboutUs from './components/pages/AboutUs';
import UpgradePro from './components/pages/UpgradePro';
import BlogPost from './components/pages/BlogPost';
import AdPlaceholder from './components/AdPlaceholder';
import { ToolId, BlogPost as BlogPostType } from './types';
import { Menu, X, Github, Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [currentTool, setCurrentTool] = useState<ToolId>(ToolId.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle Hash Routing for SEO and Deep Linking
  useEffect(() => {
    const handleHashChange = () => {
      // Get hash and remove the #/ prefix
      const hash = window.location.hash.replace('#/', '');
      
      // Check if hash matches a known tool ID
      const foundTool = Object.values(ToolId).find(id => id === hash);
      
      if (foundTool) {
        setCurrentTool(foundTool);
      } else if (hash === '' || hash === '/') {
        setCurrentTool(ToolId.DASHBOARD);
      }
    };

    // Check initial hash on load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL hash when navigating
  const handleNavigate = (tool: ToolId) => {
    setCurrentTool(tool);
    // Push to history/hash so URL updates (and back button works)
    window.location.hash = `/${tool}`;
    // Mobile: Close sidebar on navigate
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const handleViewPost = (post: BlogPostType) => {
    setSelectedPost(post);
    // We don't have deep links for specific blog posts in this simple router yet,
    // so we just set state. In a full app, we'd use /#/blog/slug
    setCurrentTool(ToolId.BLOG_POST);
    window.scrollTo(0, 0);
  };

  const renderTool = () => {
    switch (currentTool) {
      case ToolId.KEYWORD_DENSITY:
        return <KeywordDensity />;
      case ToolId.META_TAGS:
        return <MetaGenerator />;
      case ToolId.BACKLINK:
        return <BacklinkChecker />;
      case ToolId.SEO_AUDIT:
        return <SeoAudit />;
      case ToolId.READABILITY:
        return <ReadabilityScore />;
      case ToolId.PRIVACY:
        return <PrivacyPolicy />;
      case ToolId.TERMS:
        return <TermsOfService />;
      case ToolId.CONTACT:
        return <Contact onNavigate={handleNavigate} />;
      case ToolId.ABOUT:
        return <AboutUs onNavigate={handleNavigate} />;
      case ToolId.UPGRADE:
        return <UpgradePro onNavigate={handleNavigate} />;
      case ToolId.BLOG_POST:
        if (selectedPost) {
          return <BlogPost post={selectedPost} onBack={() => handleNavigate(ToolId.DASHBOARD)} />;
        }
        return <Dashboard onNavigate={handleNavigate} onViewPost={handleViewPost} />;
      case ToolId.DASHBOARD:
      default:
        // Placeholder for other tools to show they are "Coming Soon" if navigated to via other means
        if (Object.values(ToolId).includes(currentTool) && ![
            ToolId.DASHBOARD, 
            ToolId.KEYWORD_DENSITY, 
            ToolId.META_TAGS, 
            ToolId.BACKLINK, 
            ToolId.SEO_AUDIT, 
            ToolId.READABILITY,
            ToolId.PRIVACY,
            ToolId.TERMS,
            ToolId.CONTACT,
            ToolId.ABOUT,
            ToolId.UPGRADE,
            ToolId.BLOG_POST
        ].includes(currentTool)) {
            return (
                <div className="text-center py-20">
                    <div className="inline-block p-4 bg-slate-100 dark:bg-slate-800 rounded-full mb-4">
                        <span className="text-4xl">🚧</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Coming Soon</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">This tool is currently under development.</p>
                    <button 
                        onClick={() => handleNavigate(ToolId.DASHBOARD)}
                        className="mt-6 text-brand-600 dark:text-brand-400 font-medium hover:underline"
                    >
                        Return to Dashboard
                    </button>
                </div>
            );
        }
        return <Dashboard onNavigate={handleNavigate} onViewPost={handleViewPost} />;
    }
  };

  const getPageTitle = () => {
    switch (currentTool) {
      case ToolId.KEYWORD_DENSITY: return 'Keyword Density Analysis';
      case ToolId.META_TAGS: return 'Meta Tag Generator';
      case ToolId.BACKLINK: return 'Backlink Checker';
      case ToolId.SEO_AUDIT: return 'SEO Site Audit';
      case ToolId.READABILITY: return 'Readability Analyzer';
      case ToolId.PRIVACY: return 'Privacy Policy';
      case ToolId.TERMS: return 'Terms of Service';
      case ToolId.CONTACT: return 'Contact Support';
      case ToolId.ABOUT: return 'About Us';
      case ToolId.UPGRADE: return 'Upgrade Plan';
      case ToolId.BLOG_POST: return 'Expert Insights';
      default: return 'Dashboard';
    }
  };

  return (
    <HashRouter>
      <div 
        className="flex min-h-screen transition-colors duration-300"
        style={{
          // Professional Abstract Gradient Background
          backgroundImage: `url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Sidebar 
          currentTool={currentTool} 
          onNavigate={handleNavigate} 
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        
        {/* Main Content Area with Blur Overlay */}
        <div className="flex-1 flex flex-col min-w-0 bg-white/90 dark:bg-slate-900/95 backdrop-blur-sm transition-colors duration-300">
          {/* Header */}
          <header className="sticky top-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm px-4 md:px-8 h-16 flex items-center justify-between transition-colors">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              >
                {isSidebarOpen ? <X /> : <Menu />}
              </button>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white truncate">
                {getPageTitle()}
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
               {/* Header Ad Placeholder - hidden on small mobile */}
               <div className="hidden lg:block">
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase mr-2">Advertisement</span>
               </div>
               
               <button
                 onClick={() => setIsDarkMode(!isDarkMode)}
                 className="p-2 text-slate-400 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                 aria-label="Toggle Dark Mode"
               >
                 {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
               </button>

               <a 
                 href="https://github.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2 text-slate-400 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                 aria-label="View Source on GitHub"
               >
                 <Github size={20} />
               </a>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full">
            {/* Top Banner Ad Slot - Hide on upgrade page to remove distraction */}
            {currentTool !== ToolId.DASHBOARD && currentTool !== ToolId.UPGRADE && currentTool !== ToolId.BLOG_POST && (
                <div className="flex justify-center mb-8">
                     <AdPlaceholder width={728} height={90} className="hidden md:flex" slotName="Leaderboard" />
                     <AdPlaceholder width={320} height={50} className="md:hidden flex" slotName="Mobile Banner" />
                </div>
            )}

            {renderTool()}
          </main>
          
          {/* Footer */}
          <footer className="bg-white/60 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 py-8 px-8 mt-auto backdrop-blur-sm transition-colors">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
              <p>&copy; 2024 SEOPro Suite. All rights reserved.</p>
              <div className="flex flex-wrap gap-6 mt-4 md:mt-0 justify-center">
                <button onClick={() => handleNavigate(ToolId.ABOUT)} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">About Us</button>
                <button onClick={() => handleNavigate(ToolId.PRIVACY)} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Privacy Policy</button>
                <button onClick={() => handleNavigate(ToolId.TERMS)} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Terms of Service</button>
                <button onClick={() => handleNavigate(ToolId.CONTACT)} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Contact</button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;