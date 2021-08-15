import { People } from './components';
import './App.scss';

const PEOPLE = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Charlotte', age: 30 },
  { somethingElse: true },
];

function App() {
  return (
    <div className="app">
      <h1>People</h1>
      <People people={PEOPLE} />
    </div>
  );
}

export default App;
