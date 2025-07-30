import { useEffect, useRef } from 'react';

export default function ColorSidebar({ isOpen, colors, onColorChange, onClose }) {
  const sidebarRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

const colorFields = [
  {
    key: 'primary',
    label: 'Primary Color',
    description: 'Main brand color, used for 60% of the design. Headlines, buttons, and key elements.'
  },
  {
    key: 'secondary',
    label: 'Secondary Color',
    description: 'Supporting color, used for ~30%. Often backgrounds or sections that contrast the primary.'
  },
  {
    key: 'accent',
    label: 'Accent Color',
    description: 'Highlight or call-to-action color (~10%). Use sparingly for buttons, links, or highlights.'
  },
  {
    key: 'neutral',
    label: 'Neutral Color',
    description: 'Used for text, borders, and muted areas. Should balance with the background.'
  },
  {
    key: 'background',
    label: 'Background Color',
    description: 'Page background color. Ensure good contrast with text and content elements.'
  }


  ];

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">Color Controls</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-black">&times;</button>
      </div>

      <div className="p-4 space-y-4">
{colorFields.map(({ key, label, description }) => (
  <div key={key} className="space-y-1">
    <div className="flex items-center space-x-2">
      <label className="w-24">{label}:</label>
      <input
        type="color"
        value={colors[key]}
        onChange={e => onColorChange(key, e.target.value)}
        className="cursor-pointer"
      />
      <input
        type="text"
        value={colors[key]}
        onChange={e => onColorChange(key, e.target.value)}
        className="w-20 px-2 py-1 border rounded text-sm font-mono"
        maxLength={7}
      />
    </div>
    <p className="text-xs text-gray-500 pl-24">{description}</p>
  </div>
))}

      </div>
    </div>
  );
}
