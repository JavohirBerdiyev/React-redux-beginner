import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

import { counterAction } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const inctementHandler = (amount) => {
    dispatch(counterAction.increment(amount));
  };
  const dectementHandler = () => {
    dispatch(counterAction.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={dectementHandler}>Decrement</button>
        <button onClick={() => inctementHandler(10)}>increment by 10</button>
        <button onClick={() => inctementHandler(1)}>increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
