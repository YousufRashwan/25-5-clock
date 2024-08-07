import { useSelector, useDispatch } from "react-redux";
import { setBreakLength } from "./timerSlice";

const BreakLength = () => {
  const length = useSelector((state) => state.timer.breakLength);
  const dispatch = useDispatch();

  return (
    <div className="break">
      <h2 id="break-label" className="break-label">
        Break Length
      </h2>
      <div className="break-controls">
        <button
          id="break-increment"
          className="control-button"
          onClick={() => dispatch(setBreakLength(length + 1))}
        >
          +
        </button>
        <h2 id="break-length">{length}</h2>
        <button
          id="break-decrement"
          className="control-button"
          onClick={() => dispatch(setBreakLength(length - 1))}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default BreakLength;
