import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset} from "../slices/counterSlice.js";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div> 
        <button onClick={() => dispatch(increment())}> + </button>

        <div>{count}</div>

        <button onClick={() => dispatch(decrement())}> - </button>

        <button onClick={() => dispatch(reset())}> Reset </button>
    </div>
  )
}

export default Counter