import Timer from "./features/timer/Timer";
import SessionLength from "./features/timer/SessionLength";
import BreakLength from "./features/timer/BreakLength";

const App = () => {
  return (
    <div>
      <h1>25 + 5 Clock</h1>
      <BreakLength />
      <SessionLength />
      <Timer />
    </div>
  );
};

export default App;
