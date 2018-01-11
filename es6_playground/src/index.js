/*

Exercises:
 1. Convert the functions below to arrow functions (be as concise as possible). Play with the code in the project.

 */

const pi = () => 3.14159;

const square = n => n * n;

const add = (a, b) => a + b;

const yawn = () => {
  console.log('yawn.');
  console.log('yawn...');
  console.log('zzzzzzZZZ');
}

console.log('pi = '+ pi());
console.log('square 4 = ' + square(4));
console.log('add(4, 5) = ' + add(4, 5));
console.log(yawn());