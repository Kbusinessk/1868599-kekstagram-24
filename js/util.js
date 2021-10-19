// Функция для проверки максимальной длины строки

const checkTextLength = (text, maxLength) => text.length <= maxLength;

checkTextLength('Проверка длины введённого комментария', 140);

const isEscapeKey = (evt) => evt.key === 'Escape';

export { isEscapeKey };
