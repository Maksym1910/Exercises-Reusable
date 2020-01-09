'use strict';

const max2 = arr => arr.flat().reduce((a, b) => (a > b ? a : b));

const max = arr => {
  let c = 0;
  for (const podarr of arr) {
    const maxValue = podarr.reduce((a, b) => (a > b ? a : b));
    (maxValue > c ? c = maxValue : c);
  }
  return c;
};


const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);

const n = max2([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(n);

