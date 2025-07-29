export default function ColorEditor({ onChange, values }) {
  // Helper to validate hex (simple check)
  const isValidHex = (hex) => /^#([0-9A-Fa-f]{6})$/.test(hex);

  const handleHexInputChange = (key, e) => {
    const val = e.target.value;
    onChange(key, val);
  };

  return (
    <div className="p-4 space-y-6 border rounded mb-6">
      <h2 className="font-semibold text-lg">Color Controls</h2>

      {/* Background color controls */}
      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <span>Background:</span>
          <input
            type="color"
            value={values.bg}
            onChange={e => onChange('bg', e.target.value)}
            className="cursor-pointer"
          />
        </label>

        <input
          type="text"
          value={values.bg}
          onChange={(e) => handleHexInputChange('bg', e)}
          className={`w-20 px-2 py-1 border rounded text-sm font-mono ${
            isValidHex(values.bg) ? 'border-gray-300' : 'border-red-500'
          }`}
          maxLength={7}
        />
      </div>

      {/* Text color controls */}
      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <span>Text:</span>
          <input
            type="color"
            value={values.text}
            onChange={e => onChange('text', e.target.value)}
            className="cursor-pointer"
          />
        </label>

        <input
          type="text"
          value={values.text}
          onChange={(e) => handleHexInputChange('text', e)}
          className={`w-20 px-2 py-1 border rounded text-sm font-mono ${
            isValidHex(values.text) ? 'border-gray-300' : 'border-red-500'
          }`}
          maxLength={7}
        />
      </div>
    </div>
  );
}
