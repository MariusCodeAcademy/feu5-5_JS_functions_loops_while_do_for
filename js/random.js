'use strict';
console.log('random.js file was loaded');

// 4. atspausdinti 15 random sveiku skaiciu nuo 1 iki 10

// sugeneruoti 1 skaiciu 1 iki 10
// Math.random() - 0 iki 1 neimtinai
// kazkaip apdoroti musu 0 iki 1 reiksme kad ji buti tik sveiki skaiciai nuo 1 iki 10
// Math.floor(), Math.trunk()
// kartoti generavima ciklo metu 15 kartu

let rand1 = Math.random();

rand1 = rand1 * 10;

rand1 = Math.floor(rand1);

rand1 = rand1 + 1;

let randOneLine = Math.floor(Math.random() * 10) + 1;

function getMeRandNumberFrom1To(maxRandValue = 10) {
  let rand11 = Math.floor(Math.random() * maxRandValue) + 1;
  return rand11;
}

console.log('rand1 ===', rand1);
console.log('randOneLine ===', randOneLine);

for (let i = 0; i < 15; i++) {
  let ciklasNr = i;
  let randOneLine = getMeRandNumberFrom1To();

  console.log(`Ciklo nr ${ciklasNr} reiksme === ${randOneLine}`);
}
