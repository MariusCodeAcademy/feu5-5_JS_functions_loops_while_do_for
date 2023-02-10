'use strict';
console.log('continueBreak.js file was loaded');

// 1. atspausdinti skaicius nuo 0 iki 15. Visus isskyrus 7

for (let i = 0; i < 15; i++) {
  if (i === 7) {
    // praleidziam
    continue;
    // break;
  }
  // console.log('i ===', i);
}

for (let i = 0; i < 15; i++) {
  // exit clause
  if (i === 7) continue;
  if (i === 3) continue;
  if (i === 14) continue;

  console.log('i ===', i);
}
