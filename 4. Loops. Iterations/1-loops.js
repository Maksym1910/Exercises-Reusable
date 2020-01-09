'use strict';

const sum1 = (...args) => {
  let sumOfElements = 0;
  for (let i = 0; i < args.length; i++) {
    sumOfElements += args[i];
  }
  return sumOfElements;
};



const sum2 = (...args) => {
  let sumOfElements = 0;
  for (const element of args) {
    sumOfElements += element;
  }
  return sumOfElements;
};



const sum3 = (...args) => {
  let sumOfElements = 0;
  let i = 0;
  while (i < args.length) {
    sumOfElements += args[i];
    i++;
  }
  return sumOfElements;
};


const sum4 = (...args) => {
  let sumOfElements = 0;
  let i = 0;
  do {
    sumOfElements += args[i];
    i++;
  } while (i < args.length);
  return sumOfElements;
};



const sum5 = (...args) => args.reduce((acc, val) => acc + val);



const a = sum1(1, 2, 3, 4);
console.log('sum1 = ' + a);

const b = sum2(1, 2, 3);
console.log('sum2 = ' + b);

const c = sum3(1, 7, 3, 4);
console.log('sum3 = ' + c);

const d = sum4(1, -1, 1);
console.log('sum4 = ' + d);

const e = sum5(10, -1, -1, -1);
console.log('sum5 = ' + e);
