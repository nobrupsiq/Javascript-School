// function isEven(x) {
//   console.log(x);
//   return x % 2 === 0 ? true : false;
// }

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// ES6

const isEven = (x) => x % 2 === 0;

// Every

numbers.every(isEven);

// forEach

numbers.forEach((x) => x % 2 === 0);

// Map

const myMap = numbers.map(isEven); // retorna o resultado da funcao

// Filter

const evenNumbers = numbers.filter(isEven); // retorna um novo array com os elementos para os quais a função devolveu true.

// Reduce

numbers.reduce((previous, current) => previous + current);

// For Of

for (const n of numbers) {
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
for (const n of aEntries) {
  console.log(n);
}

// Keys

const aKeys = numbers.keys(); // obtem um iterador de chaves

console.log(aKeys.next());

// Metodo from

let numbers2 = Array.from(numbers);

let evens = Array.from(numbers, (x) => x % 2 === 0);
console.log(evens);

// Array Of

let numbers3 = Array.of(1);
let numbers4 = Array.of(1, 2, 3, 4, 5);

// Tambem podemos usar esse método para fazer uma cópia de um array

let numberCopy = Array.of(...numbers4);
console.log(numberCopy);

// Método fill

let numbersCopy = Array.of(1, 2, 3, 4, 5, 6);
console.log(numbersCopy.fill(5, 1, 3));
// O primeiro valor do fill é o numero que vai ser preenchido, o segundo valor é de que index ele ira começar a preencher e o ultimo é até que ponto queremos preencher.

// fill é excelente se quisermos criar um array e inicializar seus valores como vemos a seguir

let ones = Array(6).fill(5);
console.log(ones);

// metodo copyWithin

let copyArray = [1, 2, 3, 4, 5, 6];

copyArray.copyWithin(1, 3, 5);
console.log(copyArray);

// Ordenando elementos

console.log(numbers.sort((a, b) => a - b)); // Esse código devolverá um número negativo se b for maior que a

// o codigo anterior também pode ser representado pelo código a seguir
function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}
numbers.sort(compare);

// Ordenação personalizada

const friends = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'John', age: 25 },
];

function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}

console.log(friends.sort(comparePerson));

let names = ['Ana', 'ana', 'Jhon', 'jhon'];

console.log(names.sort());

// locale compare

const names2 = ['Maève', 'Maeve'];
console.log(names2.sort((a, b) => a.localeCompare(b)));

// Pesquisa

console.log(numbers.indexOf(10));
console.log(numbers.indexOf(100));

numbers.push(10);
console.log(numbers.lastIndexOf(10));
console.log(numbers.lastIndexOf(100));

// Considere o exemplo a seguir

let numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function multipleOf13(element, index, array) {
  return element % 13 == 0;
}

console.log(numberss.find(multipleOf13));
console.log(numberss.findIndex(multipleOf13));

// Metodo includes

console.log(numberss.includes(15));
console.log(numberss.includes(20));

// Também é possível passar um índice de início a partir do qual queremos que o array faça a pesquisa do valor:

let numberss2 = [7, 6, 5, 4, 3, 2, 1];
console.log(numberss2.includes(4, 5));

// toString e join

console.log(numberss.toString());

// Se quisermos separar os elementos com um separador diferente, por exemplo, -, o método join poderá ser usado para fazer exatamente isso.

const numbersString = numberss.join('-');
console.log(numbersString);
