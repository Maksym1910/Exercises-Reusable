'use strict';

function average(a, b) {
  return (a + b) / 2;
}

const square = function(a) {
  return a ** 2;
};

const cube = a => Math.pow(a, 3);



function calculate() {
  const arr = new Array();
  for (let i = 0; i <= 9; i++) {
    const s = square(i);
    const c = cube(i);
    const a = average(s, c);
    arr.push(a);
  }
  console.log(arr);
}

calculate();
