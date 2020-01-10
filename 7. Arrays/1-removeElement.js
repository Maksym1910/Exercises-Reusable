'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];
const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];


// Versions for deleting only 1 element of array;

const removeElement = (arr, el) => {
  const removedItem = arr.indexOf(el);
  if (removedItem === -1) return arr;
  arr.splice(removedItem, 1);
};


removeElement(array, 4);
removeElement(array, 10);
console.log(array);

removeElement(array2, 'Lima');
removeElement(array2, 'Berlin');
console.log(array2);



