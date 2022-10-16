import { ReactNode } from 'react';
import { atom, useRecoilState } from 'recoil';

import './basic-atom.css';

const darkModeState = atom({ key: 'darkMode', default: false });

function DarkModeSwitch({
  isDarkMode = false,
  className = '',
  onToggleMode,
}: {
  isDarkMode: boolean;
  className: string;
  onToggleMode: () => void;
}) {

  return (
    <div className={className}>
      <input
        id="dark-mode"
        type="checkbox"
        checked={isDarkMode}
        onChange={() => onToggleMode()}
      />
      <label htmlFor="dark-mode">Dark mode?</label>
    </div>
  );
}

function DummyParagraph({
  isDarkMode = false,
  className = '',
  children,
}: {
  isDarkMode: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <p className={className}>
      {children}
    </p>
  );
}

export function BasicAtomExample() {

  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);

  const cssDarkMode = isDarkMode ? '-dark-mode' : '';

  return (
    <div className="basic-atom-example">

      <h2>Basic Atom</h2>

      <DarkModeSwitch
        isDarkMode={isDarkMode}
        onToggleMode={() => setIsDarkMode(is => !is)}
        className={`_switch ${cssDarkMode}`}
      />

      <DummyParagraph
        isDarkMode={isDarkMode}
        className={`_paragraph ${cssDarkMode}`}
      >
        Amet nostrud consectetur magna dolor aliquip ad exercitation ex irure id labore proident amet. Dolor cupidatat eu adipisicing ad aliqua sit culpa. Magna irure officia dolore sit aliqua dolor quis duis excepteur enim reprehenderit nisi proident commodo. Aliqua aliquip ut excepteur non. Cillum est quis reprehenderit consequat.
      </DummyParagraph>
    </div>
  );
}
