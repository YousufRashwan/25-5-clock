import Timer from "./features/timer/Timer";
import SessionLength from "./features/timer/SessionLength";
import BreakLength from "./features/timer/BreakLength";

const App = () => {
  return (
    <main>
      <h1 className="heading">25 + 5 Clock</h1>
      <Timer />
      <div className="length-control">
        <BreakLength />
        <SessionLength />
      </div>
    </main>
  );
};

export default App;
