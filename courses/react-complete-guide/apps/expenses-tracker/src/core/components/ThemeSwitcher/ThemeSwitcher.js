import classNames from 'classnames';

import { useDarkTheme } from '../../hooks';
import './ThemeSwitcher.css';

export const ThemeSwitcher = () => {
  const [isDarkTheme, toggleDarkTheme] = useDarkTheme();

  return (
    <button
      type="button"
      className={classNames({
        'theme-switcher': true,
        '--dark': isDarkTheme,
      })}
      onClick={() => toggleDarkTheme()}
    ></button>
  );
};
