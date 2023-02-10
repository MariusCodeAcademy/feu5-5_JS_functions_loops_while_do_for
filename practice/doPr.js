'use strict';
console.log('doPr.js file was loaded');

// 1. generuojam random skaiciu nuo 1 iki 12. kiek kartu turim mesti kauliukius kad iskristu 12 ?

// mesk kauliukus
// jei iskrito 12 tai pabaiga
// jei ne 12 tai tesiam
// debugger;
let oneRandom;
do {
  // mesk kauliukus
  oneRandom = getMeRandNumberFrom1To(12);
  console.log('oneRandom ===', oneRandom);
  // suskaiciuoti kiek kartu buvo mesta kauliukai?
} while (oneRandom !== 12);
