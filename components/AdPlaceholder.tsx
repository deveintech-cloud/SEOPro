import React from 'react';

interface AdPlaceholderProps {
  width: number;
  height: number;
  className?: string;
  slotName?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ width, height, className = '', slotName = 'Ad Space' }) => {
  return (
    <div 
      className={`bg-slate-200 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 text-xs font-medium uppercase tracking-wider select-none ${className}`}
      style={{ width: '100%', maxWidth: width, height, minHeight: height }}
    >
      <div className="text-center">
        <p>{slotName}</p>
        <p>{width}x{height}</p>
      </div>
    </div>
  );
};

export default AdPlaceholder;