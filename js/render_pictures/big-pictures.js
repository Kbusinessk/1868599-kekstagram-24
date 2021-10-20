import { isEscapeKey } from '../util.js';

const body = document.querySelector('body');
const bigPicture = body.querySelector('.big-picture');
const onButtonHide = bigPicture.querySelector('.big-picture__cancel');

const createComment = ({ avatar, message, name }) => {
  const commentOne = document.createElement('li');
  commentOne.classList.add('social__comment');

  const commentOneImg = document.createElement('img');
  commentOneImg.classList.add('social__picture');
  commentOneImg.src = avatar;
  commentOneImg.alt = name;
  commentOneImg.WIDTH = 35;
  commentOneImg.HEIGHT = 35;
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
    // eslint-disable-next-line no-use-before-define
    hideBigPicture();
  }
};

const showBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const popupBigPicture = ({ url, description, likes, comments }) => {
  onButtonHide.addEventListener('click', hideBigPicture);

  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;

  const commentsList = bigPicture.querySelector('.social__comments');
  commentsList.innerHTML = '';

  const commentsCount = bigPicture.querySelector('.social__comment-count');
  commentsCount.classList.add('hidden');

  showBigPicture();

  comments.forEach((comment) => commentsList.appendChild(createComment(comment)));
};

export { popupBigPicture };
