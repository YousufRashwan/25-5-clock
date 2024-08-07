import { useSelector, useDispatch } from "react-redux";
import { setSessionLength } from "./timerSlice";

const SessionLength = () => {
  const length = useSelector((state) => state.timer.sessionLength);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 id="session-label" className="session-label">
        Session Length
      </h2>

      <div className="session-controls">
        <button
          id="session-increment"
          className="control-button"
          onClick={() => dispatch(setSessionLength(length + 1))}
        >
          +
        </button>
        <h2 id="session-length">{length}</h2>
        <button
          id="session-decrement"
          className="control-button"
          onClick={() => dispatch(setSessionLength(length - 1))}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default SessionLength;
