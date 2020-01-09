'use strict';

const arr = [1, 4, 5, 7, 2];
const sum = arr.reduce((acc, val) => acc + val);
console.log(sum);



const arr2 = [
  [1, 4, 5, 7, 2],
  [1, 4, 5, 7, 2],
  [1, 4, 5, 9, 2],
  [1, 4, 5, 7, 2],
];

const fn = () => {
  let sumOfElement = 0;
  for (const i of arr2) {
    const a = i.reduce((acc, val) => acc + val);
    sumOfElement += a;
  }
  return sumOfElement;
};

console.log(arr2.flat().reduce((acc, val) => acc + val));
console.log(fn());
