import { useDarkTheme } from '../../hooks';
import './ThemeSwitcher.css';

export const ThemeSwitcher = () => {
  const [isDarkTheme, toggleDarkTheme] = useDarkTheme();

  return (
    <button
      type="button"
      className="theme-switcher"
      onClick={() => toggleDarkTheme()}
    >
      {isDarkTheme ? 'Dark' : 'Light'}
    </button>
  );
};
