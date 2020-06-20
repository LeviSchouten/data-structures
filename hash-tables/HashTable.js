class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const bucket = this.data[address];
    if (bucket) {
      return bucket.find((pairs) => pairs[0] === key);
    }
    return undefined;
  }

  keys() {
    const keys = [];
    this.data.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((pairs) => keys.push(pairs[0]));
      }
    });
    return keys;
  }

  values() {
    const values = [];
    this.data.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((pairs) => values.push(pairs[1]));
      }
    });
    return values;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}
