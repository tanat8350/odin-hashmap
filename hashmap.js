class HashMap {
  constructor(size) {
    this.bucket = new Array(size);
    this.size = size;
  }

  hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
    }

    return hashCode;
  };

  set = (key, value) => {
    if (this.length() / this.size > 0.75) {
      this.size *= 2;
      const newBucket = new Array(this.size);
      for (let item of this.bucket) {
        if (item) {
          const rehashed = this.hash(item.key);
          newBucket[rehashed] = {
            key: item.key,
            value: item.value,
          };
        }
      }
      this.bucket = newBucket;
      console.log('double bucket size to' + this.size);
    }

    const hashed = this.hash(key);
    this.bucket[hashed] = { key, value };
  };

  get = (key) => {
    return this.bucket[this.hash(key)] || null;
  };

  has = (key) => {
    return this.bucket[this.hash(key)] ? true : false;
  };

  remove = (key) => {
    if (this.bucket[this.hash(key)]) {
      this.bucket[this.hash(key)] = null;
      return true;
    }
    return false;
  };

  length = () => {
    let items = 0;
    for (let item of this.bucket) {
      if (item) {
        items++;
      }
    }
    return items;
  };

  clear = () => {
    this.bucket = new Array(this.size);
  };

  keys = () => {
    const result = [];
    for (let item of this.bucket) {
      if (item) {
        result.push(item.key);
      }
    }
    return result;
  };

  value = () => {
    const result = [];
    for (let item of this.bucket) {
      if (item) {
        result.push(item.value);
      }
    }
    return result;
  };

  entries = () => {
    const result = [];
    for (let item of this.bucket) {
      if (item) {
        result.push([item.key, item.value]);
      }
    }
    return result;
  };
}

let hash1 = new HashMap(16);
hash1.bucket[9] = { key: 'test', value: 'test' };
hash1.bucket[10] = { key: 'test', value: 'test' };
hash1.bucket[11] = { key: 'test', value: 'test' };
hash1.bucket[12] = { key: 'test', value: 'test' };
hash1.bucket[13] = { key: 'test', value: 'test' };
hash1.bucket[14] = { key: 'test', value: 'test' };
hash1.set('test1', 'test');
hash1.set('test2', 'test2');
hash1.set('test3', 'test3');
hash1.set('test', 'test1');
hash1.set('test', 'test2');
hash1.set('test4', 'test4');
hash1.set('test5', 'test5');
hash1.set('test6', 'test6');
hash1.set('test7', 'test7');
hash1.set('tet8', 'test8');
hash1.set('tet9', 'test9');
hash1.set('asdf13', 'asdf13');
hash1.set('tet11', 'test11');
hash1.set('tet12', 'test12');
hash1.set('tet13', 'test13');
hash1.set('tet14', 'This is test 14');
console.log(hash1);
console.log(hash1.get('tet14'));
console.log(hash1.get('tet15'));
console.log(hash1.has('tet14'));
console.log(hash1.has('tet15'));
console.log(hash1.get('tet14'));
// hash1.remove('tet14');
hash1.bucket[7] = { key: 'test', value: 'test' };
console.log(hash1);
console.log(hash1.get('test1'));

console.log(hash1.length());
console.log(hash1.keys());
console.log(hash1.value());
console.log(hash1.entries());
// console.log(hash1.clear());
console.log(hash1);
