'use strict';
console.log('while.js file was loaded');

/* 
while (condition) {
  // code
  // so-called "loop body"
}

*/

// atspausdinti 10 kartu "Js is easy or not"

// console.log('Js is easy or not');
// console.log('Js is easy or not');
// console.log('Js is easy or not');
// console.log('Js is easy or not');
// console.log('Js is easy or not');
// console.log('Js is easy or not');
// console.log('Js is easy or not');
// console.log('Js is easy or not');
// console.log('Js is easy or not');
// console.log('Js is easy or not');

let i = 0;

while (i < 10) {
  console.log(i + 1, 'Js is easy or not');
  // printToHtml(`${i + 1} Js is easy or not`);
  // ciklo viduje turi buti kazkas keiciama kas galiausiai padaryts condition i false
  i = i + 1;
}

// atspausdinti nuo 10 iki 0
i = 10;
while (i > 0) {
  console.log('i ===', i);
  // printToHtml(i, 'app', 'h3');
  i--;
}

// 1. atspausdinti konsoleje skaicius nuo 45 iki 58

i = 45;

while (i <= 58) {
  // printToHtml(i);
  i++;
}

// 2. atspusdinti skaicius nuo 11 iki 79 kas trecia skaiciu

i = 0;

while (i < 80) {
  // if (i % 3 === 0) {
  //   printToHtml(i);
  // }
  printToHtml(i);
  console.log('i ===', i);
  // i = i + 3;
  i += 3;
  // i++;
}

// generuojam random skaiciu nuo 1 iki 12.
// kiek kartu turim mesti kauliukius kad iskristu 12 ?
