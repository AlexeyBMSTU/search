import { configureStore } from '@reduxjs/toolkit';
import circleSlice, { dateIntervalReducer } from './reducers/reducers';

/**
 * Хранилище состояния
 */
const store = configureStore({
  reducer: {
    circle: circleSlice,
    dateInterval: dateIntervalReducer,
  },
});

export default store;
