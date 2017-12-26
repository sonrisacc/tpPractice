// hashing function
const getIndexBelowMaxForKey = function(str, max) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

const HashTable = function() {
  this.storage = [];
  this.size = 0;
};

HashTable.prototype.insert = () => {};

testTable = new HashTable();
testTable.insert();
