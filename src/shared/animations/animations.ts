import { durationRotate } from '../consts/consts';
import { gsap } from 'gsap';

const animateNumber = (selector: string, start: number, end: number) => {
  const counter: any = document.querySelector(selector);
  gsap.to(
    { value: start },
    {
      value: end,
      duration: durationRotate,
      onUpdate: function () {
        counter.innerText = Math.round(this.targets()[0].value);
      },
    },
  );
};

export default animateNumber;
