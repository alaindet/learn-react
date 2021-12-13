import './Button.css';

// color: 'primary' | 'accent'
// size: 'regular' | 'large'
export const Button = ({
  color,
  size,
  children,
  ...theRest
}) => {

  color = color ?? 'primary';
  size = size ?? 'regular';

  const cssClasses = [
    `--color-${color}`,
    `--size-${size}`,
  ].join(' ');

  return (
    <button className={cssClasses} {...theRest}>
      {children}
    </button>
  );
};
