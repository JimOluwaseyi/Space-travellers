import { configureStore } from "@reduxjs/toolkit";
import rocketReducer from "./rocket/rocketSlice.jsx";
import missionReducer from "./mission/missionSlice.jsx"

export const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission: missionReducer,

  },
});
