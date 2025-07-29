export default function Navbar({ colors, onColorChange }) {
  const colorFields = [
    {
      key: 'primary',
      label: 'Primary Color',
      description:
        'The main color used most frequently throughout the site — usually representing your brand identity.',
    },
    {
      key: 'secondary',
      label: 'Secondary Color',
      description:
        'Used to support or complement the primary color; helps create contrast and hierarchy.',
    },
    {
      key: 'accent',
      label: 'Accent Color',
      description:
        'Used sparingly to highlight important elements like buttons, links, or calls to action.',
    },
    {
      key: 'neutral',
      label: 'Neutral Color',
      description:
        'Usually shades of gray, white, or black used for backgrounds, text, and subtle UI elements.',
    },
    {
      key: 'background',
      label: 'Background Color',
      description:
        'The main background color of the page, often neutral or very light to make content readable.',
    },


  ];

  return (
    <nav className="bg-gray-950 mx-auto flex flex-row md:flex-row text-white p-4 flex-wrap items-center ">

      {colorFields.map(({ key, label, description }) => (
        <div key={key} className="flex flex-col items-start space-y-1">
          <label
            className="flex items-center space-x-2 cursor-pointer"
            title={description}
          >
            <span className="whitespace-nowrap">{label}:</span>
            <input
              type="color"
              value={colors[key]}
              onChange={e => onColorChange(key, e.target.value)}
              className="cursor-pointer w-10 h-8 p-0 border-0"
            />
          </label>
          <small className="text-gray-300 max-w-xs text-xs">{description}</small>
        </div>
      ))}
    </nav>
  );
}
