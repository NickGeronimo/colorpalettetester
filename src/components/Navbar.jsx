export default function Navbar({ onToggleSidebar,accentColor, neutralColor, primaryColor,backgroundColor, secondaryColor }) {
  return (
    <nav className="flex justify-between items-center p-4 border-b-2" id="nav" style={{backgroundColor: backgroundColor, color: primaryColor, borderColor: neutralColor}}>
      <h1 className="text-3xl font-bold">Web Color Palette Visualizer</h1>
      <a
        href="https://www.w3.org/WAI/WCAG21/Understanding/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg hover:underline"  
      >
        What is WCAG?
      </a>

      <div className="flex space-x-4">
        <a href="#hero" className="text-lg hover:underline">
          Home 
        </a> 
        <a href="#components" className="text-lg hover:underline">
          Components 
        </a> 
        <a href="#templates" className="text-lg hover:underline">
          Templates 
        </a>
      </div> 


      <button
        onClick={onToggleSidebar}
        className="px-4 py-2 rounded duration-200 cursor-pointer"
        style={{
          backgroundColor: primaryColor,
          color: backgroundColor
        }}
          onMouseEnter={(e) => {
          e.target.style.backgroundColor = secondaryColor;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = primaryColor;
        }}
      >
        Pick Colors
      </button>
    </nav>
  );
}
