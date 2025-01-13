import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  initialIntervalState,
  initialState,
} from '@/store/initialState/initialState';

const circleSlice = createSlice({
  name: 'circle',
  initialState,
  reducers: {
    setActiveIndex(state, action: PayloadAction<number>) {
      state.activeIndex = action.payload;
    },
    setRotation(state, action: PayloadAction<number>) {
      state.rotation = action.payload;
    },
    setAnimationComplete(state, action: PayloadAction<boolean>) {
      state.isAnimationComplete = action.payload;
    },
    setCurrentIndex(state, action: PayloadAction<string>) {
      state.currentIndex = action.payload;
    },
  },
});

const dateIntervalSlice = createSlice({
  name: 'interval',
  initialState: initialIntervalState,
  reducers: {
    setActiveStartInterval(state, action: PayloadAction<any>) {
      state.startInterval = action.payload;
    },
    setActiveEndInterval(state, action: PayloadAction<any>) {
      state.endInterval = action.payload;
    },
  },
});

export const {
  setCurrentIndex,
  setActiveIndex,
  setRotation,
  setAnimationComplete,
} = circleSlice.actions;
export default circleSlice.reducer;

export const { setActiveStartInterval, setActiveEndInterval } =
  dateIntervalSlice.actions;
export const dateIntervalReducer = dateIntervalSlice.reducer;
