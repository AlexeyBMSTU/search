import { DATA } from '../consts/consts';

const generateDATAKey = (index: number) => {
  return `Item ${index + 1}` as keyof typeof DATA;
};

export default generateDATAKey;
