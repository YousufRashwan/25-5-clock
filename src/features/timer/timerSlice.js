// "homepage": "https://yousufrashwan.github.io/25-5-clock",
// "predeploy": "npm run build",
//     "deploy": "gh-pages -d dist",

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
  isBreak: false,
  minutes: 25,
  seconds: 0,
  sessionLength: 25,
  breakLength: 5,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    reset: () => initialState,
    toggle: (state) => ({ ...state, active: !state.active }),
    setMinutes: (state) => {
      const { minutes, isBreak, sessionLength, breakLength } = state;
      if (!minutes) {
        state.isBreak = !isBreak;
        state.minutes = isBreak ? sessionLength : breakLength;
        state.seconds = 0;
      } else {
        state.minutes--;
      }
    },
    setSeconds: (state) => {
      if (!state.seconds) {
        state.seconds = 59;
      } else {
        state.seconds--;
      }
    },
    setSessionLength: (state, action) => {
      const { payload: length } = action;
      if (!state.active && length <= 60 && length >= 1) {
        state.sessionLength = length;
        if (!state.isBreak) {
          state.seconds = 0;
          state.minutes = length;
        }
      }
    },
    setBreakLength: (state, action) => {
      const { payload: length } = action;
      if (!state.active && length <= 60 && length >= 1) {
        state.breakLength = length;
        if (state.isBreak) {
          state.seconds = 0;
          state.minutes = length;
        }
      }
    },
  },
});

export const {
  setMinutes,
  setSeconds,
  toggle,
  reset,
  setSessionLength,
  setBreakLength,
} = timerSlice.actions;

export default timerSlice.reducer;
