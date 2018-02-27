/*
method: 
iterate through the storage arr 
  --> {cur: 0} 
  --> { cur: ++ }
 


*/

const TempTracker = function() {
  this.storage = {};
  this.max = Number.NEGATIVE_INFINITY;
  this.min = Number.POSITIVE_INFINITY;
  this.tempSum = 0;
  this.size = 0;
  this.tempModeAmount = 0;
  this.mostPopularNumb = [];
};

TempTracker.prototype.insert = function(input) {
  if (!!this.storage[input]) {
    this.storage[input]++;
    if (this.storage[input] === this.tempModeAmount) {
      this.mostPopularNumb.push(input);
    } else if (this.storage[input] > this.tempModeAmount) {
      this.mostPopularNumb.length = 0;
      this.mostPopularNumb.push(input);
      this.tempModeAmount = this.storage[input];
    }
  } else {
    this.storage[input] = 1;
  }

  if (input > this.max) this.max = input;
  if (input < this.min) this.min = input;
  this.size += 1;
  this.tempSum += input;
};

TempTracker.prototype.getMax = function(input) {
  return this.max;
};

TempTracker.prototype.getMin = function(input) {
  return this.min;
};

TempTracker.prototype.getMean = function(input) {
  return Math.floor(this.tempSum / this.size);
};

TempTracker.prototype.getMode = function(input) {
  return this.mostPopularNumb;
};

let a = new TempTracker();
a.insert(1);
a.insert(2);
a.insert(3);
a.insert(1);
a.insert(1);
a.insert(2);
a.insert(2);

console.log(a.getMax()); // 3
console.log(a.getMin()); // 1
console.log(a.getMean()); // 8/5
console.log(a.getMode()); // []
