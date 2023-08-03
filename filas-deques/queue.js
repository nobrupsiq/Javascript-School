// Uma fila é uma coleção ordenada de itens baseada em FIFO (First In First Out, isto é, o primeiro que entra é o primeiro que sai);

// • enqueue(element): esse método adiciona um novo elemento no final da fila.

// • dequeue(): esse método remove o primeiro elemento da fila (o item que está na frente). Também devolve o elemento removido.

// • peek(): esse método devolve o primeiro elemento da fila – é o primeiro item adicionado e o primeiro que será removido da fila. A fila não é modificada (o elemento não é removido, mas será devolvido apenas como informação – é muito semelhante ao método peek da classe Stack). Funciona igualmente como o método front, como é conhecido em outras linguagens.

// • isEmpty(): esse método devolve true se a fila não contiver nenhum elemento, e false se o tamanho for maior que 0.

// • size(): esse método devolve o número de elementos contidos na fila. É semelhante à propriedade length do array.

class Queue {
  constructor() {
    this.count = 2; // 1° // controle de tamanho de fila
    this.lowestCount = 0; // 2° // Irá manter o controle do primeiro elemento
    this.items = {
      0: 5,
      1: 8,
    }; // 3° // Armazenador de items da fila
  }
  enqueue(element) {
    // Só podemos adicionar novos itens no final da fila.
    // o tamanho de count dentro do obj será a posição do elemento;
    this.items[this.count] = element; // this.count sera a chave do obj e element o valor
    this.count++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount]; // 1° // armazenamos o primeiro elemento da file
    delete this.items[this.lowestCount]; // 2° // Irá deletar o primeiro item da fila ja que lowesCount é 0;
    this.lowestCount++; // 3° // Precisamos incrementar o lowestCount em +1 para excluir o proximo item da fila
    return result; // 4° // Devolvendo o primeiro item da fila que estava seguro na variavel result(foi deletado)
  }
  peek() {
    // Esse método devolverá o item que está na frente da fila (usando lowestCount como chave para obter o valor do elemento)

    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  isEmpty() {
    // Verificando se a fila está vazia e o seu tamanho. devolverá true se a pilha estiver vazia, e false caso contrário.

    return this.count - this.lowestCount === 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return undefined;
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

// As classes Queue e Stack são muito parecidas. A única diferença está nos
// métodos dequeue e peek, que se deve à distinção entre os princípios FIFO e
// LIFO.
