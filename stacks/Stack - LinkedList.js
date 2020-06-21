class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const node = {
      value,
      next: null,
    };
    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
    }
    if (this.length > 0) {
      node.next = this.top;
      this.top = node;
    }
    this.length++;
    return this;
  }

  pop() {
    const node = this.top;

    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      this.bottom = null;
    }

    this.top = node.next;
    this.length--;

    return node;
  }
}

const stack = new Stack();
