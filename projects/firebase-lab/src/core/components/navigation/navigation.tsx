import { FC } from 'react';
import { Link } from 'react-router-dom';

import './navigation.scss';

export interface NavigationProps {
  user: any;
  onLogout: () => void;
}

export const Navigation: FC<NavigationProps> = ({ user, onLogout }) => {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shopping-list">Shopping List</Link></li>
          <li>
            {!!user
              ? <a onClick={onLogout}>Log out</a>
              : <Link to="/sign-in">Sign In</Link>
            }
          </li>
        </ul>
      </nav>
    </div>
  );
};
