import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import ColorEditorSidebar from "./components/ColorEditorSidebar";
import StandoutSection from "./components/StandoutSection";
import ContrastChecker from "./components/ContrastChecker";

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

      <main className="space-y-8 py-8" id="hero">
              <ContrastChecker palette={colors} />
        {/* Section 1: Text + Image side-by-side */}
        <section className="space-y-8">
          <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>Choosing the Right Colors</h1>
              <p className="text-xl max-w-2xl mx-auto">
                This color palette tester helps you visualize how different combinations look together across various UI elements.
                When picking colors, consider using the 60-30-10 rule:
                <strong style={{ color: colors.primary }}> 60% primary</strong> (dominant),
                <strong style={{ color: colors.secondary }}> 30% secondary</strong> (supporting), and
                <strong style={{ color: colors.accent }}> 10% accent</strong> (emphasis).
                Use <strong style={{ color: colors.neutral }}>neutral</strong> tones for balance, and ensure your <strong>background</strong> color keeps content legible.
              <br />
                Adjust the palette using the Pick Colors Button in the navbar to see your choices update live below.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                alt="Sample"
                className="shadow-lg"
              />
            </div>
          </section>
          <br />
        </section>
        <section className="space-y-8" style={{ backgroundColor: colors.neutral, color: colors.background }}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 py-8" >
            <div className="md:w-1/2 md:order-2">
              <h2 className="text-3xl font-bold mb-4">Designing for Dark Mode</h2>
              <p className="text-lg max-w-2xl mx-auto">
                Dark mode is more than just inverting colors—it's about reducing eye strain and improving contrast in low-light environments.
                When building a dark color palette, start with a deep neutral background (like charcoal or navy) and pair it with lighter text for readability.
                Use accent colors sparingly to maintain visual hierarchy and avoid overwhelming brightness.
              <br />
                Tip: Test how your primary, secondary, and accent colors behave on dark surfaces. Some colors may need to be lightened or saturated
                differently to remain accessible and visually appealing.
              </p>
            </div>
            <div className="md:w-1/2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                alt="Sample"
                className="shadow-lg"
              />
            </div>
          </div>
        </section>
        {/* Section 2: Background uses primary color */}
        <section className="" id="components">
          <section className="flex md:flex-row items-center mb-1">
            <h2 className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 text-3xl font-bold mb-4">Full Width Sections</h2>
          </section>
          <StandoutSection
            bgColorKey="primary"
            bgColor={colors.primary}
            textColorKey={"background"}
            textColor={colors.background}
          />
          <StandoutSection
            bgColorKey="secondary"
            bgColor={colors.secondary}
            textColorKey="background"
            textColor={colors.background}
          />
          <StandoutSection
            bgColorKey="accent"
            bgColor={colors.accent}
            textColorKey="background"
            textColor={colors.background}
          />
        </section>
        {/* Section 3: Three cards with different content */}


        <section className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

          <Card
            title="Primary + Background Colors"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.primary}
            textColor={colors.background}
          />
          <Card
            title="Primary + Secondary Colors"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.primary}
            textColor={colors.secondary}
          />
          <Card
            title="Primary + Accent Colors "
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.primary}
            textColor={colors.accent}
          />
          <Card
            title="Primary + Neutral Colors "
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.primary}
            textColor={colors.neutral}
          />
          <Card
            title="Secondary + Background Colors "
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.secondary}
            textColor={colors.background}
          />
          <Card
            title="Secondary + Primary Colors "
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.secondary}
            textColor={colors.primary}
          />
          <Card
            title="Secondary + Accent Colors "
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.secondary}
            textColor={colors.accent}
          />
          <Card
            title="Secondary + Neutral Colors "
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.secondary}
            textColor={colors.neutral}
          />
          <Card
            title="Accent + Background Colors "
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.accent}
            textColor={colors.background}
          />
          <Card
            title="Accent + Primary Colors "
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.accent}
            textColor={colors.primary}
          />
          <Card
            title="Accent + Secondary Colors "
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.accent}
            textColor={colors.secondary}
          />
          <Card
            title="Accent + Neutral Colors "
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.accent}
            textColor={colors.neutral}
          />
          <Card
            title="Background  + Primary Colors "
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.background}
            textColor={colors.primary}
          />
          <Card
            title="Background + Secondary Colors "
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.background}
            textColor={colors.secondary}
          />
          <Card
            title="Background + Accent Colors "
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.background}
            textColor={colors.accent}
          />
          <Card
            title="Background + Neutral Colors "
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.background}
            textColor={colors.neutral}
          />
          <Card
            title="Neutral + Background Colors "
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.neutral}
            textColor={colors.background}
          />
          <Card
            title="Neutral + Primary Colors "
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.neutral}
            textColor={colors.primary}
          />
          <Card
            title="Neutral + Secondary Colors "
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.neutral}
            textColor={colors.secondary}
          />
          <Card
            title="Neutral + Accent Colors "
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            bgColor={colors.neutral}
            textColor={colors.accent}
          />




        </section>
      </main>
    </div>
  );
}


