import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import ColorEditorSidebar from "./components/ColorEditorSidebar";
import StandoutSection from "./components/StandoutSection";
import { CompliantContrastCard, NonCompliantContrastCard } from "./components/ContrastChecker";
import UIElements from './components/UIElements';

export default function App() {
  const [colors, setColors] = useState({
    primary: "#1E3A8A",
    secondary: "#154D4B",
    accent: "#43F7F1",
    neutral: "#1C151B",
    background: "#F9FAFB",
  });
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleColorChange = (key, value) => {
    setColors((prev) => ({ ...prev, [key]: value }));
  };

  return (

    <div
      style={{
        backgroundColor: colors.background,
        color: colors.neutral,
      }}
    >
      <div style={{ backgroundColor: colors.background, color: colors.neutral }} className="sticky top-0 z-50">
        <Navbar onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} accentColor={colors.accent} neutralColor={colors.neutral} backgroundColor={colors.background} primaryColor={colors.primary} secondaryColor={colors.secondary} />
        <ColorEditorSidebar
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
          colors={colors}
          onColorChange={handleColorChange}
        />
        {/* Your other page content here */}
      </div>

      <main className="space-y-8 scroll-mt-26" id="hero">
        {/* Section 1: Text + Image side-by-side */}
        <section className="max-w-6xl p-8 mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: colors.primary }}>Welcome!</h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: colors.neutral }}>
              Color contrast plays a vital role in making digital content accessible to everyone, especially users with visual impairments. This project aims to make it easy to visualize how different color combinations appear in UI components and whether they meet the Web Content Accessibility Guidelines (WCAG) for contrast.
            </p>
            <br />
            <p className="text-xl max-w-2xl mx-auto" style={{ color: colors.neutral }}>
              Adjust the palette using the Pick Colors Button in the navbar to see your choices update live below.
            </p>
          </div>
          <div className="md:w-1/2">
            <CompliantContrastCard palette={colors} />
          </div>
        </section>
        <br />
        <section className="mb-0" style={{ backgroundColor: colors.neutral, color: colors.background }}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 py-16" >
            <div className="md:w-1/2 md:order-2">
              <h2 className="text-3xl font-bold mb-4">Understanding Non-Compliant Color Combinations</h2>
              <p className="text-lg max-w-2xl mx-auto">
                Not all color combinations in a palette will meet strict WCAG contrast standards, and that’s perfectly okay. There is no “perfect palette” where every color pairs flawlessly with every other color. Instead, color palettes are designed to balance aesthetics, brand identity, and accessibility. Non-compliant pairings simply mean those specific contrasts might not be ideal for important text or UI elements, especially smaller or critical content. 
              </p>
              <p className="text-lg max-w-2xl mx-auto">You can still use these colors thoughtfully — for example, in backgrounds or decorative elements, where contrast requirements are less strict. The goal is to use your palette where it works best while maintaining readability and accessibility for users.</p>
            </div>
            <div className="md:w-1/2 md:order-1">
              <NonCompliantContrastCard palette={colors} />

            </div>
          </div>
        </section>
        {/* Section 2: Background uses primary color */}
        <section className="scroll-mt-26 p-10" id="components" style={{ backgroundColor: colors.secondary, color: colors.background }}>
      <UIElements palette={colors} />

          
        </section>
        {/* Section 3: Three cards with different content */}
      </main>
    </div>
  );
}


