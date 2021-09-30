// https://devdocs.io/javascript/global_objects/math/random

const getRandomInteger = (min, max) => {
  if (min < 0 || min >= max) {
    throw new Error('Неверно указано начало диапазона');
  }

  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
};

getRandomInteger(0, 140);

const checkTextLength = (text, maxLength) => text.length <= maxLength;

checkTextLength('Проверка длины введённого комментария', 140);
