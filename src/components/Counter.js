import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const showCounter = useSelector(state => state.showCounter)

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 })
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  }

  const resetHandler = () => {
    dispatch({ type: 'reset', amount: 0 })
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle' })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* <div className={classes.value}>-- COUNTER VALUE --</div> */}
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button type='button' onClick={incrementHandler} >Increment</button>
        <button type='button' onClick={increaseHandler} >Increase by 5</button>
        <button type='button' onClick={decrementHandler} >Decrement</button>
        <button type='button' onClick={resetHandler} >Reset</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
