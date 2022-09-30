import { EDIT_ICON, REMOVE_ICON } from './icons';
import './gummy-bear-action.scss';

export interface GummyBearActionProps {
  icon: 'edit' | 'remove';
  onClick: () => void;
}

export function GummyBearAction({
  icon,
  onClick,
}: GummyBearActionProps) {

  let iconTemplate: JSX.Element;

  switch (icon) {
    case 'edit':
      iconTemplate = EDIT_ICON;
      break;
    case 'remove':
      iconTemplate = REMOVE_ICON;
      break;
    default:
      iconTemplate = <span></span>;
      break;
  }

  return (
    <button
      type="button"
      className="gummy-bear-action"
      onClick={onClick}
    >
      {iconTemplate}
    </button>
  );
}
