import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  mission: [],
  status: null,
};

export const fetchMissionData = createAsyncThunk(
  "users/fetchMissonData",
  async () => {
    const response = await axios.get("https://api.spacexdata.com/v3/missions");
    return response.data;
  }
);

export const missionSlice = createSlice({
  name: "mission",
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const id = action.payload;
      const newState = state.mission.map((mission) => {
        if (mission.mission_id !== id) return mission;

        return { ...mission, member: true };
      });

      return { ...state, mission: newState };
    },
    cancelMission: (state, action) => {
      const id = action.payload;
      const newState = state.mission.map((mission) => {
        if (mission.mission_id !== id) return mission;

        return { ...mission, member: false };
      });

      return { ...state, mission: newState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissionData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMissionData.fulfilled, (state, action) => {
        state.status = true;
        state.mission = action.payload;
      })
      .addCase(fetchMissionData.rejected, (state) => {
        state.status = false;
      });
  },
});
export default missionSlice.reducer;
export const { joinMission, cancelMission } = missionSlice.actions;
