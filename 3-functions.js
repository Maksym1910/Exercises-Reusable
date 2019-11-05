'use strict';

function avg(a, b) {
  return (a + b) / 2;
}

const square = function(a) {
  return a ** 2;
};

const cube = a => a ** 3;

console.log('avg of 6 and 4 = ' + avg(6, 4));
console.log('square of 8 = ' + square(8));
console.log('cube of 3 = ' + cube(3));

