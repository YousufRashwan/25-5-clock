import { useSelector, useDispatch } from "react-redux";
import { setSessionLength } from "./timerSlice";

const SessionLength = () => {
  const length = useSelector((state) => state.timer.sessionLength);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 id="session-label">Session Length</h1>
      <h1 id="session-length">{length}</h1>
      <button
        id="session-increment"
        onClick={() => dispatch(setSessionLength(length + 1))}
      >
        Increase
      </button>
      <button
        id="session-decrement"
        onClick={() => dispatch(setSessionLength(length - 1))}
      >
        Decrease
      </button>
    </div>
  );
};

export default SessionLength;
