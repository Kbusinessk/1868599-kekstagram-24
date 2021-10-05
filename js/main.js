// https://devdocs.io/javascript/global_objects/math/random

const PHOTOS_OBJECTS = 25;

const PHOTOS_DESCRIPTIONS = [
  'Ваши первые 10 000 фотографий – Ваши худшие',
  'Мир просто не укладывается в формат 35-мм камеры',
  'Послушайте, я не интеллигент - я просто фотографирую',
  'Вы не фотографируете, вы создаете',
  '«Выдающаяся фотография – это глубина чувств, а не глубина резкости',
  'Хороший снимок останавливает ускользающее мгновение',
];

const COMMENTS_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const AUTHOR_NAMES = [
  'Анри Картье-Брессон',
  'Юджин Смит',
  'Хельмут Ньютон',
  'Ансель Адамс',
  'Питер Адамс',
  'Юдоре Уэлти',
];

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

// Получение случайного элемента из массива  (элеменеты не повторяются)
const getRandomArrayElement = elements => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

function getArreyUniqueRandomInteger(max) {
  let usedNumbers = [max--];
  !(function f() {
    let i = Math.round(Math.random() * usedNumbers.length);
    usedNumbers.splice(i, 0, max--);
    max && f();
  })();

  return usedNumbers;
}

const RANDOM_ID = getArreyUniqueRandomInteger(PHOTOS_OBJECTS);

const getRandomId = () => parseInt(Date.now() * Math.random());
const createComments = () => {
  const randomAuthorsNamesIndex = getRandomInteger(0, AUTHOR_NAMES.length - 1);

  return {
    id: getRandomId(),
    avatar: 'img/avatar-' + getRandomInteger(1, 6) + '.svg',
    message: getRandomArrayElement(COMMENTS_TEXT),
    name: AUTHOR_NAMES[randomAuthorsNamesIndex],
  };
};

let cn = 0;
const createUsersPhoto = () => {
  cn++;
  return {
    id: RANDOM_ID[cn],
    url: 'photos/' + getRandomInteger(1, PHOTOS_OBJECTS) + '.jpg',
    discription: getRandomArrayElement(PHOTOS_DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({ length: getRandomInteger(0, 10) }, createComments),
  };
};
const similarUsersPhotos = Array.from({ length: PHOTOS_OBJECTS }, createUsersPhoto);
console.log(similarUsersPhotos);
