import React from "react";
import { Theme } from "../../config/themes";
import { useTheme } from "../../contexts/ThemeContext";

interface ThemeCardProps {
  theme: Theme;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ theme }) => {
  const { currentTheme, setTheme } = useTheme();
  const isActive = currentTheme.id === theme.id;

  return (
    <div
      className={`flex flex-col gap-2 rounded-md border p-4 transition-all hover:cursor-pointer ${
        isActive
          ? "border-[#FDA55E] bg-opacity-10"
          : "border-gray-700 hover:border-gray-500"
      }`}
      style={{
        backgroundColor: theme.colors.background.dark,
      }}
      onClick={() => setTheme(theme.id)}
    >
      {/* Theme Name */}
      <div className="flex items-center justify-between">
        <span
          className="font-medium"
          style={{ color: theme.colors.text.light }}
        >
          {theme.name}
        </span>
        {isActive && (
          <span className="text-[#FDA55E]">✓</span>
        )}
      </div>

      {/* Preview */}
      <div className="mt-2 flex flex-col gap-1">
        <div className="flex gap-2">
          <span style={{ color: theme.colors.code.keyword }}>const</span>
          <span style={{ color: theme.colors.code.variable }}>example</span>
          <span style={{ color: theme.colors.text.light }}>=</span>
          <span style={{ color: theme.colors.code.string }}>"Text"</span>
          <span style={{ color: theme.colors.text.light }}>;</span>
        </div>
        <div style={{ color: theme.colors.code.comment }}>// preview</div>
      </div>
    </div>
  );
};

export default ThemeCard;
