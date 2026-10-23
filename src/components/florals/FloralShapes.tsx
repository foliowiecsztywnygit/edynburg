import React from 'react';

/**
 * Hand-built vector flower primitives (pure SVG, no raster images).
 * Every primitive is drawn around its own origin (0,0) and positioned
 * through x / y / s (scale) / r (rotation in degrees).
 *
 * Palette is tuned to the sage (#73947D) brand colour and the
 * dusty-pink / olive interiors of the house, with a Scottish thistle accent.
 */
export const FLORA = {
  rose: '#E07A8E',
  roseDeep: '#B8475F',
  roseDark: '#8E3048',
  blush: '#F6BFC8',
  blushLight: '#FCE4E8',
  thistle: '#8A5CB0',
  thistleLight: '#B993D6',
  heather: '#C9649C',
  gold: '#F0B847',
  goldDeep: '#C98A22',
  coral: '#F09272',
  coralLight: '#F9C3AE',
  leaf: '#6F9A7A',
  leafDeep: '#43684E',
  leafLight: '#A9CBA6',
  stem: '#5C8566',
};

export interface ShapeProps {
  x?: number;
  y?: number;
  s?: number;
  r?: number;
  className?: string;
}

const tf = ({ x = 0, y = 0, s = 1, r = 0 }: ShapeProps) =>
  `translate(${x} ${y}) rotate(${r}) scale(${s})`;

/* ---------- LEAF (points right from origin, length 30) ---------- */
export const Leaf: React.FC<ShapeProps & { color?: string; vein?: string }> = ({
  color = FLORA.leaf,
  vein = FLORA.leafDeep,
  className,
  ...p
}) => (
  <g transform={tf(p)} className={className}>
    <path d="M0 0 C7 -10 21 -10 30 0 C21 9 7 9 0 0Z" fill={color} />
    <path d="M1.5 0 C10 -1 19 -1 27 0" stroke={vein} strokeWidth="0.9" fill="none" opacity="0.55" strokeLinecap="round" />
    <path d="M10 -0.6 L14 -4 M17 -0.6 L21 -3.6 M12 0.4 L16 3.6" stroke={vein} strokeWidth="0.6" opacity="0.35" strokeLinecap="round" />
  </g>
);

/* ---------- BLOSSOM (5 notched petals, radius ~18) ---------- */
const PETAL = 'M0 0 C-10 -4 -11 -15 -4 -18 C-2 -19 -1 -17.5 0 -16 C1 -17.5 2 -19 4 -18 C11 -15 10 -4 0 0Z';

export const Blossom: React.FC<
  ShapeProps & { petal?: string; inner?: string; center?: string }
> = ({ petal = FLORA.rose, inner = FLORA.blush, center = FLORA.gold, className, ...p }) => (
  <g transform={tf(p)} className={className}>
    {[0, 72, 144, 216, 288].map((a) => (
      <path key={a} d={PETAL} fill={petal} transform={`rotate(${a})`} />
    ))}
    {[36, 108, 180, 252, 324].map((a) => (
      <path key={a} d={PETAL} fill={inner} transform={`rotate(${a}) scale(0.52)`} opacity="0.95" />
    ))}
    <circle r="3.8" fill={center} />
    {[0, 72, 144, 216, 288].map((a) => (
      <circle
        key={a}
        r="0.95"
        cx={Math.cos((a * Math.PI) / 180) * 5.6}
        cy={Math.sin((a * Math.PI) / 180) * 5.6}
        fill={FLORA.goldDeep}
      />
    ))}
  </g>
);

/* ---------- ROSE (top view, layered, radius ~17) ---------- */
export const Rose: React.FC<
  ShapeProps & { outer?: string; mid?: string; core?: string; swirl?: string }
> = ({
  outer = FLORA.rose,
  mid = FLORA.roseDeep,
  core = FLORA.roseDark,
  swirl = FLORA.blush,
  className,
  ...p
}) => (
  <g transform={tf(p)} className={className}>
    {[0, 60, 120, 180, 240, 300].map((a) => (
      <ellipse key={a} cx="0" cy="-10" rx="8.5" ry="8" fill={outer} transform={`rotate(${a})`} />
    ))}
    {[30, 90, 150, 210, 270, 330].map((a) => (
      <path
        key={a}
        d="M-6 -8 C-4 -12 4 -12 6 -8"
        stroke={swirl}
        strokeWidth="0.9"
        fill="none"
        opacity="0.55"
        transform={`rotate(${a})`}
        strokeLinecap="round"
      />
    ))}
    <circle r="9.5" fill={mid} />
    <circle r="6" fill={core} />
    <path
      d="M0 -1 C2.6 -1.2 2.8 2.4 0 2.6 C-3.4 2.8 -4.4 -2.6 -0.2 -4.2 C4.6 -5.6 7.4 1 3.6 5.4 C1 8 -5.6 7.2 -7.4 2.6"
      stroke={swirl}
      strokeWidth="1.3"
      fill="none"
      strokeLinecap="round"
    />
  </g>
);

/* ---------- DAISY (12 slim petals, radius ~16) ---------- */
export const Daisy: React.FC<ShapeProps & { petal?: string; center?: string }> = ({
  petal = FLORA.thistleLight,
  center = FLORA.gold,
  className,
  ...p
}) => (
  <g transform={tf(p)} className={className}>
    {Array.from({ length: 12 }, (_, i) => i * 30).map((a) => (
      <ellipse key={a} cx="0" cy="-9.5" rx="2.9" ry="7.2" fill={petal} transform={`rotate(${a})`} />
    ))}
    <circle r="4.6" fill={center} />
    <circle r="2.2" fill={FLORA.goldDeep} opacity="0.55" />
  </g>
);

/* ---------- SCOTTISH THISTLE (base at origin, grows up ~42) ---------- */
export const Thistle: React.FC<ShapeProps & { tuft?: string; tuftLight?: string }> = ({
  tuft = FLORA.thistle,
  tuftLight = FLORA.thistleLight,
  className,
  ...p
}) => {
  const outer = Array.from({ length: 13 }, (_, i) => 200 + i * (140 / 12));
  const inner = Array.from({ length: 9 }, (_, i) => 215 + i * (110 / 8));
  const rad = (d: number) => (d * Math.PI) / 180;
  return (
    <g transform={tf(p)} className={className}>
      {outer.map((a, i) => (
        <line
          key={`o${i}`}
          x1="0"
          y1="-21"
          x2={Math.cos(rad(a)) * (i % 2 ? 15 : 18)}
          y2={-21 + Math.sin(rad(a)) * (i % 2 ? 15 : 18)}
          stroke={tuft}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      ))}
      {inner.map((a, i) => (
        <line
          key={`i${i}`}
          x1="0"
          y1="-21"
          x2={Math.cos(rad(a)) * 11}
          y2={-21 + Math.sin(rad(a)) * 11}
          stroke={tuftLight}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ))}
      <ellipse cx="0" cy="-21" rx="9.5" ry="2.6" fill={FLORA.leafDeep} />
      <path d="M-8 -6 L-16 -1 L-9.5 -11Z M8 -6 L16 -1 L9.5 -11Z" fill={FLORA.leaf} />
      <path d="M-9 -4 C-11.5 -15 -6 -21.5 0 -21.5 C6 -21.5 11.5 -15 9 -4 C6 1 -6 1 -9 -4Z" fill={FLORA.leafDeep} />
      <path
        d="M-7 -8 L0 -4 L7 -8 M-8 -13.5 L0 -9.5 L8 -13.5 M-6 -18.5 L0 -15 L6 -18.5"
        stroke={FLORA.leafLight}
        strokeWidth="1"
        fill="none"
        strokeLinejoin="round"
        opacity="0.8"
      />
    </g>
  );
};

/* ---------- BUD (teardrop, base at origin, grows up ~20) ---------- */
export const Bud: React.FC<ShapeProps & { color?: string; tip?: string }> = ({
  color = FLORA.rose,
  tip = FLORA.blush,
  className,
  ...p
}) => (
  <g transform={tf(p)} className={className}>
    <path d="M0 -21 C8 -15 8 -4 0 0 C-8 -4 -8 -15 0 -21Z" fill={color} />
    <path d="M0 -21 C3 -17 3 -11 0 -8" stroke={tip} strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.8" />
    <path d="M0 0 C-7 -1.5 -8.5 -8 -6 -12 C-3.5 -7 -1.5 -3.5 0 0Z" fill={FLORA.leaf} />
    <path d="M0 0 C7 -1.5 8.5 -8 6 -12 C3.5 -7 1.5 -3.5 0 0Z" fill={FLORA.leaf} />
  </g>
);

/* ---------- HEATHER SPRIG (base at origin, grows up ~52) ---------- */
export const Heather: React.FC<ShapeProps & { color?: string }> = ({
  color = FLORA.heather,
  className,
  ...p
}) => {
  const bells = [
    [3.2, -16, 2.6], [-3.2, -21, 2.6], [3.2, -26, 2.4], [-3.2, -31, 2.3],
    [3, -36, 2.1], [-2.8, -40.5, 1.9], [2.4, -45, 1.7], [-1.8, -49, 1.5], [0, -53, 1.4],
  ];
  return (
    <g transform={tf(p)} className={className}>
      <path d="M0 0 C1 -18 -1 -36 0 -54" stroke={FLORA.stem} strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <path d="M0 -6 L-5 -10 M0 -10 L5 -13" stroke={FLORA.leaf} strokeWidth="1.2" strokeLinecap="round" />
      {bells.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={color} opacity={i % 2 ? 0.85 : 1} />
      ))}
    </g>
  );
};

/* ---------- BERRIES (cluster of 3) ---------- */
export const Berries: React.FC<ShapeProps & { color?: string }> = ({
  color = FLORA.roseDeep,
  className,
  ...p
}) => (
  <g transform={tf(p)} className={className}>
    <path d="M0 0 L-5 -9 M0 0 L5 -8 M0 0 L0 -13" stroke={FLORA.stem} strokeWidth="1" strokeLinecap="round" />
    {[
      [-5, -10, 3.4],
      [5.5, -9, 3],
      [0, -15, 3.2],
    ].map(([cx, cy, r], i) => (
      <g key={i}>
        <circle cx={cx} cy={cy} r={r} fill={color} />
        <circle cx={cx - r * 0.35} cy={cy - r * 0.35} r={r * 0.3} fill="#fff" opacity="0.55" />
      </g>
    ))}
  </g>
);
