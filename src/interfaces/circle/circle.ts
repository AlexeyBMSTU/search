/**
 * Состояние круга
 * @param activeIndex Активный индекс
 * @param rotation Поворот круга
 * @param isAnimationComplete Флаг отслеживания окончания анимации
 * @param currentIndex Текущий индекс вкладки
 */
interface CircleState {
  activeIndex: number;
  rotation: number;
  isAnimationComplete: boolean;
  currentIndex: string;
}
/**
 * Свойства круга
 */
interface CircleProps {
  circle: CircleState;
}
