class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let currentNode = this.root;
    if (!currentNode) return (this.root = new Node(value));
    while (currentNode) {
      if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = new Node(value);
          return this;
        }
      }
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = new Node(value);
          return this;
        }
      }
    }
    return this;
  }

  lookup(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) return currentNode;
      if (value > currentNode.value) currentNode = currentNode.right;
      if (value < currentNode.value) currentNode = currentNode.left;
    }
    return undefined;
  }

  remove(value) {
    const deleteNode = this.lookup(value);
    if (!deleteNode.left && !deleteNode.right) return (deleteNode.value = null);
    if (deleteNode.left && deleteNode.right) {
      let currentNode = deleteNode.right;
      while (currentNode.left) {
        currentNode = currentNode.left;
      }
      deleteNode.value = currentNode.value;
      currentNode.value = null;
      return deleteNode;
    }
    if (deleteNode.right) {
      deleteNode.value = deleteNode.right.value;
      deleteNode.left = deleteNode.right.left;
      deleteNode.right = deleteNode.right.right;
    }
    if (deleteNode.left) {
      deleteNode.value = deleteNode.left.value;
      deleteNode.left = deleteNode.left.left;
      deleteNode.right = deleteNode.left.right;
    }
    return deleteNode;
  }
}
