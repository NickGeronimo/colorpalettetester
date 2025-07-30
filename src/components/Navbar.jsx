export default function Navbar({ onToggleSidebar,accentColor, neutralColor }) {
  return (
    <nav className="flex justify-between items-center p-4 text-white" style={{backgroundColor: neutralColor}}>
      <h1 className="text-3xl font-bold">My Color Tester</h1>
      <button
        onClick={onToggleSidebar}
        className="border-2 px-4 py-2  rounded transition-colors duration-200 cursor-pointer"
        style={{
          backgroundColor: accentColor,
          borderColor: 'transparent',
        }}
          onMouseEnter={(e) => {
          e.target.style.backgroundColor = neutralColor;
          e.target.style.borderColor = accentColor;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = accentColor;
        }}
      >
        Pick Colors
      </button>
    </nav>
  );
}
