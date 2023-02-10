'use strict';
console.log('string.js file was loaded');

let stringRezult = '';

for (let i = 0; i < 10; i++) {
  console.log(i);
  stringRezult = stringRezult + `${i}, `;
  // printToHtml('this is for loop');
  // TODO jei tai paskutinis ciklas deti '.' be tarpelio
}
console.log('stringRezult ===', stringRezult);

printToHtml(stringRezult);
