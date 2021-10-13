import { generateUserPhotos } from './util.js';

const userPhotos = generateUserPhotos();
const pictureContainer = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('a');
const fragment = document.createDocumentFragment();

userPhotos.forEach((userPhoto) => {
  const element = template.cloneNode(true);
  element.children[0].src = userPhoto['url'];
  element.children[1].querySelector('.picture__likes').textContent = userPhoto['likes'];
  element.children[1].querySelector('.picture__comments').textContent =
    userPhoto['comments'].length;
  fragment.appendChild(element);
});

pictureContainer.appendChild(fragment);
