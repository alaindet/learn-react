import { useAppDispatch, useAppSelector } from 'src/core/store';
import { increment } from './store';

export const About = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(state => state.about.counter);

  const onIncrement = () => dispatch(increment());

  return (
    <div className="about">
      About
      <p>Counter: {counter}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};
