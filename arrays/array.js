class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  _shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const array = new MyArray();
console.log(array.push("hello"));
console.log(array.push("hello"));
console.log(array.push("hello"));
console.log(array.push("hello"));
console.log(array.push("hello"));
console.log(array.push("hello"));
console.log(array.push("yoy!"));
console.log(array.pop());
console.log(array.push("yoy!"));
array.delete(3);
array.shiftItems(3);
console.log(array.data);
