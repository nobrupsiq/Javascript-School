let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

number[number.length] = 10;
number.push(11);
number.push(12, 13);

for(let i = 0; i < number.length; i++) {
  number[i] = number[i + 1];
}

number.unshift(-2);
number.unshift(-4, -3);

Array.prototype.reIndex = function(myArray) {
  const newArray = [];

  for(let i = 0; i < myArray.length; i++) {
    if(myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }
  return new Array;
}

// Remove a primeira posição manualmente e executa reIndex
Array.prototype.removeFirstPosition = function() {
  for(let i = 0; i < this.length; i++) {
    this[i] = this[i + 1]
  }
  return this.reIndex(this);
}
// number = number.removeFirstPosition();


// Usando o método shift

// number.shift();

console.log(number)
