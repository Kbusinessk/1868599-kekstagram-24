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

const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const popupBigPicture = ({ url, description, likes, comments }) => {
  openBigPicture();

  closeButton.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      closeBigPicture();
    }
  });

  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;

  const commentsList = bigPicture.querySelector('.social__comments');
  commentsList.innerHTML = '';
  const commentsElement = commentsList.querySelectorAll('li');

  commentsElement.forEach((el) => commentsList.removeChild(el));
  const commentsCount = bigPicture.querySelector('.social__comment-count');
  commentsCount.classList.add('hidden');

  comments.forEach((comment) => commentsList.appendChild(createComment(comment)));
};

export { popupBigPicture };
