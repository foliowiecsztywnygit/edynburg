import React from 'react';
import { FLORA, Leaf, Blossom, Bud } from './florals/FloralShapes';

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
        viewBox="-62 -20 124 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-58 4 C-30 -2 30 -2 58 4" stroke={FLORA.stem} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <Leaf x={-6} y={2} r={192} s={1.15} />
        <Leaf x={6} y={2} r={-12} s={1.15} />
        <Leaf x={-8} y={4} r={150} s={0.75} color={FLORA.leafLight} vein={FLORA.leaf} />
        <Leaf x={8} y={4} r={30} s={0.75} color={FLORA.leafLight} vein={FLORA.leaf} />
        <Bud x={-40} y={4} r={-68} s={0.62} color={FLORA.heather} />
        <Bud x={40} y={4} r={68} s={0.62} color={FLORA.heather} />
        <circle cx={-52} cy={3} r={2} fill={FLORA.gold} />
        <circle cx={52} cy={3} r={2} fill={FLORA.gold} />
        <Blossom x={0} y={0} s={0.66} />
      </svg>
      <span className="botanical-line right"></span>
    </div>
  );
};
