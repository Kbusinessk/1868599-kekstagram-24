import { PHOTO_COUNT, createUsersPhoto } from './data.js';

// Функция для проверки максимальной длины строки

const checkTextLength = (text, maxLength) => text.length <= maxLength;

checkTextLength('Проверка длины введённого комментария', 140);

const generateUserPhotos = () => Array.from({ length: PHOTO_COUNT }, createUsersPhoto);

export { generateUserPhotos };
