import React from 'react';
import { FLORA, Leaf, Blossom, Rose, Daisy, Thistle, Bud, Heather, Berries } from './FloralShapes';

export type FloralVariant = 'a' | 'b' | 'c';

interface FloralGarlandProps {
  variant?: FloralVariant;
  className?: string;
}

type FlowerKind =
  | 'rose'
  | 'blossom'
  | 'blossomCoral'
  | 'daisy'
  | 'daisyCoral'
  | 'bud'
  | 'thistle'
  | 'heather'
  | 'berries';

const CYCLES: Record<FloralVariant, FlowerKind[]> = {
  a: ['blossom', 'bud', 'daisy', 'berries', 'rose', 'heather', 'blossomCoral'],
  b: ['daisy', 'berries', 'rose', 'bud', 'blossomCoral', 'thistle', 'blossom'],
  c: ['thistle', 'blossomCoral', 'heather', 'daisyCoral', 'bud', 'rose', 'berries'],
};

/** Upward-growing primitives get flipped when they sit on a downward crest. */
const renderFlower = (kind: FlowerKind, x: number, y: number, down: boolean) => {
  const r = down ? 180 : 0;
  const rr = down ? 160 : -20;
  switch (kind) {
    case 'rose':
      return <Rose x={x} y={y} s={0.95} />;
    case 'blossom':
      return <Blossom x={x} y={y} s={0.9} r={18} />;
    case 'blossomCoral':
      return <Blossom x={x} y={y} s={0.85} petal={FLORA.coral} inner={FLORA.coralLight} />;
    case 'daisy':
      return <Daisy x={x} y={y} s={0.95} />;
    case 'daisyCoral':
      return <Daisy x={x} y={y} s={0.9} petal={FLORA.blush} />;
    case 'bud':
      return (
        <g>
          <Bud x={x - 6} y={y + (down ? -6 : 6)} r={rr} s={1.05} />
          <Bud x={x + 8} y={y + (down ? -4 : 4)} r={r + (down ? -15 : 25)} s={0.75} color={FLORA.heather} />
        </g>
      );
    case 'thistle':
      return <Thistle x={x} y={y + (down ? -10 : 10)} r={r} s={0.95} />;
    case 'heather':
      return <Heather x={x} y={y + (down ? -6 : 6)} r={down ? 200 : -15} s={0.75} />;
    case 'berries':
      return <Berries x={x} y={y + (down ? -4 : 4)} r={r} s={1.1} />;
  }
};

const W = 2400;
const H = 130;
const MID = 65;
const STEP = 150;
const AMP = 15;

/** Left half of the garland (x: 0 → 1200). The right half is a mirror copy. */
const HalfGarland: React.FC<{ variant: FloralVariant }> = ({ variant }) => {
  const cycle = CYCLES[variant];
  const crests = Array.from({ length: 7 }, (_, k) => k);

  let vine = `M0 ${MID} Q${STEP / 2} ${MID - AMP} ${STEP} ${MID}`;
  for (let k = 2; k <= 7; k++) vine += ` T${k * STEP} ${MID}`;
  vine += ` Q1110 ${MID + 14} 1158 ${MID + 4}`;

  return (
    <g>
      <path d={vine} stroke={FLORA.stem} strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d={vine} stroke={FLORA.leafLight} strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.6" transform="translate(0 -1)" />

      {crests.map((k) => {
        const down = k % 2 === 1;
        const cx = STEP / 2 + k * STEP;
        const cy = down ? MID + AMP / 2 : MID - AMP / 2;
        const out = down ? 1 : -1;
        const kind = cycle[k % cycle.length];
        return (
          <g key={k}>
            {/* leaves sprouting from the crest */}
            <Leaf x={cx - 4} y={cy} r={down ? 150 : -150} s={0.85} />
            <Leaf x={cx + 4} y={cy} r={down ? 30 : -30} s={0.8} color={FLORA.leafLight} vein={FLORA.leaf} />
            {/* small leaf at the zero-crossing, pointing opposite */}
            <Leaf x={(k + 1) * STEP - 2} y={MID} r={down ? -55 : 55} s={0.6} color={FLORA.leafDeep} vein={FLORA.leafLight} />
            <Leaf x={k * STEP + 34} y={MID + out * -5} r={down ? -125 : 125} s={0.5} />
            <g className="fl-sway" style={{ animationDelay: `${(k * 0.7) % 4}s` }}>
              {renderFlower(kind, cx, cy + out * 10, down)}
            </g>
          </g>
        );
      })}

      {/* left wing of the central bouquet */}
      <Leaf x={1198} y={70} r={198} s={1.9} />
      <Leaf x={1198} y={72} r={163} s={1.6} color={FLORA.leafDeep} vein={FLORA.leafLight} />
      <Leaf x={1196} y={66} r={232} s={1.35} color={FLORA.leafLight} vein={FLORA.leaf} />
      <Heather x={1168} y={92} r={-64} s={0.8} />
      <g className="fl-sway" style={{ animationDelay: '0.4s' }}>
        <Thistle x={1184} y={86} r={-32} s={1.15} />
      </g>
      <Bud x={1112} y={50} r={-62} s={0.9} />
      <Blossom x={1090} y={76} s={0.78} petal={variant === 'b' ? FLORA.rose : FLORA.coral} inner={variant === 'b' ? FLORA.blush : FLORA.coralLight} />
      <g className="fl-sway" style={{ animationDelay: '1.3s' }}>
        {variant === 'c' ? (
          <Rose x={1140} y={62} s={1.12} outer={FLORA.coral} mid={FLORA.roseDeep} core={FLORA.roseDark} swirl={FLORA.coralLight} />
        ) : (
          <Rose x={1140} y={62} s={1.12} />
        )}
      </g>
    </g>
  );
};

/**
 * Full-width floral garland meant to sit on the seam between two sections.
 * Pure vector – sharp on every screen, coloured to harmonise with the sage brand.
 */
export const FloralGarland: React.FC<FloralGarlandProps> = ({ variant = 'a', className = '' }) => {
  return (
    <div className={`floral-garland ${className}`} aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <HalfGarland variant={variant} />
        <g transform={`translate(${W} 0) scale(-1 1)`}>
          <HalfGarland variant={variant} />
        </g>

        {/* centre piece */}
        <g className="fl-bloom">
          {variant === 'a' && (
            <>
              <Rose x={1200} y={62} s={1.55} />
              <Bud x={1200} y={34} s={0.8} color={FLORA.roseDeep} />
            </>
          )}
          {variant === 'b' && (
            <>
              <Blossom x={1200} y={62} s={1.45} petal={FLORA.thistleLight} inner={FLORA.blushLight} />
              <Berries x={1200} y={40} s={0.9} color={FLORA.thistle} />
            </>
          )}
          {variant === 'c' && (
            <>
              <Thistle x={1200} y={92} s={1.55} />
              <Daisy x={1200} y={92} s={0.75} petal={FLORA.blush} />
            </>
          )}
        </g>
      </svg>
    </div>
  );
};
