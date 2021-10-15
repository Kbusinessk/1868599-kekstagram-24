import { generateUserPhotos } from './util.js';

const userPhotos = generateUserPhotos();
const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

userPhotos.forEach(({ url, likes, comments }) => {
  const element = pictureTemplate.cloneNode(true);
  element.querySelector('.picture__img').src = url;
  element.querySelector('.picture__likes').textContent = likes;
  element.querySelector('.picture__comments').textContent = comments.length;
  fragment.appendChild(element);
});

pictureContainer.appendChild(fragment);
