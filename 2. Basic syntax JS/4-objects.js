'use strict';


function fn() {
  const obj = {
    name: 'Marcus',
  };

  let obj2 = {
    name: 'Maxim',
  };

  obj.name = 'euvgen';
  obj2.name = 'alex';

  const obj3 = {
    age: 15,
  };

  obj2 = obj3;

  console.dir(obj);
  console.dir(obj2);
}

fn();




function createUser(name, city) {
  const obj = {
    name,
    city,
  };
  console.log(obj);
}

createUser('Marcus', 'Roma');
