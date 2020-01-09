'use strict';

const arr = [54, 3, 5, 6, 128, 8, 9];

const fn = () => {
  let max = arr[0];
  for (const key in arr) {
    const value = arr[key];
    if (value > max) max = value;
  }
  return max;
};



console.log(fn());

