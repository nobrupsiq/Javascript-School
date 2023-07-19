let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

number[number.length] = 10;
number.push(11);
number.push(12, 13);

Array.prototype.insertFirstPosition = function(value) {
  for(let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
}

number.insertFirstPosition(-1);

console.log(number.unshift(-2));
console.log(number.unshift(-4, -3));
