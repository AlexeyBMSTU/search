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

export const {
  setCurrentIndex,
  setActiveIndex,
  setRotation,
  setAnimationComplete,
} = circleSlice.actions;
export default circleSlice.reducer; // Обратите внимание на .reducer
