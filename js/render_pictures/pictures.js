const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const getNewPicture = ({ id, url, likes, description, comments }) => {
  const element = pictureTemplate.cloneNode(true);
  const img = element.querySelector('img');
  img.alt = description;
  img.dataset.id = id;
  element.querySelector('.picture__img').src = url;
  element.querySelector('.picture__likes').textContent = likes;
  element.querySelector('.picture__comments').textContent = comments.length;

  return element;
};

export { pictureContainer, getNewPicture };
