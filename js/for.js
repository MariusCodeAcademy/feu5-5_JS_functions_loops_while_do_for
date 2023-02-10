'use strict';
console.log('for.js file was loaded');

/* 
for (init; salyga; zingsnis) {
  // ciklo body
}
init = viena karta
salyga = tikrinama pries vygdant ciklo body
zingsnis = kaskarta po ciklo bod ivykdymo
*/
let i;
// atspausdinti teksta 10 kartu
// debugger;
for (i = 0; i < 10; i++) {
  console.log('this is for loop');
  // printToHtml('this is for loop');
}

// for
// 1. atspausdinti skaicius nuo 14 iki 35
// printToHtml('atspausdinti skaicius nuo 14 iki 35', 'app', 'h2');
for (i = 14; i <= 35; i++) {
  // printToHtml(i);
}
// 2. atspausdinti skaicius nuo 0 iki 100, kas trecia skaiciu
for (i = 0; i < 100; i += 3) {
  console.log('i', i);
}
// 3. atspausdinti skaicius nuo 50 iki 24 imtinai
for (let i = 50; i >= 24; i--) {
  console.log('i ===', i);
}
// 4. atspausdinti 15 random sveiku skaiciu nuo 1 iki 10
