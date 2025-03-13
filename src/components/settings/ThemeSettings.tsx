import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import ThemeCard from "./ThemeCard";

const ThemeSettings = () => {
  const { availableThemes } = useTheme();

  return (
    <div
      className="h-full w-full overflow-auto p-8"
      style={{ backgroundColor: "var(--theme-background-dark)" }}
    >
      <div className="mx-auto max-w-4xl">
        <h1
          className="mb-6 text-2xl font-bold"
          style={{ color: "var(--theme-text-light)" }}
        >
          Color Theme
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {availableThemes.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} />
          ))}
        </div>

        <div
          className="mt-8 rounded-md border p-4"
          style={{
            borderColor: "var(--theme-text-gray)",
            backgroundColor: "var(--theme-background-dark)",
            color: "var(--theme-text-gray)",
          }}
        >
          <h2
            className="mb-2 text-lg font-medium"
            style={{ color: "var(--theme-text-light)" }}
          >
            Tips
          </h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Themes are automatically saved and restored when you reopen the
              page.
            </li>
            <li>
              You can switch themes at any time for the best viewing experience.
            </li>
            <li>
              All themes are carefully calibrated to ensure optimal contrast and
              readability!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
