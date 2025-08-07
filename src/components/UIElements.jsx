import React from 'react';

export default function UIElements({ palette }) {
  const { primary, secondary, accent, neutral, background } = palette;

  return (
    <div className="space-y-12  p-8 max-w-4xl mx-auto border-2 rounded" style={{ backgroundColor: background, color: neutral }}>
        <section>
        <h2 className="text-2xl font-semibold mb-4">UI Elements</h2>
        </section>
      {/* Buttons */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <button
            style={{ backgroundColor: primary, color: background }}
            className="px-4 py-2 rounded shadow hover:brightness-90 transition"
          >
            Primary
          </button>
          <button
            style={{ backgroundColor: secondary, color: background }}
            className="px-4 py-2 rounded shadow hover:brightness-90 transition"
          >
            Secondary
          </button>
          <button
            style={{ backgroundColor: accent, color: background }}
            className="px-4 py-2 rounded shadow hover:brightness-90 transition"
          >
            Accent
          </button>
          <button
            style={{ backgroundColor: neutral, color: background, opacity: 0.6, cursor: 'not-allowed' }}
            disabled
            className="px-4 py-2 rounded"
          >
            Neutral 
          </button>
        </div>
      </section>

      {/* Forms */}
      <section className='mx-auto flex flex-col items-center'>
        <h2 className="text-xl font-semibold mb-4">Form Elements</h2>
        <form className="space-y-4 max-w-md">
          <label className="block text-sm font-medium" style={{ color: primary }}>
            Username
            <input
              type="text"
              placeholder="Enter your username"
              style={{
                borderColor: neutral,
                backgroundColor: background,
                color: primary,
              }}
              className="mt-1 block w-full rounded border px-3 py-2 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-offset-1"
            />
          </label>

          <label className="block text-sm font-medium" style={{ color: primary }}>
            Password
            <input
              type="password"
              placeholder="Enter your password"
              style={{
                borderColor: neutral,
                backgroundColor: background,
                color: primary,
              }}
              className="mt-1 block w-full rounded border px-3 py-2 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-offset-1"
            />
          </label>

          <p className="text-xs" style={{ color: accent }}>
            Password must be at least 8 characters.
          </p>

          <p className="text-xs text-red-600">Error: Password is too short.</p>

          <button
            type="submit"
            style={{ backgroundColor: primary, color: background }}
            className="px-4 py-2 rounded shadow hover:brightness-90 transition"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Cards */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Cards / Panels</h2>
        <div className="flex flex-col md:flex-row gap-8">
            <div
              style={{ backgroundColor: background, color: neutral, borderColor: neutral }}
              className="rounded-lg border p-6 max-w-md shadow md:w-1/2"
            >
              <h3 style={{ color: primary }} className="text-lg font-bold mb-2">
                Card Title
              </h3>
              <p>
                This is an example card using the background and neutral colors. The title
                uses the primary color.
              </p>
            </div>
            <div
              style={{ backgroundColor: neutral, color: background, borderColor: neutral }}
              className="rounded-lg border p-6 max-w-md shadow md:w-1/2"
            >
              <h3 style={{ color: accent }} className="text-lg font-bold mb-2">
                Card Title
              </h3>
              <p>
                This is an example card using the background and neutral colors. The title
                uses the primary color.
              </p>
            </div>
        </div>
      </section>

    </div>
  );
}
