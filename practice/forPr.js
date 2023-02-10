'use strict';
console.log('forPr.js file was loaded');

// 1. atspausdinti skaicius nuo 0 iki 15. Visus isskyrus 7
function printAllValuesBut(nrNotToPrint) {
  console.log('we will not print', nrNotToPrint, '=============');
  for (let i = 0; i < 15; i++) {
    if (i === nrNotToPrint) {
      // praleidziam
      continue;
    }
    console.log('i ===', i);
  }
}

// 2. parasyti funkcija kuri atlieka [1] pratima
printAllValuesBut(1);
printAllValuesBut(8);
