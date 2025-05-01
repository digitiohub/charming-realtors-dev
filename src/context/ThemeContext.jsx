import React, { createContext, useContext, useState } from "react";

// Define our theme presets
export const themes = {
  blue: {
    primary: "#3B82F6",
    primaryDark: "#1D4ED8",
    primaryLight: "#60A5FA",
    secondary: "#4F46E5",
    secondaryDark: "#4338CA",
    secondaryLight: "#818CF8",
    accent: "#059669",
    accentDark: "#047857",
    accentLight: "#34D399",
    background: "from-gray-900 to-gray-800",
    textLight: "text-gray-100",
    textDark: "text-gray-800",
  },
  terracotta: {
    primary: "#b54426",
    primaryDark: "#8f3517",
    primaryLight: "#d25a3a",
    secondary: "#e87654",
    secondaryDark: "#c05e40",
    secondaryLight: "#f49476",
    accent: "#2d7c5e",
    accentDark: "#236349",
    accentLight: "#3ca379",
    background: "from-[#8f3517] to-[#5c2211]",
    textLight: "text-[#f8ebe7]",
    textDark: "text-[#3d1c14]",
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("blue");

  const theme = themes[currentTheme];

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === "blue" ? "terracotta" : "blue"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
