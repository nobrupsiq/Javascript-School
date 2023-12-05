// shift remove o primeiro elemento
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.shift();

delete numbers[0];
numbers.splice(5, 0, 2, 3, 4);
console.log(numbers);
