import React from 'react';
import { FLORA, Leaf, Blossom, Rose, Daisy, Thistle, Bud, Heather, Berries } from './FloralShapes';

interface FloralSprayProps {
  side?: 'left' | 'right';
  position?: 'top' | 'center' | 'bottom';
  variant?: 'a' | 'b';
  className?: string;
}

/**
 * Tall botanical spray that grows in from the side edge of a section.
 * Drawn for the left edge; the right side is a CSS mirror.
 */
export const FloralSpray: React.FC<FloralSprayProps> = ({
  side = 'left',
  position = 'center',
  variant = 'a',
  className = '',
}) => {
  const isB = variant === 'b';
  return (
    <div className={`floral-spray floral-spray--${side} floral-spray--${position} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 240 560" xmlns="http://www.w3.org/2000/svg">
        {/* stems */}
        <g stroke={FLORA.stem} fill="none" strokeLinecap="round">
          <path d="M-6 560 C50 470 18 370 64 280 C100 205 78 130 104 64" strokeWidth="3.2" />
          <path d="M34 455 C70 440 110 420 150 392" strokeWidth="2.2" />
          <path d="M50 330 C90 318 130 300 172 286" strokeWidth="2" />
          <path d="M68 262 C52 230 34 205 22 172" strokeWidth="1.8" />
          <path d="M90 175 C115 160 135 150 150 132" strokeWidth="1.6" />
          <path d="M80 228 C100 226 115 224 128 222" strokeWidth="1.4" />
          <path d="M12 522 C40 516 60 512 78 508" strokeWidth="1.6" />
        </g>

        {/* foliage */}
        <Leaf x={20} y={500} r={-70} s={1.4} />
        <Leaf x={34} y={452} r={-12} s={1.5} color={FLORA.leafLight} vein={FLORA.leaf} />
        <Leaf x={38} y={430} r={200} s={1.3} color={FLORA.leafDeep} vein={FLORA.leafLight} />
        <Leaf x={58} y={362} r={-28} s={1.55} />
        <Leaf x={62} y={300} r={-160} s={1.25} color={FLORA.leafDeep} vein={FLORA.leafLight} />
        <Leaf x={72} y={244} r={-40} s={1.35} color={FLORA.leafLight} vein={FLORA.leaf} />
        <Leaf x={86} y={200} r={200} s={1.2} />
        <Leaf x={96} y={124} r={-32} s={1.15} color={FLORA.leafDeep} vein={FLORA.leafLight} />
        <Leaf x={100} y={102} r={212} s={1.05} />
        <Leaf x={100} y={428} r={58} s={1} color={FLORA.leafDeep} vein={FLORA.leafLight} />
        <Leaf x={120} y={411} r={-72} s={1.1} />
        <Leaf x={118} y={306} r={50} s={0.9} color={FLORA.leafLight} vein={FLORA.leaf} />
        <Leaf x={140} y={297} r={-62} s={1} />
        <Leaf x={50} y={516} r={60} s={0.9} color={FLORA.leafDeep} vein={FLORA.leafLight} />

        {/* flowers */}
        <Heather x={42} y={402} r={-28} s={1.1} color={isB ? FLORA.thistleLight : FLORA.heather} />
        <Daisy x={80} y={508} s={1.1} petal={isB ? FLORA.blush : FLORA.thistleLight} />
        <Berries x={152} y={130} r={30} s={1.3} color={isB ? FLORA.thistle : FLORA.roseDeep} />
        <Blossom x={130} y={222} s={0.8} petal={FLORA.blush} inner={FLORA.blushLight} />
        <Bud x={21} y={170} r={-20} s={1.35} color={isB ? FLORA.coral : FLORA.rose} />

        <g className="fl-sway" style={{ animationDelay: '0.6s' }}>
          <Blossom
            x={178}
            y={282}
            s={1.25}
            r={12}
            petal={isB ? FLORA.rose : FLORA.coral}
            inner={isB ? FLORA.blush : FLORA.coralLight}
          />
        </g>
        <g className="fl-sway" style={{ animationDelay: '1.8s' }}>
          {isB ? (
            <Rose x={156} y={388} s={1.5} outer={FLORA.coral} mid={FLORA.roseDeep} core={FLORA.roseDark} swirl={FLORA.coralLight} />
          ) : (
            <Rose x={156} y={388} s={1.5} />
          )}
        </g>
        <g className="fl-sway" style={{ animationDelay: '0s' }}>
          <Thistle x={104} y={66} r={8} s={1.6} />
        </g>
      </svg>
    </div>
  );
};
