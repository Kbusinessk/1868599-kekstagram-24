// Функция для проверки максимальной длины строки

const checkTextLength = (text, maxLength) => text.length > maxLength;

const isEscapeKey = (evt) => evt.key === 'Escape';

const openModal = (element) => {
  document.body.classList.add('modal-open');
  element.classList.remove('hidden');
};

const closeModal = (element) => {
  document.body.classList.remove('modal-open');
  element.classList.add('hidden');
};

export { isEscapeKey, openModal, closeModal, checkTextLength };
