import { DURATION_ROTATE } from '../consts/consts';
import { gsap } from 'gsap';

/**
 * Анимация чисел
 * @param selector Селектор с числом
 * @param start Начальное число
 * @param end Конечное число
 */
const animateNumber = (selector: string, start: number, end: number) => {
  const counter: any = document.querySelector(selector);
  gsap.to(
    { value: start },
    {
      value: end,
      duration: DURATION_ROTATE,
      onUpdate: function () {
        counter.innerText = Math.round(this.targets()[0].value);
      },
    },
  );
};

/**
 * Анимация для объектов таких как:
 *
 * __исторические события__
 *
 * __заголовок темы__
 *
 * __линия, отделяющая заголовок от события__
 * @returns
 */
const animateObjects = () => {
  const informations = document.querySelectorAll('.event');
  const titleTheme = document.querySelector(`.theme`);
  const line = document.querySelector(`.line`);
  if (!informations || !titleTheme || !line) return;
  const objects = [informations, titleTheme, line];

  objects.forEach((object) => {
    gsap.fromTo(
      object,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: DURATION_ROTATE },
    );
  });
};
export { animateNumber, animateObjects };
