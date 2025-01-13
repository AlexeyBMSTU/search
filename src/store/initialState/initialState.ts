import compareToString from '@/shared/compareToString/compare';
import { DATA } from '@/shared/consts/consts';
import generateDATAKey from '@/shared/generateKey/generateKey';

/**
 * Индекс элемента в базе данных в качестве начального значения
 */
const initialIndex = 5;

/**
 * Начальное состояние круга
 */
const initialState: CircleState = {
  activeIndex: initialIndex,
  rotation: DATA[generateDATAKey(initialIndex)].ANGLE,
  isAnimationComplete: true,
  currentIndex: compareToString(initialIndex + 1),
};

/**
 * Начальное состояние интервала
 */
const initialIntervalState: IntervalState = {
  startInterval: DATA[generateDATAKey(initialIndex)].AGE_INTERVAL,
  endInterval: DATA[generateDATAKey(initialIndex)].AGE_INTERVAL,
};

export { initialIntervalState, initialState };
