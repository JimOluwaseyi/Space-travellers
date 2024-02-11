import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  rocket: [],
  status: null,
};

export const fetchRocketData = createAsyncThunk(
  "users/fetchRocketData",
  async () => {
    const response = await axios.get("https://api.spacexdata.com/v4/rockets");
    return response.data;
  }
);

export const rocketSlice = createSlice({
  name: "rocket",
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const id = action.payload;
      const newState = state.rocket.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: true };
      });
      return {...state,  rocket: newState};

    },

    cancelRocket: (state, action) => {
      const id = action.payload;
      const newState = state.rocket.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: false };
      });
      return {...state,  rocket: newState};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketData.pending, (state) => {
        state.status = true;
      })
      .addCase(fetchRocketData.fulfilled, (state, action) => {
        state.status = false;
        const newRocket = [];
        const getRockets = action.payload;
        getRockets.forEach((rocket) => {
          newRocket.push({
            id: rocket.id,
            name: rocket.name,
            description: rocket.description,
            image: rocket.flickr_images[0],
          });
        });
        state.rocket = newRocket;
      })
      .addCase(fetchRocketData.rejected, (state) => {
        state.status = false;
      });
  },
});

export default rocketSlice.reducer;
export const { reserveRocket, cancelRocket } = rocketSlice.actions;
