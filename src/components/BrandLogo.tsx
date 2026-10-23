import React from 'react';

interface BrandLogoProps {
  variant?: 'header' | 'footer';
  className?: string;
}

/**
 * Wordmark recreated from the host's printed guest materials:
 * small cottage outline + serif "The Edinburgh" + script "Garden House".
 * Script face is used ONLY here – nowhere else on the site.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'header', className = '' }) => (
  <span className={`brand-logo brand-logo--${variant} ${className}`}>
    <svg className="brand-logo__house" viewBox="0 0 48 40" aria-hidden="true">
      <path d="M4 19 24 4l20 15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 16v20h30V16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M33 10V5h4v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <rect x="20.5" y="24" width="7" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="12.5" y="20" width="5" height="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="30.5" y="20" width="5" height="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2 36c3-3 5-3 7 0M39 36c2-3.5 5-3.5 7 0" fill="none" stroke="var(--c-leaf, #6E8B6A)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
    <span className="brand-logo__text">
      <span className="brand-logo__serif">The Edinburgh</span>
      <span className="brand-logo__script">Garden House</span>
    </span>
  </span>
);
