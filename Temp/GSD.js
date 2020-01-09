'use strict';

function gcd(a, b) {
  let g;
  for (let i = 0; i <= a; i++) {
    if ((a % i === 0) && (b % i === 0)) {
      g = i;
    }
  }
  return g;
}

console.log(gcd(24, 36));

