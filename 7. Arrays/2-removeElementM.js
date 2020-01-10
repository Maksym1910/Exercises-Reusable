'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];
const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];

// Modified version for deleting more than 1 element of array;

const removeElementM = (arr, ...args) => {
  for (const value of args) {
    const removedItem = arr.indexOf(value);
    if (removedItem === -1) continue;
    arr.splice(removedItem, 1);
  }
};

removeElementM(array, 3, 4, 5, 10);
console.log(array);


removeElementM(array2, 'Lima', 'Berlin', 'Kiev');
console.log(array2);
