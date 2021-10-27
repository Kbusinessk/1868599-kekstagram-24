import { isEscapeKey, openModal, closeModal } from '../supporter/util.js';

const FILE_TYPE = ['png', 'jpeg', 'jpg', 'gif'];

const zoomValue = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const DEFAULT_SCALE_VALUE = 100;

const imageEdit = document.querySelector('.img-upload__overlay');
const previewUpload = document.querySelector('.img-upload__preview');
const previewUploadImage = previewUpload.querySelector('img');
const controlScaleContainer = imageEdit.querySelector('.img-upload__scale');
const scaleControlSmallerButton = controlScaleContainer.querySelector('.scale__control--smaller');
const scaleControlBiggerButton = controlScaleContainer.querySelector('.scale__control--bigger');
const scaleControlValue = controlScaleContainer.querySelector('.scale__control--value');

const fileUploader = document.querySelector('#upload-file');
const closeFormButton = imageEdit.querySelector('#upload-cancel');

const fileLoaderTemplate = document
  .querySelector('#messages')
  .content.querySelector('.img-upload__message');

const showImageLoad = () => {
  const imageLoader = fileLoaderTemplate.cloneNode(true);
  document.body.appendChild(imageLoader);
};

const hideImageLoad = () => {
  const imageLoader = document.querySelector('.img-upload__message');
  imageLoader.remove();
};

const zoomScale = (currentScale) => {
  scaleControlValue.value = `${currentScale}%`;
  previewUploadImage.style.transform = `scale(${currentScale / 100})`;
};

const onControlSmallerButtonClick = () => {
  const currentImageSise = parseInt(scaleControlValue.value, 10);
  if (currentImageSise > zoomValue.MIN) {
    const imageSize = currentImageSise - zoomValue.STEP;
    zoomScale(imageSize);
  } else {
    throw Error('Wrong arguments');
  }
};

const onControlBiggerButtonClick = () => {
  const currentImageSise = parseInt(scaleControlValue.value, 10);
  if (currentImageSise < zoomValue.MAX) {
    const imageSize = currentImageSise + zoomValue.STEP;
    zoomScale(imageSize);
  } else {
    throw Error('Wrong arguments');
  }
};
const onFormEscapeClick = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal(imageEdit);
  }
};
const closeForm = () => {
  closeModal(imageEdit);
  // destroyValidation();
  document.removeEventListener('keydown', onFormEscapeClick);
  closeFormButton.removeEventListener('click', closeForm);
  scaleControlSmallerButton.removeEventListener('click', onControlSmallerButtonClick);
  scaleControlBiggerButton.removeEventListener('click', onControlBiggerButtonClick);
  fileUploader.value();
};

const openForm = () => {
  openModal(imageEdit);
  // initValidation();
  document.addEventListener('keydown', onFormEscapeClick);
  closeFormButton.addEventListener('click', closeForm);
  scaleControlSmallerButton.addEventListener('click', onControlSmallerButtonClick);
  scaleControlBiggerButton.addEventListener('click', onControlBiggerButtonClick);
  previewUploadImage.style.transform = `scale(${DEFAULT_SCALE_VALUE / 100})`;
  scaleControlValue.value = `${DEFAULT_SCALE_VALUE}%`;
};

const onImageLoaderClick = () => {
  const file = fileUploader.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPE.some((extension) => fileName.endsWith(extension));
  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('loadstart', showImageLoad);
    reader.addEventListener('loadend', hideImageLoad);
    reader.addEventListener('load', () => {
      previewUploadImage.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
  openForm();
};

fileUploader.addEventListener('change', onImageLoaderClick);

export { previewUploadImage, imageEdit, openForm, closeForm };
