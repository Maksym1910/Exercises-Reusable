'use strict';

function range(start, end) {
  const arr = [];
  for (; start <= end; start++) {
    arr.push(start);
  }
  console.log(arr);
}

range(15, 30);





function rangeOdd(start, end) {
  const arr = [];
  for (; start <= end; start++) {
    if (start % 2 !== 0) {
      arr.push(start);
    }
  }
  console.log(arr);
}

rangeOdd(15, 30);
