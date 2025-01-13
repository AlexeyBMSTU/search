import { configureStore } from '@reduxjs/toolkit';
import circleSlice, { dateIntervalReducer } from './reducers/reducers';

const store = configureStore({
  reducer: {
    circle: circleSlice,
    dateInterval: dateIntervalReducer,
  },
});

export default store;
