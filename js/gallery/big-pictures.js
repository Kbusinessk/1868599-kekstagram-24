import { isEscapeKey, openModal, closeModal } from '../supporter/util.js';

const CommentImage = {
  WIDTH: 35,
  HEIGHT: 35,
};

const body = document.querySelector('body');
const bigPicture = body.querySelector('.big-picture');
const buttonHide = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const commentsList = bigPicture.querySelector('.social__comments');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const modalButton = bigPicture.querySelector('#picture-cancel');

const createComment = ({ avatar, message, name }) => {
  const commentOne = document.createElement('li');
  commentOne.classList.add('social__comment');

  const commentOneImg = document.createElement('img');
  commentOneImg.classList.add('social__picture');
  commentOneImg.src = avatar;
  commentOneImg.alt = name;
  commentOneImg.width = CommentImage.WIDTH;
  commentOneImg.height = CommentImage.HEIGHT;
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

const onBigPictureClick = () => {
  closeModal(bigPicture);
  modalButton.removeEventListener('click', onBigPictureClick);
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const showBigPicture = () => {
  openModal(bigPicture);
  document.addEventListener('keydown', onPopupEscKeydown);
  modalButton.addEventListener('click', onBigPictureClick);
};

const popupBigPicture = ({ url, description, likes, comments }) => {
  commentsList.innerHTML = '';
  buttonHide.addEventListener('click', onBigPictureClick);

  bigPictureImage.src = url;
  bigPictureLikesCount.textContent = likes;
  bigPictureDescription.textContent = description;

  commentsCount.classList.add('hidden');

  comments.forEach((comment) => commentsList.append(createComment(comment)));

  showBigPicture();
};

export { popupBigPicture };
