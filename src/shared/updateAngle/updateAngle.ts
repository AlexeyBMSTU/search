import { DATA } from '../consts/consts';

/**
 * Функция обновления угла для элементов на кругу
 * @param key Ключ для доступа к базе данных
 */
const updateAngle = (key: keyof typeof DATA) => {
  if (DATA[key].ANGLE < 0) {
    DATA[key].ANGLE += 360;
  }
};

export default updateAngle;
