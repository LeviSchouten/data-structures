class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const node = {
      value,
      next: null,
    };
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    }
    if (this.length > 0) {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this.first;
  }

  dequeue() {
    const node = this.first;

    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return node;
  }
}

const queue = new Queue();

queue.enqueue(12);
queue.enqueue(13);
queue.enqueue(14);

console.log(queue);

queue.dequeue();
console.log(queue);
// console.log(queue.peek());
queue.dequeue();
console.log(queue);

// console.log(queue.peek());
queue.dequeue();
console.log(queue);
