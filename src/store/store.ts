import { configureStore } from '@reduxjs/toolkit';
import circleSlice from './reducers';

const store = configureStore({
  reducer: {
    circle: circleSlice,
  },
});

export default store;
