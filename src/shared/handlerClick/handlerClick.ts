// import {
//   setActiveIndex,
//   setAnimationComplete,
//   setCurrentIndex,
//   setRotation,
// } from '@/store/reducers';
// import { useEffect, useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import compareToString from '../compareToString/compare';
// import { durationRotate, itemAngles } from '../consts/consts';
// import updateAngle from '../updateAngle/updateAngle';
// import { gsap } from 'gsap';

// export const hdl = () => {
//   const circleRef = useRef<HTMLDivElement | null>(null);
//   const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const activeIndex = useSelector((state: any) => state.circle.activeIndex);
//   const rotation = useSelector((state: any) => state.circle.rotation);
//   const isAnimationComplete = useSelector(
//     (state: any) => state.circle.isAnimationComplete,
//   );
//   const dispatch = useDispatch();
//   const [hoverIndex, setHoverIndex] = useState<number | null>(null);

//   const handleClickItem = (index: number, circle?: any, items?: any) => {
//     if (activeIndex === index || !isAnimationComplete) return;
//     dispatch(setAnimationComplete(false));
//     dispatch(setActiveIndex(index));

//     dispatch(setCurrentIndex(compareToString(index + 1)));
//     if (circle) circleRef.current = circle;
//     if (items) itemRefs.current = items;

//     const targetRotation = itemAngles[`Item ${index + 1}`];
//     Object.keys(itemAngles).forEach((key) => {
//       itemAngles[key] -= targetRotation;
//       updateAngle(key);
//     });

//     const newRotation = rotation + targetRotation;

//     // Анимация вращения всего круга
//     gsap.to(circleRef.current, {
//       rotation: newRotation,
//       duration: durationRotate,
//       onComplete: () => {
//         dispatch(setAnimationComplete(true));
//         console.log(circleRef.current);
//       },
//     });

//     itemRefs.current.forEach((item: any) => {
//       if (item) {
//         gsap.to(item, {
//           rotation: -newRotation,
//           duration: durationRotate,
//         });
//       }
//     });

//     dispatch(setRotation(newRotation));
//     setHoverIndex(null);

//     const [content, setContent] = useState(null); // состояние для контента
// const [isVisible, setIsVisible] = useState(false); // состояние для видимости объектов

// const animateObjects = () => {
//   const objects = document.querySelectorAll('.event'); // замените на ваш селектор
//   objects.forEach((object) => {
//     gsap.fromTo(object,
//       { y: 50, opacity: 0 }, // начальное состояние
//       { y: 0, opacity: 1, duration: 0.5 } // конечное состояние
//     );
//   });
// };

// // const handleContentChange = (newContent: any) => {
// //   setContent(newContent);
// //   setIsVisible(true); // показываем объекты
// //   animateObjects(); // запускаем анимацию
// // };

// // useEffect(() => {
// //   if (content) {
// //     animateObjects(); // анимация при изменении контента
// //   }
// // }, [content]);

//   };
//   return [
//     circleRef,
//     itemRefs,
//     activeIndex,
//     hoverIndex,
//     isAnimationComplete,
//     handleClickItem,
//     setHoverIndex,
//   ];
// };

// import {
//   setActiveIndex,
//   setAnimationComplete,
//   setCurrentIndex,
//   setRotation,
// } from '@/store/reducers';
// import { useEffect, useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import compareToString from '../compareToString/compare';
// import { durationRotate, itemAngles } from '../consts/consts';
// import updateAngle from '../updateAngle/updateAngle';
// import { gsap } from 'gsap';

// export const hdl = () => {
//   const circleRef = useRef<HTMLDivElement | null>(null);
//   const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const activeIndex = useSelector((state: any) => state.circle.activeIndex);
//   const rotation = useSelector((state: any) => state.circle.rotation);
//   const isAnimationComplete = useSelector(
//     (state: any) => state.circle.isAnimationComplete,
//   );
//   const dispatch = useDispatch();
//   const [hoverIndex, setHoverIndex] = useState<number | null>(null);
//   const [content, setContent] = useState(null); // состояние для контента
//   const [isVisible, setIsVisible] = useState(false); // состояние для видимости объектов

//   const animateObjects = () => {
//     const informations = document.querySelector('.information-section');
//     const titleTheme = document.querySelector(`.theme`);
//     const objects = [informations, titleTheme];

//     objects.forEach((object) => {
//       gsap.fromTo(object,
//         { y: 50, opacity: 0 }, // начальное состояние
//         { y: 0, opacity: 1, duration: 1,  },
//          // конечное состояние
//       );
//     });
//   };
//   animateObjects(); // запускаем анимацию

//   const handleClickItem = (index: number, circle?: any, items?: any) => {
//     if (activeIndex === index || !isAnimationComplete) return;
//     dispatch(setAnimationComplete(false));
//     dispatch(setActiveIndex(index));

//     dispatch(setCurrentIndex(compareToString(index + 1)));
//     if (circle) circleRef.current = circle;
//     if (items) itemRefs.current = items;

//     const targetRotation = itemAngles[`Item ${index + 1}`];
//     Object.keys(itemAngles).forEach((key) => {
//       itemAngles[key] -= targetRotation;
//       updateAngle(key);
//     });

//     const newRotation = rotation + targetRotation;

//     // Анимация вращения всего круга
//     gsap.to(circleRef.current, {
//       rotation: newRotation,
//       duration: durationRotate,
//       onComplete: () => {
//         dispatch(setAnimationComplete(true));
//         console.log(circleRef.current);
//       },
//     });

//     itemRefs.current.forEach((item: any) => {
//       if (item) {
//         gsap.to(item, {
//           rotation: -newRotation,
//           duration: durationRotate,
//         });
//       }
//     });

//     dispatch(setRotation(newRotation));
//     setHoverIndex(null);
//   };

//   return [
//     circleRef,
//     itemRefs,
//     activeIndex,
//     hoverIndex,
//     isAnimationComplete,
//     handleClickItem,
//     setHoverIndex,
//   ];
// };

import {
  setActiveEndInterval,
  setActiveIndex,
  setActiveStartInterval,
  setAnimationComplete,
  setCurrentIndex,
  setRotation,
} from '@/store/reducers';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import compareToString from '../compareToString/compare';
import { durationRotate, itemAngles } from '../consts/consts';
import updateAngle from '../updateAngle/updateAngle';
import { gsap } from 'gsap';
import { isMobile } from 'react-device-detect';
export const animateFirstNumber = (start: number, end: number) => {
  // const startInterval = useSelector((state:any) => state.dateInterval.setActiveStartInterval);
  // const endInterval = useSelector((state:any) => state.dateInterval.setActiveEndInterval);

  const counter: any = document.querySelector('.year-first');
  // const start = startInterval.first;
  // const end = endInterval.first;
  // // const start = 2010;
  // // const end = 1000;
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
export const animateSecNumber = (start: number, end: number) => {
  const counter: any = document.querySelector('.year-second');
  // const startInterval = useSelector((state:any) => state.dateInterval.setActiveStartInterval);
  // const endInterval = useSelector((state:any) => state.dateInterval.setActiveEndInterval);

  // const start = startInterval.second;
  // const end = endInterval.sec;
  // const start = 2010;
  // const end = 1000;
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

export const hdl = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndex = useSelector((state: any) => state.circle.activeIndex);
  const rotation = useSelector((state: any) => state.circle.rotation);
  const isAnimationComplete = useSelector(
    (state: any) => state.circle.isAnimationComplete,
  );
  const dispatch = useDispatch();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false); // состояние для видимости объектов

  const startInterval = useSelector(
    (state: any) => state.dateInterval.setActiveStartInterval,
  );
  const endInterval = useSelector(
    (state: any) => state.dateInterval.setActiveEndInterval,
  );

  const animateObjects = () => {
    const informations = document.querySelectorAll('.event');
    const titleTheme = document.querySelector(`.theme`);
    const line = document.querySelector(`.line`);
    if (!informations || !titleTheme || !line) return;
    const objects = [informations, titleTheme, line];

    objects.forEach((object) => {
      gsap.fromTo(
        object,
        { y: 50, opacity: 0 }, // начальное состояние
        { y: 0, opacity: 1, duration: durationRotate }, // конечное состояние
      );
    });
  };

  useEffect(() => {
    if (isVisible && isMobile) {
      animateObjects(); // запускаем анимацию при изменении видимости
    }
  }, [isVisible]);

  const handleClickItem = (
    index: number,
    intervals?: any,
    circle?: any,
    items?: any,
  ) => {
    if (activeIndex === index || !isAnimationComplete) return;
    dispatch(setAnimationComplete(false));
    dispatch(setActiveIndex(index));
    if (intervals) {
      dispatch(setActiveStartInterval(intervals['start']));
      dispatch(setActiveEndInterval(intervals['end']));
    }

    dispatch(setCurrentIndex(compareToString(index + 1)));
    if (circle) circleRef.current = circle;
    if (items) itemRefs.current = items;

    const targetRotation = itemAngles[`Item ${index + 1}`];
    Object.keys(itemAngles).forEach((key) => {
      itemAngles[key] -= targetRotation;
      updateAngle(key);
    });

    const newRotation = rotation + targetRotation;
    // Анимация вращения всего круга
    gsap.to(circleRef.current, {
      rotation: newRotation,
      duration: durationRotate,
      onComplete: () => {
        dispatch(setAnimationComplete(true));
        console.log(circleRef.current);
        setIsVisible(false);
      },
    });

    itemRefs.current.forEach((item: any) => {
      if (item) {
        gsap.to(item, {
          rotation: -newRotation,
          duration: durationRotate,
        });
      }
    });

    dispatch(setRotation(newRotation));
    setHoverIndex(null);
    setIsVisible(true); // показываем объекты, чтобы анимация сработала
  };

  return [
    circleRef,
    itemRefs,
    activeIndex,
    hoverIndex,
    isAnimationComplete,
    handleClickItem,
    setHoverIndex,
  ];
};
