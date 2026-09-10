import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = true 
}) => {
  const [imageError, setImageError] = useState(false);

  const dimMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Visual Logo Emblem */}
      <div 
        className={`${dimMap[size]} rounded-xl overflow-hidden bg-white p-1 shadow-sm flex items-center justify-center flex-shrink-0 border border-[#D5C6B3] group-hover:scale-105 transition-transform duration-200`}
      >
        {!imageError ? (
          <img 
            src="https://cdn.phototourl.com/free/2026-08-29-2b2e6e23-b709-4831-9daf-943caa59d3fd.jpg" 
            alt="Kartik Crafts Logo" 
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-contain rounded-lg"
          />
        ) : null}

        {imageError && (
          <div className="w-full h-full rounded-lg bg-[#1C1917] flex items-center justify-center relative overflow-hidden p-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8C4A27]/40 via-transparent to-[#D49B5B]/20" />
            <svg 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full relative z-10"
            >
              <rect x="7" y="7" width="5" height="26" rx="2.5" fill="#FAF7F2" />
              <path 
                d="M14 20L25 8C25.8 7.2 27.2 7.2 28 8C28.8 8.8 28.8 10.2 28 11L19.5 20.5L29 30.5C29.8 31.3 29.8 32.7 29 33.5C28.2 34.3 26.8 34.3 26 33.5L14 21" 
                fill="#D49B5B" 
              />
              <circle cx="28" cy="20" r="3" fill="#8C4A27" />
            </svg>
          </div>
        )}
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#1C1917] font-['Outfit']">
              Kartik <span className="text-[#8C4A27]">Crafts</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-[#8C4A27]/10 text-[#8C4A27] px-1.5 py-0.5 rounded border border-[#8C4A27]/20">
              Studio
            </span>
          </div>
          <p className="text-[11px] text-[#78716C] font-medium hidden sm:block mt-0.5">
            Websites That Grow Your Business
          </p>
        </div>
      )}
    </div>
  );
};
