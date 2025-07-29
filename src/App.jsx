import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";


export default function App() {
  const [colors, setColors] = useState({
    primary: "#00796B",      // Deep Teal
    secondary: "#0288D1",    // Cool Blue
    accent: "#9575CD",      // Lavender Purple
    neutral: "#607D8B	",      // Slate Gray
    background: "#E0F7FA",   // Ice Blue
  });

  const handleColorChange = (key, value) => {
    setColors((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.neutral,
        minHeight: "100vh",
      }}
    >
      <Navbar colors={colors} onColorChange={handleColorChange} />

      <main className="space-y-20 py-8">
        {/* Section 1: Text + Image side-by-side */}
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>
              Palette Tester
            </h2>
            <p className="text-lg" style={{ color: colors.neutral }}>
              This is a simple color palette tester app built with React and Tailwind CSS. You can change the colors using the controls in the navbar above. The cards below demonstrate various color combinations.
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
        <section className="flex md:flex-row items-center mb-1">
          <h2 className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 text-3xl font-bold mb-4">Full Width Sections</h2>
        </section>
        {/* Section 2: Background uses primary color */}
        <section
          className="p-12 rounded"
          style={{ backgroundColor: colors.primary, color: colors.background }}
        >

                    <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4" style={{ color: colors.background }}>Standout Section</h2>
          <p style={{ color: colors.background }}>
            This section uses the primary color as background to make it really pop
            and draw attention.
          </p>
          </div>

        </section>

        {/* Section 3: Three cards with different content */}
        <section className="flex md:flex-row items-center mb-1">
          <h2 className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 text-3xl font-bold mb-4">Color Card Combos</h2>
        </section>
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


