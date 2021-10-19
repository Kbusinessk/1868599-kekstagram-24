import { isEscapeKey } from '../util.js';

const body = document.querySelector('body');
const bigPicture = body.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const createComment = ({ avatar, message, name }) => {
  const commentOne = document.createElement('li');
  commentOne.classList.add('social__comment');

  const commentOneImg = document.createElement('img');
  commentOneImg.classList.add('social__picture');
  commentOneImg.src = avatar;
  commentOneImg.alt = name;
  commentOneImg.width = '35';
  commentOneImg.height = '35';
  commentOne.appendChild(commentOneImg);

  const commentOneText = document.createElement('p');
  commentOneText.classList.add('social__text');
  commentOneText.textContent = message;
  commentOne.appendChild(commentOneText);

  return commentOne;
};

const showBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const popupBigPicture = ({ url, description, likes, comments }) => {
  closeButton.addEventListener('click', hideBigPicture);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      hideBigPicture();
    }
  });

  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;

  const commentsList = bigPicture.querySelector('.social__comments');

  const commentsRow = commentsList.querySelectorAll('li');

  commentsRow.forEach((el) => commentsList.removeChild(el));
  const commentsCount = bigPicture.querySelector('.social__comment-count');
  commentsCount.classList.add('hidden');

  comments.forEach((comment) => commentsList.appendChild(createComment(comment)));

  showBigPicture();
};

export { popupBigPicture };
