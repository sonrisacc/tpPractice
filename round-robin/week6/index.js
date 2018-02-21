function allianceHelp(t, allianceSize) {
  let standard = 60;
  let option = Math.floor(t * 0.1);

  let a = standard * allianceSize > option * allianceSize ? option : standard;
  let b = standard * allianceSize > option * allianceSize ? standard : option;

  let aSum = a * allianceSize;
  let bSum = b * allianceSize;

  let remainedTime = 0;
  if (t === 0) return remainedTime;
  if (t > aSum && t < bSum) {
    let aMaxSteps = Math.floor(t / a);
    let bMaxSteps = Math.floor(t / b);

    let chunkTime =
      t - a * aMaxSteps > t - b * bMaxSteps ? b * bMaxSteps : a * aMaxSteps;
    let chunkSteps =
      t - a * aMaxSteps > t - b * bMaxSteps ? bMaxSteps : aMaxSteps;

    let remainedSteps = allianceSize - chunkSteps;
    let actualNeededSteps = Math.floor((t - chunkTime) / a);

    if (remainedSteps <= actualNeededSteps)
      remainedTime = t - chunkTime - remainedSteps * a;
    if (remainedSteps > actualNeededSteps)
      remainedTime = t - chunkTime - actualNeededSteps * a;
  }
  if (t >= bSum) {
    remainedTime = t - bSum;
  }
  if (t <= aSum) remainedTime = t - Math.floor(t / a) * a;

  return remainedTime;
}

function allianceHelp3(t, allianceSize) {
  let remainedTime = t;
  let i = allianceSize;
  let a = 60;
  let b = Math.floor(t * 0.1);

  if (t === allianceSize * a || t === allianceSize * b) return 0;
  while (i > 0) {
    let temp = remainedTime - Math.max(a, b);
    let temp2 = remainedTime - Math.min(a, b);

    if (temp2 < 0) break;
    let first = temp >= 0 ? Math.max(a, b) : Math.min(a, b);
    remainedTime -= first;
    i--;
  }

  return remainedTime;
}
function oneBoost(t, actualMaxSteps, init) {
  if (t <= 0) return;
  let a = 60;
  let b = Math.floor(init * 0.1);
  let aMaxSteps = Math.floor(t / a);
  let bMaxSteps = Math.floor(t / b);
  let savedTime = 0;
  let chunkTime =
    t - a * aMaxSteps > t - b * bMaxSteps ? b * bMaxSteps : a * aMaxSteps;
  let chunkSteps =
    t - a * aMaxSteps > t - b * bMaxSteps ? bMaxSteps : aMaxSteps;

  if (chunkSteps <= actualMaxSteps) {
    savedTime = chunkTime;
    actualMaxSteps -= chunkSteps;
  } else {
    let aTime = t - a * actualMaxSteps;
    let bTime = t - b * actualMaxSteps;

    if (Math.min(aTime, bTime) >= 0) {
      savedTime = Math.min(aTime, bTime);
    } else {
      if (Math.max(aTime, bTime) >= 0) {
        savedTime = Math.max(aTime, bTime);
      } else {
        savedTime = savedTime;
      }
    }
  }
  return savedTime;
}

function allianceHelp2(t, allianceSize) {
  let remainedTime = t;
  let actualMaxSteps = allianceSize > 10 ? 10 : allianceSize;
  let boostCounter = 0;
  while (boostCounter < actualMaxSteps && remainedTime > 0) {
    let savedTime = oneBoost(remainedTime, actualMaxSteps, t);
    remainedTime -= savedTime;
    boostCounter++;
  }
  console.log(remainedTime);
  return remainedTime;
}

function allianceHelp12(t, allianceSize) {
  let remainedTime = t;
  let actualMaxSteps = allianceSize > 10 ? 10 : allianceSize;
  let a = 60;
  let b = Math.floor(t * 0.1);

  let max = Math.max(a, b);
  let min = Math.min(a, b);

  let aMaxSteps = Math.floor(t / a);
  let bMaxSteps = Math.floor(t / b);

  let chunkTime =
    t - a * aMaxSteps > t - b * bMaxSteps ? b * bMaxSteps : a * aMaxSteps;
  let chunkSteps =
    t - a * aMaxSteps > t - b * bMaxSteps ? bMaxSteps : aMaxSteps;

  if (chunkSteps <= actualMaxSteps) {
    remainedTime -= chunkTime;
    let actualMaxBoost = actualMaxSteps - chunkSteps;
    while (actualMaxBoost > 0) {
      if (remainedTime - max > 0) {
        remainedTime -= max;
      } else if (remainedTime - min > 0) {
        remainedTime -= min;
      }
      actualMaxBoost--;
    }
  } else {
    let aTime = t - a * actualMaxSteps;
    let bTime = t - b * actualMaxSteps;

    if (Math.min(aTime, bTime) >= 0) {
      remainedTime = Math.min(aTime, bTime);
    } else {
      if (Math.max(aTime, bTime) >= 0) {
        remainedTime = Math.max(aTime, bTime);
      } else {
        remainedTime = remainedTime;
      }
    }
  }
  console.log(remainedTime);
  return remainedTime;
}

function allianceHelp4(sum, steps) {
  steps = steps > 10 ? 10 : steps;
  console.log(steps);
  const potentiallyEachStep = Math.floor(sum * 0.1);
  const eachStep = potentiallyEachStep < 60 ? 60 : potentiallyEachStep;
  console.log(eachStep);
  const totalSteps = steps * eachStep;
  console.log(totalSteps);
  const difference = sum - totalSteps;
  let result = difference < 0 ? 0 : difference;
  console.log('aa', result);
}
// allianceHelp(1000, 1000);
// allianceHelp4(100, 1); // 40
// allianceHelp4(90, 1); // => 30
// allianceHelp4(90, 10); // => 0
// //
// allianceHelp4(78, 2); // 0
// allianceHelp4(78, 1); // 18
// //
// // // allianceHelp(121, 2);
// allianceHelp4(121, 2); // 1

allianceHelp4(999, 11); // 9
// allianceHelp4(909, 1500);
