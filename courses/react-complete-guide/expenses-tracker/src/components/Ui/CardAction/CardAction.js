import { Button } from '../Button/Button';

export const CardAction = ({
  children,
  onClick,
}) => {
  return (
    <Button color="accent" size="small" onClick={onClick}>
      {children}
    </Button>
  );
};
