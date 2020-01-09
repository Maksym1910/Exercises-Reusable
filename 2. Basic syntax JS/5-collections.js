'use strict';

const arr = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Maksym', phone: '4433' },
  { name: 'Aurelis', phone: '1203123' },

];

function findPhoneByName(name) {
  for (const key in arr) {
    if (arr[key].name === name) {
      console.log(arr[key].phone);
    }
  }
}

findPhoneByName('Marcus Aurelius');




const hash = {
  MarcusAurelius: '+380445554433',
  Maksym: '4433',
  Aurelius: '1203123',
};


function findPhoneByName2(name) {
  for (const key in hash) {
    if (key === name) {
      console.log(hash[key]);
    }
  }
}

findPhoneByName2('Maksym');
