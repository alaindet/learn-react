import { Card } from '../Card/Card';
import { CardAction } from '../CardAction/CardAction';
import './CardWithActions.css';

export const CardWithActions = ({
  actions,
  onActionClick,
  children,
  ...theRest
}) => {
  return (
    <div className="card-with-actions">
      <Card {...theRest}>{children}</Card>
      <div className="card-with-actions__actions">
        {actions.map((action, index) => {
          const { label, ...theRest } = action;
          return (
            <CardAction
              key={index}
              onClick={() => onActionClick(action.name)}
              {...theRest}
            >
              {label}
            </CardAction>
          );
        })}
      </div>
    </div>
  );
};
