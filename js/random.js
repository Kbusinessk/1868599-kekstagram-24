// Получение случайного числа в заданном диапазоне
const getRandomInteger = (min, max) => {
  if (min < 0 || min >= max) {
    throw new Error('Неверно указано начало диапазона');
  }

  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getArrayUniqueRandomInteger = (max) => {
  const usedNumbers = [max];
  let randomNumber;
  for (randomNumber = 0; randomNumber < max; randomNumber++) {
    randomNumber = Math.round(Math.random() * max);
  }

  const generateUniqueNumber = () => {
    randomNumber = Math.round(Math.random() * max);
    usedNumbers.splice(randomNumber, 0, max--);
    max && generateUniqueNumber();
  };

  generateUniqueNumber();

  return usedNumbers;
};

const getRandomId = () => parseInt(Date.now() * Math.random(), 10);

export { getRandomInteger, getRandomArrayElement, getArrayUniqueRandomInteger, getRandomId };
