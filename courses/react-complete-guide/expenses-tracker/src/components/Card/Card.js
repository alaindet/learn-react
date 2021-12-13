import './Card.css';

export const Card = ({ children, className, ...theRest }) => {
  return (
    <div className={`card ${className}`} {...theRest}>
      {children}
    </div>
  );
};
