import React from 'react';
import { hex } from 'wcag-contrast';

function getCompliance(ratio) {
  return {
    normal: {
      AA: ratio >= 4.5,
      AAA: ratio >= 7,
    },
    large: {
      AA: ratio >= 3,
      AAA: ratio >= 4.5,
    },
  };
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function ContrastCard({ fgLabel, fgColor, bgLabel, bgColor, useCase,background, neutral }) {
  const ratio = hex(fgColor, bgColor);
  const compliance = getCompliance(ratio);

    let message;
    let messageLarge
  if (compliance.normal.AAA) {
    message = 'AAA: ✅';
  } else if (compliance.normal.AA) {
    message = 'AA: ✅';
  } else {
    message = 'Not WCAG compliant: ❌ ';
  }
    if (compliance.normal.AAA) {
    messageLarge = 'AAA: ✅';
  } else if (compliance.normal.AA) {
    messageLarge = 'AA: ✅';
  } else {
    messageLarge = 'Not WCAG compliant: ❌ ';
  }

  return (
    <div className="rounded-xl border shadow p-4 space-y-2" style={{ backgroundColor: background, color: neutral }}>
      <div className="text-md font-medium">
        <span>{capitalize(fgLabel)}</span> on{' '}
        <span>{capitalize(bgLabel)}</span>
      </div>

      <div className="text-md">
        Contrast Ratio: <strong>{ratio.toFixed(2)}:1</strong>
      </div>

      <div className="text-md grid grid-cols-2 gap-2">
        <div>Normal Text <br /> (Font smaller than ~24px/18px bold)</div>
        <div>
          {message}
        </div>
        <div>Large Text <br /> (Font larger than ~24px/18px bold)</div>
        <div>
         {messageLarge}
        </div>
      </div>

      <div
        className="rounded-md p-3 mt-3"
        style={{
          backgroundColor: bgColor,
          color: fgColor,
        }}
      >
        <p className="text-sm">This is a sample of normal text.</p>
        <p className="text-lg font-bold">This is large text.</p>
        
      </div>
    </div>
  );
}

export default function ContrastChecker({ palette }) {
  const { primary, secondary, accent, neutral, background } = palette;

  const practicalPairs = [
  {
    fgLabel: 'primary',
    fgColor: primary,
    bgLabel: 'background',
    bgColor: background,
  },
  {
    fgLabel: 'secondary',
    fgColor: secondary,
    bgLabel: 'background',
    bgColor: background,
  },
  {
    fgLabel: 'accent',
    fgColor: accent,
    bgLabel: 'background',
    bgColor: background,
  },
  {
    fgLabel: 'neutral',
    fgColor: neutral,
    bgLabel: 'background',
    bgColor: background,
  },
  {
    fgLabel: 'neutral',
    fgColor: neutral,
    bgLabel: 'primary',
    bgColor: primary,
  },
  {
    fgLabel: 'accent',
    fgColor: accent,
    bgLabel: 'neutral',
    bgColor: neutral,
  },
  {
    fgLabel: 'primary',
    fgColor: primary,
    bgLabel: 'neutral',
    bgColor: neutral,
  },
  {
    fgLabel: 'secondary',
    fgColor: secondary,
    bgLabel: 'neutral',
    bgColor: neutral,
  },
  {
    fgLabel: 'accent',
    fgColor: accent,
    bgLabel: 'primary',
    bgColor: primary,
  },
  {
    fgLabel: 'secondary',
    fgColor: secondary,
    bgLabel: 'primary',
    bgColor: primary,
  },
  {
    fgLabel: 'primary',
    fgColor: primary,
    bgLabel: 'secondary',
    bgColor: secondary,
  },
  {
    fgLabel: 'accent',
    fgColor: accent,
    bgLabel: 'secondary',
    bgColor: secondary,
  },
];


  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {practicalPairs.map(({ fgLabel, fgColor, bgLabel, bgColor , background,neutral}, idx) => (
        <ContrastCard
          key={`${fgLabel}-${bgLabel}-${idx}`}
          fgLabel={fgLabel}
          fgColor={fgColor}
          bgLabel={bgLabel}
          bgColor={bgColor}
          background={background}
          neutral={neutral}
        />
      ))}
    </div>
  );
}
