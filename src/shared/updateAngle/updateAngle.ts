import { itemAngles } from '../consts/consts';

const updateAngle = (key: string) => {
  if (itemAngles[key] < 0) {
    itemAngles[key] += 360;
  }
};

export default updateAngle;
