/**
 * Приведение индекса в строку, необходимую для верстки
 * @param index Индекс
 * @returns
 */
const compareToString = (index: number) => {
  return `0` + index.toString();
};

export default compareToString;
