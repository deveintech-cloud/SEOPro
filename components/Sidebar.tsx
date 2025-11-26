import React from 'react';
import { TOOLS_NAV, AFFILIATE_LINKS } from '../constants';
import { ToolId } from '../types';
import AdPlaceholder from './AdPlaceholder';
import { ExternalLink, Crown } from 'lucide-react';

interface SidebarProps {
  currentTool: ToolId;
  onNavigate: (tool: ToolId) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentTool, onNavigate, isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      <aside 
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-slate-900 dark:bg-slate-950 text-slate-100 flex flex-col transition-transform duration-300 z-30 overflow-y-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 border-r border-slate-800 dark:border-slate-800`}
      >
        <div className="p-6 border-b border-slate-800">
          <h1 
            onClick={() => onNavigate(ToolId.DASHBOARD)}
            className="text-2xl font-bold bg-gradient-to-r from-brand-500 to-indigo-400 bg-clip-text text-transparent cursor-pointer"
          >
            SEOPro Suite
          </h1>
          <p className="text-xs text-slate-400 mt-1">Professional SEO Tools</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {TOOLS_NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id as ToolId);
                if (window.innerWidth < 768) onClose();
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                ${currentTool === item.id 
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-900/50' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
          
          <div className="pt-4 mt-2">
            <button
              onClick={() => {
                onNavigate(ToolId.UPGRADE);
                if (window.innerWidth < 768) onClose();
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg shadow-orange-900/20 group"
            >
              <Crown size={20} className="text-yellow-100 group-hover:scale-110 transition-transform" />
              Upgrade to Pro
            </button>
          </div>
        </nav>

        {/* Sidebar Ad Unit */}
        <div className="p-4 flex flex-col items-center">
          <p className="text-[10px] text-slate-500 mb-2 uppercase tracking-widest w-full text-center">Sponsored</p>
          <AdPlaceholder width={300} height={250} slotName="Sidebar Ad" />
        </div>

        {/* Affiliate Section */}
        <div className="p-4 border-t border-slate-800 bg-slate-800/50">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Recommended Tools</h3>
          <div className="space-y-3">
            {AFFILIATE_LINKS.slice(0, 2).map((link, idx) => (
              <a 
                key={idx}
                href={link.url}
                className="flex items-center gap-3 p-2 rounded hover:bg-slate-700 transition-colors group"
              >
                <div className="w-8 h-8 bg-slate-700 rounded-md overflow-hidden shrink-0">
                  <img src={link.icon} alt={link.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-medium text-slate-200 truncate">{link.name}</p>
                  <p className="text-xs text-slate-500 truncate">{link.description}</p>
                </div>
                <ExternalLink size={14} className="text-slate-500 group-hover:text-brand-400" />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;