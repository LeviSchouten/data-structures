class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = {
      value,
      next: null,
    };
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(value) {
    const node = {
      value,
      next: this.head,
    };
    this.head = node;
    this.length++;
    return this;
  }

  insert(value, index) {
    if (index >= this.length) return this.append(value);
    if (index === 0) return this.prepend(value);
    const parentNode = this._traverseToIndex(index - 1);
    const childNode = parentNode.next;
    const newNode = { value, next: childNode };
    parentNode.next = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index >= this.length) return undefined;
    if (index < 0) return undefined;
    if (index === 0) {
      this.head = this.head.next;
      return this;
    }
    const parentNode = this._traverseToIndex(index - 1);
    const childNode = this._traverseToIndex(index + 1);
    parentNode.next = childNode;
    this.length--;
    return this;
  }

  printList() {
    const list = [];
    let node = this.head;
    while (node) {
      list.push(node.value);
      node = node.next;
    }
    return list;
  }

  _traverseToIndex(index) {
    let node = this.head;
    while (index) {
      node = node.next;
      index--;
    }
    return node;
  }
}
