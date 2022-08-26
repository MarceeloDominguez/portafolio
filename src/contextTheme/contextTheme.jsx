import { createContext, useContext, useEffect, useState } from "react";

const themeContext = createContext();

export default function ContextTheme({ children }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(
      theme === "dark"
        ? (localStorage.theme = "light")
        : (localStorage.theme = "dark")
    );
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, handleThemeSwitch }}>
      {children}
    </themeContext.Provider>
  );
}

export const useContextTheme = () => {
  const { ...props } = useContext(themeContext);

  return { ...props };
};
