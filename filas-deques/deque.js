class Deque {
  constructor() {
    this.count = 3;
    this.lowestCount = 1;
    this.items = {
      1: 8,
      2: 9,
    };
  }
  addFront(element) {
    if (this.isEmpty) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }
}

const deque = new Deque();
