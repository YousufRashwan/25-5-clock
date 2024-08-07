import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle, setMinutes, setSeconds, reset } from "./timerSlice";

const Timer = () => {
  const { active, minutes, seconds, isBreak } = useSelector(
    (state) => state.timer
  );

  const dispatch = useDispatch();

  const audioRef = useRef();

  // Seconds Logic
  useEffect(() => {
    if (!active) return;
    const secondsInterval = setInterval(() => {
      dispatch(setSeconds());
    }, 100);
    return () => {
      clearInterval(secondsInterval);
    };
  }, [active]);

  // Minutes Logic
  useEffect(() => {
    if (!active) return;
    if (!minutes && !seconds) {
      audioRef.current.play();
    }
    if (seconds === 59) {
      dispatch(setMinutes());
    }
  }, [seconds]);

  const handleReset = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    dispatch(reset());
  };

  return (
    <div>
      <h1 id="timer-label">{!isBreak ? "Session" : "Break"}</h1>
      <h1 id="time-left">
        {`${minutes >= 10 ? minutes : `0${minutes}`}`}:
        {`${seconds >= 10 ? seconds : `0${seconds}`}`}
      </h1>
      <button id="start_stop" onClick={() => dispatch(toggle())}>
        {active ? "Stop" : "Start"}
      </button>
      <button id="reset" onClick={() => handleReset()}>
        Reset
      </button>
      <audio id="beep" ref={audioRef}>
        <source
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          type="audio/mpeg"
        />
        <source
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          type="audio/ogg"
        />
      </audio>
    </div>
  );
};

export default Timer;
