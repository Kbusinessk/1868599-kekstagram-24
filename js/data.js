import {
  getRandomInteger,
  getRandomArrayElement,
  // eslint-disable-next-line comma-dangle
  getRandomId,
} from './supporter/random.js';

const PHOTO_COUNT = 25;

const PHOTO_DESCRIPTIONS = [
  'Ваши первые 10 000 фотографий – Ваши худшие',
  'Мир просто не укладывается в формат 35-мм камеры',
  'Послушайте, я не интеллигент - я просто фотографирую',
  'Вы не фотографируете, вы создаете',
  '«Выдающаяся фотография – это глубина чувств, а не глубина резкости',
  'Хороший снимок останавливает ускользающее мгновение',
];

const COMMENTS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const AUTHORS_NAMES = [
  'Анри Картье-Брессон',
  'Юджин Смит',
  'Хельмут Ньютон',
  'Ансель Адамс',
  'Питер Адамс',
  'Юдоре Уэлти',
];

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
    id: count,
    url: `photos/${getRandomInteger(1, PHOTO_COUNT)}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({ length: getRandomInteger(0, 10) }, createComment),
  };
};

export { PHOTO_COUNT, createUsersPhoto };
