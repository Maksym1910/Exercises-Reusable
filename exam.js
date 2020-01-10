'use strict';

const array = [1, 2, 3];
const array2 = [1, 2, 3, true, false, 'home'];

const fn = arr => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const a = arr[i];
    if (typeof a === 'number') {
      newArr.push(a);
    } else {
      throw new Error('Value not a number');
    }
  }
  return newArr;
};

console.log(fn(array));
console.log(fn(array2));


