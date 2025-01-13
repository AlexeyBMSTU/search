interface CircleState {
  activeIndex: number;
  rotation: number;
  isAnimationComplete: boolean;
  currentIndex: string;
}
interface CircleProps {
  circle: CircleState;
}
