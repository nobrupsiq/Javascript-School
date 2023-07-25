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

// Filter

const evenNumbers = numbers.filter(isEven); // retorna um novo array com os elementos para os quais a função devolveu true.

// Reduce

numbers.reduce((previous, current) => previous + current);

// For Of

for(const n of numbers) {
  console.log(n % 2 === 0 ? 'even' : 'odd');
}

// A classe Array também tem uma propriedade chamada @@iterator,
// introduzida na ES2015. Para usá-la, é necessário acessar a propriedade
// Symbol.iterator do array.

let iterator = numbers[Symbol.iterator]();
for (let i of iterator) {
  console.log(i);
}
iterator.next().value;


// metodos entries, keys e values de array

let aEntries = numbers.entries(); // obtém um iterador de chave/valor

aEntries = numbers.entries();
for(const n of aEntries) {
  console.log(n)
}

// Keys

const aKeys = numbers.keys(); // obtem um iterador de chaves

console.log(aKeys.next())

// Metodo from

let numbers2 = Array.from(numbers);

let evens = Array.from(numbers, x => (x % 2 === 0))
console.log(evens)


// Array Of

let numbers3 = Array.of(1);
let numbers4 = Array.of(1,2,3,4,5);

// Tambem podemos usar esse método para fazer uma cópia de um array

let numberCopy = Array.of(...numbers4);
console.log(numberCopy)

// Método fill
