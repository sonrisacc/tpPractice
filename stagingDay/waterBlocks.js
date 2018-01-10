const waterBlocks = function(blocks) {
  function findTempBucket(start, end) {
    // find left block
    while (blocks[start] > blocks[start - 1] && blocks[start] > 0) {
      start--;
    }
    // find right block
    while (blocks[end] < blocks[end + 1] && blocks[end] < blocks.length) {
      end++;
    }

    return [start, end];
  }

  function findDrops(inputBucket) {
    console.log('inputBucket', inputBucket);
    let leftWallValue = blocks[inputBucket[0]];
    let rightWallValue = blocks[inputBucket[1]];
    console.log('leftWallValue', leftWallValue);
    console.log('rightWallValue', rightWallValue);
    let oneDrop = 0;
    let tempMin =
      leftWallValue > rightWallValue ? rightWallValue : leftWallValue;
    console.log('tempMin', tempMin);
    for (let i = inputBucket[0] + 1; i < inputBucket[1]; i++) {
      oneDrop += tempMin - blocks[i];
    }
    console.log('oneDrop', oneDrop);
    return oneDrop;
  }

  if (blocks.length <= 2) return 0;
  let result = 0;
  let leftWallIndex = 0;
  let rightWallIndex = 1;
  console.log('35', leftWallIndex);
  while (rightWallIndex < blocks.length) {
    console.log('36', leftWallIndex);
    let tempBucket = findTempBucket(leftWallIndex, rightWallIndex);
    let findedDrops = findDrops(tempBucket);

    leftWallIndex = tempBucket[0];
    rightWallIndex = tempBucket[1];

    if (leftWallIndex === 0 || rightWallIndex === blocks.length - 1) {
      findedDrops = 0;
    }
    console.log('findedDrops', findedDrops);
    result += findedDrops;
    console.log('rightWallIndex', rightWallIndex);
    leftWallIndex = rightWallIndex;
    console.log('leftWallIndex', leftWallIndex);
    rightWallIndex = leftWallIndex + 1;
  }
  return result;
};

const input = [5, 2, 3, 2, 1, 3];
const output = waterBlocks(input);
console.log(output);
