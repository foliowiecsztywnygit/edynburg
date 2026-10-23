import React from 'react';

/**
 * One consistent line-icon family (24px grid, 1.6 stroke, round caps).
 * Replaces the mix of emoji used before – one stroke weight everywhere
 * is what keeps the page from looking auto-generated.
 */
export type IconName =
  | 'sms'
  | 'mail'
  | 'key'
  | 'clock'
  | 'users'
  | 'moon'
  | 'noSmoking'
  | 'car'
  | 'sprout'
  | 'shield'
  | 'calendar'
  | 'bus'
  | 'basket'
  | 'castle'
  | 'arrowRight';

const PATHS: Record<IconName, React.ReactNode> = {
  sms: (
    <>
      <path d="M4 5.5h16a1 1 0 0 1 1 1v9.5a1 1 0 0 1-1 1H9l-4.2 3.2a.5.5 0 0 1-.8-.4V17H4a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1z" />
      <path d="M7.5 10h9M7.5 13h5.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="m10.9 12.1 8.6-8.6M16.5 6.5l2.5 2.5M14 9l2 2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3 19.5c.6-3.2 3-5 6-5s5.4 1.8 6 5" />
      <path d="M15.5 5.6a3.2 3.2 0 0 1 0 5.8M17.5 14.8c1.8.6 3 2.2 3.5 4.7" />
    </>
  ),
  moon: (
    <>
      <path d="M19.5 14.5A8 8 0 1 1 9.5 4.5a6.5 6.5 0 0 0 10 10z" />
      <path d="M16 4v3M14.5 5.5h3" />
    </>
  ),
  noSmoking: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m6 6 12 12" />
      <path d="M7 13.5h6.5M15.5 13.5H17" />
    </>
  ),
  car: (
    <>
      <path d="M5 16.5V12l1.8-4.2A1.5 1.5 0 0 1 8.2 7h7.6a1.5 1.5 0 0 1 1.4.8L19 12v4.5" />
      <path d="M4 16.5h16M5 12h14" />
      <circle cx="8" cy="16.5" r="1.6" />
      <circle cx="16" cy="16.5" r="1.6" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 20v-8" />
      <path d="M12 12c0-3.5-2.5-6-7-6 0 4 2.5 6 7 6z" />
      <path d="M12 14c0-3 2.2-5.5 7-5.5 0 3.7-2.6 5.5-7 5.5z" />
      <path d="M7 20h10" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 5 6v5.5c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="1.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      <path d="M8 13.5h2M14 13.5h2M8 16.5h2" />
    </>
  ),
  bus: (
    <>
      <rect x="5" y="3.5" width="14" height="14" rx="2" />
      <path d="M5 11h14M8.5 17.5V20M15.5 17.5V20" />
      <circle cx="8.5" cy="14.3" r=".6" />
      <circle cx="15.5" cy="14.3" r=".6" />
    </>
  ),
  basket: (
    <>
      <path d="M4 10h16l-1.6 8.3a1.5 1.5 0 0 1-1.5 1.2H7.1a1.5 1.5 0 0 1-1.5-1.2z" />
      <path d="m8 10 3-6M16 10l-3-6M9.5 13.5v3M14.5 13.5v3" />
    </>
  ),
  castle: (
    <>
      <path d="M4 20V8h3v2h2V8h2v2h2V8h2v2h2V8h3v12z" />
      <path d="M10 20v-4a2 2 0 0 1 4 0v4" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
};

interface LineIconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export const LineIcon: React.FC<LineIconProps> = ({ name, size = 22, className }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {PATHS[name]}
  </svg>
);
