// https://devdocs.io/javascript/global_objects/math/random

// Option number 1

const getRandomNumber = (min, max) => {
  if (min < 0 || min >= max) {
    throw new Error('Неверно указано начало диапазона');
  }

  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
};

getRandomNumber(0, 140);

const checkCommentLength = (comment, maxLength) => comment.length <= maxLength;

checkCommentLength('Проверка длины введённого комментария', 140);

//Option number 2

// function getRandomNumber(min, max, precision) {
//   if (min < 0 || min >= max) {
//     throw new Error('Неверно указано начало диапазона ')
//   }
//   console.log(Number(Math.random() * (max - min) + min).toFixed(precision))
// }

// getRandomNumber(0, 140)

// function checkCommentLength(comment, maxLength = 140) {
//   return comment.length <= maxLength
// }

// console.log(checkCommentLength('Проверка длины введённого комментария'))
