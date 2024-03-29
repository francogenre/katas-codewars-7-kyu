/*
DESCRIPTION:
Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]
All numerators and denominators will be positive integers.

Note: This is an introductory Kata for a series... coming soon!
*/

function reduce(arr) {
  let n = 0;
  for (let i = Math.min(...arr); ; i--) {
    if (arr[0] % i === 0 && arr[1] % i === 0) {
      n = i;
      break;
    }
  }
  return [arr[0] / n, arr[1] / n];
}
