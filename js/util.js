import { PHOTO_COUNT, PHOTOS_DESCRIPTIONS, COMMENTS_MESSAGES, AUTHORS_NAMES } from './data.js';

// Получение случайного числа в заданном диапазоне
const getRandomInteger = (min, max) => {
  if (min < 0 || min >= max) {
    throw new Error('Неверно указано начало диапазона');
  }

  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
};

// Функция для проверки максимальной длины строки

const checkTextLength = (text, maxLength) => text.length <= maxLength;
checkTextLength('Проверка длины введённого комментария', 140);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getArrayUniqueRandomInteger = (max) => {
  const usedNumbers = [max];
  let randomNumber;
  for (randomNumber = 0; randomNumber < max; randomNumber++) {
    randomNumber = Math.round(Math.random() * max);
  }

  const uniqueNumber = () => {
    randomNumber = Math.round(Math.random() * max);
    usedNumbers.splice(randomNumber, 0, max--);
    max && uniqueNumber();
  };

  uniqueNumber();

  return usedNumbers;
};

const randomIds = getArrayUniqueRandomInteger(PHOTO_COUNT);

const getRandomId = () => parseInt(Date.now() * Math.random(), 10);

const createComment = () => {
  const randomAuthorsNamesIndex = getRandomInteger(0, AUTHORS_NAMES.length - 1);

  return {
    id: getRandomId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENTS_MESSAGES),
    name: AUTHORS_NAMES[randomAuthorsNamesIndex],
  };
};

let count = 0;
const createUsersPhoto = () => {
  count++;
  return {
    id: randomIds[count],
    url: `photos/${getRandomInteger(1, PHOTO_COUNT)}.jpg`,
    discription: getRandomArrayElement(PHOTOS_DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({ length: getRandomInteger(0, 10) }, createComment),
  };
};
Array.from({ length: PHOTO_COUNT }, createUsersPhoto);
