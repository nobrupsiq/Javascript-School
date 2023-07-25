// function isEven(x) {
//   console.log(x);
//   return x % 2 === 0 ? true : false;
// }

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// ES6

const isEven = x => x % 2 === 0;

// Every

numbers.every(isEven);

// forEach

numbers.forEach(x => (x % 2 === 0));

// Map

const myMap = numbers.map(isEven); // retorna o resultado da funcao
console.log(myMap[1])

// Filter

const evenNumbers = numbers.filter(isEven); // retorna um novo array com os elementos para os quais a função devolveu true.
console.log(evenNumbers)

// Reduce

console.log(numbers.reduce((previous, current) => previous + current));
