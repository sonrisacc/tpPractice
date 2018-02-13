const lengthLongestPath = function(input) {
  let arr = input.split('\n');
  let stack = [];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let levelDepth = (arr[i].match(/\t/g) || []).length;
    let pathName = arr[i].replace(/\t/g, '');
    if (levelDepth < stack.length && arr.length !== 2) {
      while (levelDepth < stack.length) {
        stack.pop();
      }
    }
    // child folder
    if (pathName.indexOf('    ' !== -1) && i + 1 === arr.length)
      pathName = pathName.replace('    ', '');
    stack.push(pathName);

    if (pathName.indexOf('.') !== -1) {
      let temp = stack.join('/').length;
      // console.log('stack', stack);
      if (temp > max) max = temp;
      stack.pop();
    }
  }

  // console.log('max', max);
  return max;
};

lengthLongestPath('a.txt'); // 16  --20
lengthLongestPath('dir\n    file.txt'); // 12 --16
lengthLongestPath('dir\n    file.txt');
lengthLongestPath('dir\n\t        file.txt\n\tfile2.txt'); // 20
lengthLongestPath('a\n\tb.txt\na2\n\tb2.txt');
lengthLongestPath('a\n\tb\n\t\tc.txt\n\taaaa.txt');
