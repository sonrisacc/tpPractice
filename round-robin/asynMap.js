const job1 = function(cb) {
  setTimeout(function() {
    cb('first');
  }, 900);
};

const job2 = function(cb) {
  setTimeout(function() {
    cb('second');
  }, 100);
};

const job3 = function(cb) {
  setTimeout(function() {
    cb('third');
  }, 300);
};

const jobs = [job1, job2, job3];
const callback = function(results) {
  console.log(results);
};

const asyncMap = function(inputArr, cb) {
  let result = [];
  inputArr.forEach((cur, i) => {
    cur(val => {
      console.log('running');
      result[i] = val;
      if (result.length === inputArr.length) cb(result);
    });
  });
};

asyncMap(jobs, callback);
