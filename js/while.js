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
  // ciklo viduje turi buti kazkas keiciama kas galiausiai padaryts condition i false
  i = i + 1;
}

// atspausdinti nuo 10 iki 0
i = 10;
while (i > 0) {
  console.log('i ===', i);
  printToHtml(i, 'app');
  i--;
}

// 1. atspausdinti konsoleje skaicius nuo 45 iki 58

// 2. atspusdinti skaicius nuo 11 iki 79 kas trecia skaiciu
