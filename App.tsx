import React, { useState } from 'react';
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
import UpgradePro from './components/pages/UpgradePro';
import AdPlaceholder from './components/AdPlaceholder';
import { ToolId } from './types';
import { Menu, X, Github } from 'lucide-react';

const App: React.FC = () => {
  const [currentTool, setCurrentTool] = useState<ToolId>(ToolId.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        return <Contact onNavigate={setCurrentTool} />;
      case ToolId.UPGRADE:
        return <UpgradePro onNavigate={setCurrentTool} />;
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
            ToolId.UPGRADE
        ].includes(currentTool)) {
            return (
                <div className="text-center py-20">
                    <div className="inline-block p-4 bg-slate-100 rounded-full mb-4">
                        <span className="text-4xl">🚧</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Coming Soon</h2>
                    <p className="text-slate-500 mt-2">This tool is currently under development.</p>
                    <button 
                        onClick={() => setCurrentTool(ToolId.DASHBOARD)}
                        className="mt-6 text-brand-600 font-medium hover:underline"
                    >
                        Return to Dashboard
                    </button>
                </div>
            );
        }
        return <Dashboard onNavigate={setCurrentTool} />;
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
      case ToolId.UPGRADE: return 'Upgrade Plan';
      default: return 'Dashboard';
    }
  };

  return (
    <HashRouter>
      <div 
        className="flex min-h-screen bg-slate-50"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      >
        <Sidebar 
          currentTool={currentTool} 
          onNavigate={setCurrentTool} 
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        
        <div className="flex-1 flex flex-col min-w-0 bg-white/50 backdrop-blur-sm">
          {/* Header */}
          <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm px-4 md:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                {isSidebarOpen ? <X /> : <Menu />}
              </button>
              <h2 className="text-lg font-semibold text-slate-800 truncate">
                {getPageTitle()}
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
               {/* Header Ad Placeholder - hidden on small mobile */}
               <div className="hidden lg:block">
                  <span className="text-[10px] text-slate-400 uppercase mr-2">Advertisement</span>
               </div>
               
               <a 
                 href="https://github.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
                 aria-label="View Source on GitHub"
               >
                 <Github size={20} />
               </a>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full">
            {/* Top Banner Ad Slot - Hide on upgrade page to remove distraction */}
            {currentTool !== ToolId.DASHBOARD && currentTool !== ToolId.UPGRADE && (
                <div className="flex justify-center mb-8">
                     <AdPlaceholder width={728} height={90} className="hidden md:flex" slotName="Leaderboard" />
                     <AdPlaceholder width={320} height={50} className="md:hidden flex" slotName="Mobile Banner" />
                </div>
            )}

            {renderTool()}
          </main>
          
          {/* Footer */}
          <footer className="bg-white/80 border-t border-slate-200 py-8 px-8 mt-auto backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
              <p>&copy; 2024 SEOPro Suite. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <button onClick={() => setCurrentTool(ToolId.PRIVACY)} className="hover:text-brand-600 transition-colors">Privacy Policy</button>
                <button onClick={() => setCurrentTool(ToolId.TERMS)} className="hover:text-brand-600 transition-colors">Terms of Service</button>
                <button onClick={() => setCurrentTool(ToolId.CONTACT)} className="hover:text-brand-600 transition-colors">Contact</button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;