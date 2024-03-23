class HashSet {
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

  set = (key) => {
    if (this.length() / this.size > 0.75) {
      this.size *= 2;
      const newBucket = new Array(this.size);
      for (let item of this.bucket) {
        if (item) {
          const rehashed = this.hash(item);
          newBucket[rehashed] = item;
        }
      }
      this.bucket = newBucket;
      console.log('double bucket size to' + this.size);
    }

    const hashed = this.hash(key);
    this.bucket[hashed] = key;
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
        result.push(item);
      }
    }
    return result;
  };
}

let hashSet1 = new HashSet(16);
hashSet1.bucket[9] = 'test';
hashSet1.bucket[10] = 'test';
hashSet1.bucket[11] = 'test';
hashSet1.bucket[12] = 'test';
hashSet1.bucket[13] = 'test';
hashSet1.bucket[14] = 'test';
hashSet1.set('test1');
hashSet1.set('test2');
hashSet1.set('test3');
hashSet1.set('test4');
hashSet1.set('test5');
hashSet1.set('test6');
hashSet1.set('test7');
hashSet1.set('test8');
hashSet1.set('test9');
hashSet1.set('test10');

console.log(hashSet1);
console.log(hashSet1.get('test1'));
console.log(hashSet1.get('test2'));
console.log(hashSet1.has('test1'));
console.log(hashSet1.has('test2'));
console.log(hashSet1.get('test10'));
// hashSet1.remove('tet14');
console.log(hashSet1);

console.log(hashSet1.length());
console.log(hashSet1.keys());
// console.log(hashSet1.clear());
console.log(hashSet1);
