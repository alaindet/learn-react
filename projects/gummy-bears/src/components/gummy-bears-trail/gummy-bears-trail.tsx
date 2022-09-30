import { GummyBear } from '../gummy-bear/gummy-bear';
import { GummyBearFlavor } from '../../types';
import './gummy-bears-trail.scss';

export const FLAVORS: GummyBearFlavor[] = [
  'lemon',
  'orange',
  'pineapple',
  'raspberry',
  'strawberry',
];

export interface GummyBearsTrailProps {
  itemWidth: string;
  selected: GummyBearFlavor | null;
  onSelect: (flavor: GummyBearFlavor) => void;
}

// TODO: Create custom form component
export function GummyBearsTrail({
  itemWidth = '42px',
  selected = null,
  onSelect,
}: GummyBearsTrailProps) {
  return (
    <ul className="gummy-bears-trail">
      {FLAVORS.map(flavor => (
        <li key={flavor} className="_item">
          <button
            type="button"
            className={`_button ${selected === flavor ? '-selected' : ''}`}
            onClick={() => onSelect(flavor)}
          >
            <GummyBear flavor={flavor} width={itemWidth} />
          </button>
        </li>  
      ))}
    </ul>
  );
}
