import { checkTextLength } from '../supporter/util.js';

const MAX_COMMENT_LENGTH = 140;

const HashTag = {
  MIN_SIZE: 2,
  MAX_SIZE: 20,
  AMOUNT: 5,
};

const ErrorMessageList = {
  START_ERROR: 'Hashtag must start with #!',
  CONTENT_ERROR: 'Hashtag can only contain letters and numbers!',
  QUANTITY_ERROR: `You can not use more then ${HashTag.MAX_SIZE} hashtags.!`,
  REPETITION_ERROR: 'Hashgtags cannot be used twice!',
  LENGTH_ERROR: `Hashtag lenght can not be less then ${HashTag.MIN_SIZE} or more then ${HashTag.MAX_SIZE} symbols!`,
  COMMENT_ERROR: `Maximum comment length ${MAX_COMMENT_LENGTH} symbols(include #)!`,
};

const pictureUploadForm = document.querySelector('.img-upload__form');
const hashtagsInputElement = pictureUploadForm.querySelector('.text__hashtags');
const descriptionTextareaElement = pictureUploadForm.querySelector('.text__description');
const charCounter = pictureUploadForm.querySelector('.char-counter');
let result;
const checkTagsLength = (tags) => {
  result = tags.length <= HashTag.AMOUNT;
  return result;
};

const checkTagStart = (tag) => {
  result = tag.startsWith('#');
  return result;
};

const checkTagLength = (tag) => {
  result = tag.length >= HashTag.MIN_SIZE && tag.length <= HashTag.MAX_SIZE;
  return result;
};

const isTagUnique = (tag, index, arr) => {
  result = arr.indexOf(tag) === index;
  return result;
};

const isTagMatches = (tag) => {
  const regexp = /^#\w{1,19}$/;
  return tag.match(regexp);
};

const reportValidationError = (field, message) => {
  field.classList.add('error-input-field');
  field.setCustomValidity(message);
};

const reportNoValidationError = (field) => {
  field.setCustomValidity('');
  field.classList.remove('error-input-field');
};

const onHashtagsInput = () => {
  const str = hashtagsInputElement.value;
  const tags = str.toLowerCase().split(' ');
  reportNoValidationError(hashtagsInputElement);

  tags.forEach((tag, index, arr) => {
    if (!checkTagStart(tag)) {
      reportValidationError(hashtagsInputElement, ErrorMessageList.START_ERROR);
    } else if (!checkTagLength(tag)) {
      reportValidationError(hashtagsInputElement, ErrorMessageList.LENGTH_ERROR);
    } else if (!isTagMatches(tag)) {
      reportValidationError(hashtagsInputElement, ErrorMessageList.CONTENT_ERROR);
    } else if (!isTagUnique(tag, index, arr)) {
      reportValidationError(hashtagsInputElement, ErrorMessageList.REPETITION_ERROR);
    } else if (!checkTagsLength(arr)) {
      reportValidationError(hashtagsInputElement, ErrorMessageList.QUANTITY_ERROR);
    }
  });
};

const onCommentInput = () => {
  const comment = descriptionTextareaElement.value;
  charCounter.textContent = comment.length;
  if (checkTextLength(comment, MAX_COMMENT_LENGTH)) {
    reportValidationError(descriptionTextareaElement, ErrorMessageList.COMMENT_ERROR);
  } else {
    reportNoValidationError(descriptionTextareaElement);
  }
};

const setFormValidity = () => {
  hashtagsInputElement.addEventListener('input', onHashtagsInput);
  descriptionTextareaElement.addEventListener('input', onCommentInput);
};

export { setFormValidity };
