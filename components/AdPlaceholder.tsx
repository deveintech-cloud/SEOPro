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
      className={`bg-slate-200 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-xs font-medium uppercase tracking-wider select-none ${className}`}
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
