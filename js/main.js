import { PHOTO_COUNT, createUsersPhoto } from './data.js';

const userPhotos = Array.from({ length: PHOTO_COUNT }, createUsersPhoto);
import { pictureContainer, getNewPicture } from './render_pictures/pictures.js';

import { popupBigPicture } from './render_pictures/big-pictures.js';

const fragment = document.createDocumentFragment();

userPhotos.forEach((photo) => fragment.appendChild(getNewPicture(photo)));
pictureContainer.append(fragment);

const picLink = pictureContainer.querySelectorAll('.picture');

picLink.forEach((picture) => {
  picture.addEventListener('click', (evt) => {
    popupBigPicture(userPhotos[evt.target.dataset.id - 1]);
  });
});
