class Person {
  constructor(name) {
    this._name = name;
  }
  get name() { // Pega
    return this._name;
  }
  set name(value) { // Define
    this._name = value;
  }
}

let lotrChar = new Person('Frodo');
console.log(lotrChar.name);

let gandalf = lotrChar.name = 'Gandalf';
console.log(gandalf);

let sam = lotrChar.name = 'Sam';
console.log(sam);
