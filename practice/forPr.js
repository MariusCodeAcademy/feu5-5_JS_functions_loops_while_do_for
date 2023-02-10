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
// printAllValuesBut(1);
// printAllValuesBut(8);

// 4.1 parasyti funkcija kuri grazina rezultata

function addNumbersFromTo(from, to) {
  let total = 0;
  let kelintasCiklas = 1;
  for (let i = from; i < to; i++) {
    console.log(
      `Ciklo numeris ${kelintasCiklas}, prie ${total} pridedu ${i} ir gaunu ${
        total + i
      }`
    );
    total = total + i;
    kelintasCiklas = kelintasCiklas + 1;

    // kelintasCiklas += 1;
    // kelintasCiklas++
  }
  console.log('kibirelis ===', total);
  return total;
}
let kiekBuvoSuma = addNumbersFromTo(5, 10);
console.log('kiekBuvoSuma ===', kiekBuvoSuma);
// addNumbersFromTo(100, 115);
