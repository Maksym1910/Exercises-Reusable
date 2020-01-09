'use strict';

const factorial = par => {
  if (par === 1) return par;
  return par * factorial(par - 1);
};

const a1 = factorial(5);
console.log(a1);
