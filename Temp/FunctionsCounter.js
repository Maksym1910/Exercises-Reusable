'use strict';

const arr = [1, 2, x => x, 'home', function avg(a, b) { return (a + b) / 2; }];

function searchFn() {
  const obj = { function: 0, };
  for (const key of arr) {
    if (typeof key === 'function') {
      obj.function += 1;
    }
  }
  console.dir(obj);
}


searchFn();

