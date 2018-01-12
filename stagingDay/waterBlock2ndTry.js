const waterBlocks = function(blocks) {
  // iterate through the input arr
  // `find max ()
  // input range, output index
  // iterate through the input arr
  // for cur value find
  // left (if index = 0)
  // right (if index = blocks.length)
  // if(left && right){}
  // take the min
  // collect drops
  // cur value - min
  let result = 0;
  for (let i = 1; i < blocks.length - 1; i++) {
    let left = Math.max(...blocks.slice(0, i));
    let right = Math.max(...blocks.slice(i + 1, blocks.length));
    let temp = Math.min(left, right);
    let drop = temp - blocks[i];
    if (drop > 0) result += drop;
  }
  return result;
};

const input = [5, 2, 3, 2, 1, 3];
const output = waterBlocks(input);
console.log(output);

const input2 = [1, 2, 3, 2, 1];
const output2 = waterBlocks(input2);
console.log(output2);
