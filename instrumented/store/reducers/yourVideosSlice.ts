import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { YourVideos } from '../models/yourvVideos.model';

interface YourVideosState {
  yourVideos: YourVideos[];
}

const initialState: YourVideosState = {
  yourVideos: [],
};

export const yourVideosSlice = createSlice({
  name: 'yourVideos',
  initialState,
  reducers: {
    addVideo(state, action: PayloadAction<YourVideos>) {
      state.yourVideos = [...state.yourVideos, action.payload];
    },
  },
});

export default yourVideosSlice.reducer;
