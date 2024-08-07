import { useSelector, useDispatch } from "react-redux";
import { setBreakLength } from "./timerSlice";

const BreakLength = () => {
  const length = useSelector((state) => state.timer.breakLength);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 id="break-label">Break Length</h1>
      <h1 id="break-length">{length}</h1>
      <button
        id="break-increment"
        onClick={() => dispatch(setBreakLength(length + 1))}
      >
        Increase
      </button>
      <button
        id="break-decrement"
        onClick={() => dispatch(setBreakLength(length - 1))}
      >
        Decrease
      </button>
    </div>
  );
};

export default BreakLength;
