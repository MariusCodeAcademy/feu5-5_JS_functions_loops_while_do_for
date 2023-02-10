'use strict';
console.log('string.js file was loaded');

function printInLine() {
  let stringRezult = '';

  for (let i = 0; i < 10; i++) {
    console.log(i);
    stringRezult = stringRezult + `${i}, `;
    // printToHtml('this is for loop');
    // TODO jei tai paskutinis ciklas deti '.' be tarpelio
  }
  console.log('stringRezult ===', stringRezult);

  printToHtml(stringRezult);
}

{
  /* <li>1</li>
<li>2</li>
<li>3</li> */
}

function generateLis() {
  let htmlString = '';
  console.time('sar1');
  for (let i = 0; i < 10; i++) {
    console.log(`<li>item ${i + 1}</li>`);
    htmlString = htmlString + `<li>item ${i + 1}</li>`;
  }
  console.log('htmlString ===', htmlString);
  document.getElementById('list').innerHTML = htmlString;
  console.timeEnd('sar1');
}
generateLis();

let prikiniai = ['duona', 'sokoladuka', 'marskinius'];
prikiniai[0];
prikiniai[1];
prikiniai[2];
