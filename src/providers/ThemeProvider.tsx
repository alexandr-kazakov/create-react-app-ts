import { createContext, useContext, useState, useEffect } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.LIGHT,
  toggleTheme: () => {},
});

interface Props {
    children: React.ReactNode;
}

export const useTheme = () => useContext(ThemeContext);

const defaultTheme = localStorage.getItem('theme') === Theme.DARK ? Theme.DARK : Theme.LIGHT;

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme)
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};



