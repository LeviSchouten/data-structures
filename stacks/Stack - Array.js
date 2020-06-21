class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    return this.array.push(value);
  }

  pop() {
    return this.array.pop();
  }
}

const stack = new Stack();
stack.push(12);
stack.push(23);
console.log(stack);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack);
