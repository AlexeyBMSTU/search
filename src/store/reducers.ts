import { ageIntervals } from '@/shared/consts/consts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CircleState {
  activeIndex: number;
  rotation: number;
  isAnimationComplete: boolean;
  currentIndex: string;
}

const initialState: CircleState = {
  activeIndex: 5,
  rotation: 0,
  isAnimationComplete: true,
  currentIndex: '06',
};

interface IntervalState {
  startInterval: { first: number; second: number };
  endInterval: { first: number; second: number };
}

const initialIntervalState: IntervalState = {
  startInterval: ageIntervals[5],
  endInterval: ageIntervals[5],
};

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
export default circleSlice.reducer; // Обратите внимание на .reducer

export const { setActiveStartInterval, setActiveEndInterval } =
  dateIntervalSlice.actions;
export const dateIntervalReducer = dateIntervalSlice.reducer; // Обратите внимание на .reducer
