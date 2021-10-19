const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const getNewPicture = (photo, onClick) => {
  const { id, url, likes, description, comments } = photo;
  const element = pictureTemplate.cloneNode(true);
  const img = element.querySelector('img');
  img.alt = description;
  img.dataset.id = id;
  element.querySelector('.picture__img').src = url;
  element.querySelector('.picture__likes').textContent = likes;
  element.querySelector('.picture__comments').textContent = comments.length;
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    onClick(photo);
  });

  return element;
};

export { getNewPicture };
