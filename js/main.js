import { PHOTO_COUNT, createUsersPhoto } from './data.js';

const fragment = document.createDocumentFragment();

const userPhotos = Array.from({ length: PHOTO_COUNT }, createUsersPhoto);
import { getNewPicture } from './render_pictures/pictures.js';

import { popupBigPicture } from './render_pictures/big-pictures.js';

const pictureContainer = document.querySelector('.pictures');

const onPictureClick = (photo) => {
  popupBigPicture(photo);
};

userPhotos.forEach((photo) => fragment.appendChild(getNewPicture(photo, onPictureClick)));
pictureContainer.append(fragment);
