import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';
const STORAGE_VALUE = {
  DARK: 'dark',
  LIGHT: 'light',
};

export const useDarkTheme = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const enableDarkTheme = () => {
    document.documentElement.classList.add('dark');
    setIsDarkTheme(true);
    localStorage.setItem(STORAGE_KEY, STORAGE_VALUE.DARK);
  };

  const disableDarkTheme = () => {
    document.documentElement.classList.remove('dark');
    setIsDarkTheme(false);
    localStorage.setItem(STORAGE_KEY, STORAGE_VALUE.LIGHT);
  };

  const toggleDarkTheme = useCallback((forced = null) => {
    if (forced !== null) {
      return forced
        ? enableDarkTheme()
        : disableDarkTheme();
    }

    isDarkTheme
      ? disableDarkTheme()
      : enableDarkTheme();
  }, [isDarkTheme]);

  useEffect(() => {
    const isDark = localStorage.getItem(STORAGE_KEY) === STORAGE_VALUE.DARK;
    toggleDarkTheme(isDark);
  }, [toggleDarkTheme]);

  return [isDarkTheme, toggleDarkTheme];
};
