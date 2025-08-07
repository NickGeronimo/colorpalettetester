import React from 'react';
import { hex } from 'wcag-contrast';

// Compliance thresholds for normal and large text
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

// Group contrast checks into compliant and noncompliant arrays
function groupContrastChecks(pairs) {
  return pairs.reduce(
    (acc, pair) => {
      const ratio = hex(pair.fgColor, pair.bgColor);
      const compliance = getCompliance(ratio);
      const label = `${pair.fgLabel} on ${pair.bgLabel}`;

      const entry = {
        label,
        ratio: ratio.toFixed(2),
        normalAA: compliance.normal.AA,
        normalAAA: compliance.normal.AAA,
        largeAA: compliance.large.AA,
        largeAAA: compliance.large.AAA,
        fgColor: pair.fgColor,
        bgColor: pair.bgColor,
      };

      if (entry.normalAA) {
        acc.compliant.push(entry);
      } else {
        acc.noncompliant.push(entry);
      }

      return acc;
    },
    { compliant: [], noncompliant: [] }
  );
}

// Define your test pairs once to keep code DRY
function generateTestPairs({ primary, secondary, accent, neutral, background }) {
  return [
    { fgLabel: 'primary', fgColor: primary, bgLabel: 'background', bgColor: background },
    { fgLabel: 'secondary', fgColor: secondary, bgLabel: 'background', bgColor: background },
    { fgLabel: 'accent', fgColor: accent, bgLabel: 'background', bgColor: background },
    { fgLabel: 'neutral', fgColor: neutral, bgLabel: 'background', bgColor: background },
    { fgLabel: 'neutral', fgColor: neutral, bgLabel: 'primary', bgColor: primary },
    { fgLabel: 'accent', fgColor: accent, bgLabel: 'neutral', bgColor: neutral },
    { fgLabel: 'primary', fgColor: primary, bgLabel: 'neutral', bgColor: neutral },
    { fgLabel: 'secondary', fgColor: secondary, bgLabel: 'neutral', bgColor: neutral },
    { fgLabel: 'accent', fgColor: accent, bgLabel: 'primary', bgColor: primary },
    { fgLabel: 'secondary', fgColor: secondary, bgLabel: 'primary', bgColor: primary },
  ];
}

// Component to display each contrast result row
function ResultRow({ entry }) {
  return (
    <div className="flex items-center justify-between text-sm py-1 border-b last:border-0">
      <div className="flex items-center gap-2 w-1/3">
        <span
          className="w-4 h-4 rounded"
          style={{ backgroundColor: entry.fgColor, border: '1px solid #ccc' }}
          aria-label={`${entry.label} foreground color`}
        />
        <span className="text-gray-700">{entry.label}</span>
      </div>

      <div className="w-1/3 text-center text-gray-600">{entry.ratio}:1</div>

      <div className="w-1/3 text-right space-x-2">
        <span title="Normal Text">
          {entry.normalAAA ? '✅ AAA' : entry.normalAA ? '✔ AA' : '❌'}
        </span>
        <span title="Large Text" className="ml-2">
          {entry.largeAAA ? '✅ Large AAA' : entry.largeAA ? '✔ Large AA' : '❌'}
        </span>
      </div>
    </div>
  );
}

// Card showing all compliant color pairs
function CompliantContrastCard({ palette }) {
  const { compliant } = groupContrastChecks(generateTestPairs(palette));

  return (
    <div className="bg-white border rounded-xl shadow p-4 max-w-xl mx-auto mb-6">
      <h2 className="text-lg font-semibold mb-3 text-green-700">✅ WCAG Compliant</h2>
      {compliant.length === 0 ? (
        <p className="text-gray-500">No compliant pairs found.</p>
      ) : (
        compliant.map((entry, i) => <ResultRow key={`pass-${i}`} entry={entry} />)
      )}
    </div>
  );
}

// Card showing all noncompliant color pairs
function NonCompliantContrastCard({ palette }) {
  const { noncompliant } = groupContrastChecks(generateTestPairs(palette));

  return (
    <div className="bg-white border rounded-xl shadow p-4 max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-3 text-red-600">❌ Not Compliant</h2>
      {noncompliant.length === 0 ? (
        <p className="text-gray-500">All pairs pass WCAG standards!</p>
      ) : (
        noncompliant.map((entry, i) => <ResultRow key={`fail-${i}`} entry={entry} />)
      )}
    </div>
  );
}

export { CompliantContrastCard, NonCompliantContrastCard };
