import { useState, useEffect } from 'react';

const useThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const mqListener = () => {
      setIsDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    };
  }, []);
  return isDarkTheme;
};

export default useThemeDetector;
