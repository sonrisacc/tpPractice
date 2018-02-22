/*
For example:
{startTime: 2, endTime: 3}  // meeting from 10:00 – 10:30 am
{startTime: 6, endTime: 9}  // meeting from 12:00 – 1:30 pm

c: 
 the meetings are not in order 
 startTime and endTime don't have an upper bound.
 
 [ 
   [0, 1],
   [3, 5]  --> index1
   [4, 8]
   [4, 6]
   [10, 12]
 ]
 
 preEle = arr[0];
 
 @ index 0 
 preEle[end] vs curEle[start]
 1 <3  -> push to result 
 preEle --> curEle
 curEle --> arr[2] 
 
 @ index 1
 [3, 5]  --> pre
 [4, 8]  --> cur 
 5 >4  merge [3, 8] ->  -> push to result
 i++
 pre --> newlyGereated arr 

 @ index 2
 arr[3] --> cur  
  [3, 8] 
  [4, 6]
  8 >4  merge [3, 8] ->  
     // -> compare result[lastIndex] 
     // --> push to result if not exists 
     // reassign preEle 
     // update  i++
  @ 4 
  [3, 8]
  [10, 12]  --> [10, 12]
     
 // if end time > next ele's starting time -> overlap 
 
 
 // make a copy of the input arr 
 // sort of elements based on starting time  (in place )
 // compare the cur ele's end time  vs next ele's starting time 
    //if cur's > next's  --> overlapped 
      // take cur[start time]  + math.max(cur[end, next[end])
      // ^ push to end result  
    // if cur's < next's  --> no overlapped 
      // push to end result 
   
   
   //big-o --> n speed 
           --> n space 
 
  [2, 8]
  [6, 9]
  [3, 7] 
  
 
  [2, 9]
  [3, 7]
  
  [2, 9] --> newEle
  
  [[2,8]]
*/

function mergeRanges(arr) {
  if (arr.length <= 1) return inputArr;

  let inputArr = [...arr];
  inputArr.sort((a, b) => {
    return a.startTime > b.startTime;
  });

  let result = [inputArr[0]];
  let preEle = result[result.length - 1];

  for (let i = 1; i < inputArr.length; i++) {
    let curEle = inputArr[i];
    console.log('preEle', preEle);
    console.log('curEle', curEle);
    if (curEle.startTime <= preEle.endTime) {
      // have overlap
      // console.log("preEle",preEle)
      // console.log("curEle",curEle)
      let maxEndTime = Math.max(preEle.endTime, curEle.endTime);
      preEle.startTime = preEle.startTime;
      preEle.endTime = maxEndTime;
    } else {
      result.push(curEle);
      preEle = result[result.length - 1];
    }
  }
  console.log(result);
  return result;
}

mergeRanges([
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 }
]);
