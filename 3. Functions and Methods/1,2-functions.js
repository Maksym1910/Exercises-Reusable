'use strict';

const random = (max, min) => {
  if (!min) min = 0;
  return Math.floor(Math.random() * (max - min) + min);
};

console.log(random(1, 5));
console.log(random(3));





const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const generateKey = (length, characters) => {
  let str = '';
  for (let i = 0; i <= length; i++) {
    str += characters[random(0, characters.length)];
  }
  return str;
};

console.log(generateKey(13, characters));


