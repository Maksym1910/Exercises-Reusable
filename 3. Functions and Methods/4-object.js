'use strict';

const iface = {
  m1: x => [x],
  m2(x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};


const fn = () => {
  const arr = [];
  for (const key in iface) {
    const value = iface[key];
    if (typeof value === 'function') arr.push([key, value.length]);
  }
  console.log(arr);
};

fn();
