'use strict';

const arr = [1, 3, 5, 6, 7, 8, 9];
const reducer = (acc, val) => acc + val;
const a = par => par.reduce(reducer);

console.log(a(arr));



const sumator = () => {
  let sum = 0;
  for (const key in arr) {
    const value = arr[key];
    sum += value;
  }
  return sum;
};

console.log(sumator());







