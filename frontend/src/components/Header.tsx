import { useEffect, useState } from "react";
import { Moon, Sun } from "phosphor-react";

export function Header() {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setDarkMode] = useState(getCurrentTheme);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.documentElement.classList.add(isDarkMode ? "dark" : "light");
    document.documentElement.classList.remove(!isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <header>
      <div>
        <h2>Cardápio online</h2>
        <button
          aria-label="Toggle dark mode"
          className="toggle-theme-button"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Sun className="icon" /> : <Moon className="icon" />}
        </button>
      </div>
    </header>
  );
}
