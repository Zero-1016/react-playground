import React, { useCallback, useState } from "react";
import MainContent from "./MainContent";
import ThemeContext from "./ThemeContext";

export default function DarkOrLight() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = useCallback(() => {
    if (theme == "light") {
      setTheme("dark");
    } else if (theme == "dark") {
      setTheme("light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainContent />
    </ThemeContext.Provider>
  );
}
