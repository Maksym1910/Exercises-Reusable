'use strict';

const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 57, true];

const hash = {
  number: 0,
  string: 0,
  boolean: 0,
};

for (const value of arr) {
  if (typeof value === 'number') {
    hash.number += 1;
  } else if (typeof value === 'string') {
    hash.string += 1;
  } else if (typeof value === 'boolean') {
    hash.boolean += 1;
  } else {
    console.log('Undefined');
  }
}

console.log(hash);
