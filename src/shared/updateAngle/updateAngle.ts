import { DATA } from '../consts/consts';

const updateAngle = (key: keyof typeof DATA) => {
  if (DATA[key].ANGLE < 0) {
    DATA[key].ANGLE += 360;
  }
};

export default updateAngle;
