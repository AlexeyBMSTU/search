import { DATA } from '@/shared/consts/consts';
import generateDATAKey from '@/shared/generateKey/generateKey';

const initialState: CircleState = {
  activeIndex: 5,
  rotation: 0,
  isAnimationComplete: true,
  currentIndex: '06',
};

const initialIntervalState: IntervalState = {
  startInterval: DATA[generateDATAKey(5)].AGE_INTERVAL,
  endInterval: DATA[generateDATAKey(5)].AGE_INTERVAL,
};

export { initialIntervalState, initialState };
