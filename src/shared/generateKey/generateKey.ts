import { DATA } from '../consts/consts';

/**
 * Функция генерации ключа для базы данных. Функция вынесена отдельно, потому что TypeScript не знает, что строка соответствует ключу в DATA. Тк TypeScript строго типизированный ЯП, он ожидает, что ключ будет строго определенным типом
 * @param index
 * @returns
 */
const generateDATAKey = (index: number) => {
  return `Item ${index + 1}` as keyof typeof DATA;
};

export default generateDATAKey;
