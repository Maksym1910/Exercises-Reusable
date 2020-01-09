'use strict';

const a = 5;
const b = inc(a);
const obj = { n: 5 };

function inc(n) {
  return n ** 2;
}

console.dir({ a, b });




function inc2(num) {
  num.n = ++num.n;
  console.dir(num);
}

inc2(obj);
