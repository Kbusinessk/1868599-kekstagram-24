import { isEscapeKey, openModal, closeModal } from '../util.js';

const body = document.querySelector('body');
const bigPicture = body.querySelector('.big-picture');
const buttonHide = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const commentsList = bigPicture.querySelector('.social__comments');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const closeModalButton = bigPicture.querySelector('#picture-cancel');
const COMMENT_IMG = {
  WIDTH: 35,
  HEIGHT: 35,
};

const fragmetForComments = document.createDocumentFragment();

const createComment = ({ avatar, message, name }) => {
  const commentOne = document.createElement('li');
  commentOne.classList.add('social__comment');

  const commentOneImg = document.createElement('img');
  commentOneImg.classList.add('social__picture');
  commentOneImg.src = avatar;
  commentOneImg.alt = name;
  commentOneImg.width = COMMENT_IMG.WIDTH;
  commentOneImg.height = COMMENT_IMG.HEIGHT;
  commentOne.appendChild(commentOneImg);

  const commentOneText = document.createElement('p');
  commentOneText.classList.add('social__text');
  commentOneText.textContent = message;
  commentOne.appendChild(commentOneText);

  return commentOne;
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal(bigPicture);
    document.removeEventListener('keydown', onPopupEscKeydown);
  }
};

const onBigPictureHide = () => {
  closeModal(bigPicture);
  closeModalButton.removeEventListener('click', onBigPictureHide);
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const showBigPicture = () => {
  openModal(bigPicture);
  document.addEventListener('keydown', onPopupEscKeydown);
  closeModalButton.addEventListener('click', onBigPictureHide);
};

const popupBigPicture = ({ url, description, likes, comments }) => {
  commentsList.innerHTML = '';
  buttonHide.addEventListener('click', onBigPictureHide);

  bigPictureImage.src = url;
  bigPictureLikesCount.textContent = likes;
  bigPictureDescription.textContent = description;

  commentsCount.classList.add('hidden');

  comments.forEach((comment) => fragmetForComments.appendChild(createComment(comment)));
  commentsList.append(fragmetForComments);

  showBigPicture();
};

export { popupBigPicture };
