import React from 'react';

interface BotanicalDividerProps {
  className?: string;
  accentColor?: string;
}

export const BotanicalDivider: React.FC<BotanicalDividerProps> = ({ className = '', accentColor }) => {
  const style = accentColor ? { color: accentColor } : undefined;

  return (
    <div className={`botanical-divider ${className}`} style={style} aria-hidden="true">
      <span className="botanical-line left"></span>
      <svg 
        className="botanical-sprig-svg" 
        viewBox="0 0 54 22" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 11C16 11 38 11 52 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
        <path d="M12 11C13 6 18 5 21 8C18.5 10 16 11 12 11Z" fill="currentColor" opacity="0.85"/>
        <path d="M18 11C19 16 24 17 26 13.5C23.5 12 21 11 18 11Z" fill="currentColor" opacity="0.85"/>
        <ellipse cx="27" cy="11" rx="3.5" ry="2.2" fill="currentColor"/>
        <path d="M36 11C35 6 30 5 27 8C29.5 10 32 11 36 11Z" fill="currentColor" opacity="0.85"/>
        <path d="M42 11C41 16 36 17 34 13.5C36.5 12 39 11 42 11Z" fill="currentColor" opacity="0.85"/>
      </svg>
      <span className="botanical-line right"></span>
    </div>
  );
};
