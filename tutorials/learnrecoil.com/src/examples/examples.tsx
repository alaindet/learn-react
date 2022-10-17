import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import { Atoms } from './atoms/atoms';
import { Selectors } from './selectors/selectors';
import { Async } from './data-fetching/async';
import { AtomEffects } from './atom-effects/atom-effects';
import './examples.css';

export function ExamplesList({ url }: { url: string }) {
  return (
    <div className="examples-list">
      <h1>Examples</h1>
      <ul>
        <li><Link to={`${url}/async`}>Async</Link></li>
        <li><Link to={`${url}/atom-effects`}>Atom Effects</Link></li>
        <li><Link to={`${url}/atoms`}>Atoms</Link></li>
        <li><Link to={`${url}/selectors`}>Selectors</Link></li>
      </ul>
    </div>
  );
}

export function ExamplePages() {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <ExamplesList url={url} />
        </Route>

        <Route path={`${path}/async`}>
          <Async />
        </Route>

        <Route path={`${path}/atom-effects`}>
          <AtomEffects />
        </Route>

        <Route path={`${path}/atoms`}>
          <Atoms />
        </Route>

        <Route path={`${path}/selectors`}>
          <Selectors />
        </Route>
      </Switch>
    </div>
  );
}
