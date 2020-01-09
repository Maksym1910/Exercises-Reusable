'use strict';

const str = '10.0.0.1';
const arr = str.split('.');
console.log(arr);

arr[0] <<= 24;
arr[1] <<= 16;
arr[2] <<= 8;
arr[3] = parseInt(arr[3]);

console.log(arr);

const reducer = (acc, val) => acc + val;
console.log(arr.reduce(reducer));

