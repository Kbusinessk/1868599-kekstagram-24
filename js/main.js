import { PHOTO_COUNT, createUsersPhoto } from './data.js';
import { getNewPicture } from './gallery/pictures.js';
import { popupBigPicture } from './gallery/big-pictures.js';
import './upload/upload-img.js';
import { setFormValidity } from './upload/validation.js';

const userPhotos = Array.from({ length: PHOTO_COUNT }, createUsersPhoto);

const pictureContainer = document.querySelector('.pictures');

const onPictureClick = (photo) => {
  popupBigPicture(photo);
};

userPhotos.forEach((photo) => pictureContainer.append(getNewPicture(photo, onPictureClick)));

setFormValidity();
