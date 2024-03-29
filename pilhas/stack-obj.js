class Stack2 {
  constructor() {
    this.count = 2;
    this.items = {
      0: 5,
      1: 8,
    };
  }
  //metodos;
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  pop() {
    if (this.isEmpty()) {
      // 1° step
      return undefined;
    }
    this.count--; // 2° step
    const result = this.items[this.count]; // 3° step
    delete this.items[this.count]; // 4° step
    return result; // 5° step
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  clear() {
    while (!this.isEmpty()) {
      this.pop();
    }
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

export default Stack2;

const stack2 = new Stack2();
stack2.push(5);
stack2.push(8);
stack2.pop();

console.log(stack2.toString());

// OBS: , todos os outros métodos que criamos têm complexidade O(1), o que significa que podemos acessar diretamente o elemento no qual estamos interessados e executar uma ação com ele (push, pop ou peek).

// Protegendo os elementos internos da estrutura de dados

console.log(Object.getOwnPropertyNames(stack2));
console.log(Object.keys(stack2));
console.log(stack2.items);
