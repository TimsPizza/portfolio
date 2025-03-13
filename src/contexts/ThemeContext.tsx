import React, { createContext, useContext, useEffect, useState } from "react";
import { Theme, defaultTheme, themes } from "../config/themes";

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeId: string) => void;
  availableThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: defaultTheme,
  setTheme: () => {},
  availableThemes: themes,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    // 从 localStorage 恢复保存的主题
    const savedThemeId = localStorage.getItem("selectedTheme");
    if (savedThemeId) {
      const theme = themes.find((t) => t.id === savedThemeId);
      if (theme) {
        setCurrentTheme(theme);
      }
    }
  }, []);

  // 更新 CSS 变量
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(currentTheme.colors).forEach(([category, values]) => {
      if (typeof values === "object") {
        Object.entries(values).forEach(([key, value]) => {
          root.style.setProperty(
            `--theme-${category}-${key}`,
            value
          );
        });
      }
    });
  }, [currentTheme]);

  const setTheme = (themeId: string) => {
    const theme = themes.find((t) => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
      localStorage.setItem("selectedTheme", themeId);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        availableThemes: themes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
