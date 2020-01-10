'use strict';

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const array3 = ['Beijing', 'Kiev'];
const array4 = ['Kiev', 'London', 'Baghdad'];

const difference = (arr1, arr2) => {
  const newArr = [];
  for (const value of arr1) {
    if (arr2.indexOf(value) === -1) newArr.push(value);
  }
  return newArr;
};

console.log(difference(array1, array2));
console.log(difference(array3, array4));
