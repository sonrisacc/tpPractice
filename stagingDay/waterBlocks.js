const waterBlocks = function(blocks) {
  function findTempBucket(start, end) {
    // find left block
    while (blocks[start] < blocks[start - 1] && blocks[start] > 0) {
      start--;
    }
    // find right block
    while (blocks[end] > blocks[end + 1] && blocks[end] < blocks.length) {
      end++;
    }
    return [start, end + 1];
  }

  function findDrops(inputBucket) {
    let oneDrop = 0;
    if (inputBucket[0] - inputBucket[1] === 0) return oneDrop;
    let leftWallValue = blocks[inputBucket[0]];
    let rightWallValue = blocks[inputBucket[1]];

    let tempMin =
      leftWallValue > rightWallValue ? rightWallValue : leftWallValue;

    for (let i = inputBucket[0] + 1; i < inputBucket[1]; i++) {
      oneDrop += tempMin - blocks[i];
    }

    return oneDrop;
  }

  if (blocks.length <= 2) return 0;
  let result = 0;
  let leftWallIndex = 0;
  let rightWallIndex = 1;

  while (rightWallIndex < blocks.length) {
    let tempBucket = findTempBucket(leftWallIndex, rightWallIndex);
    let findedDrops = findDrops(tempBucket);

    leftWallIndex = tempBucket[0];
    rightWallIndex = tempBucket[1];

    result += findedDrops;
    if (rightWallIndex >= blocks.length - 1) return result;

    leftWallIndex = rightWallIndex;
    rightWallIndex = leftWallIndex + 1;
  }
};

const input = [5, 2, 3, 2, 1, 3];
const output = waterBlocks(input);
console.log(output);
