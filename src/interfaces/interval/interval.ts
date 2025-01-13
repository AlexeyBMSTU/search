/**
 * Состояние интервала для двух чисел: первый и второй год
 * @param startInterval Начальный интервал
 * @param endInterval Конечный интервал
 */
interface IntervalState {
  startInterval: { FIRST: number; SECOND: number };
  endInterval: { FIRST: number; SECOND: number };
}
