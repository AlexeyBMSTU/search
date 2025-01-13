/**
 * Свойства аэлемента на круге
 * @param index Индекс элемента
 * @param isActive Флаг проверки активности элемента
 * @param onClick Колбек на событие клика
 */
interface ItemProps {
  index: number;
  isActive: boolean;
  onClick: (index: number) => void;
}
