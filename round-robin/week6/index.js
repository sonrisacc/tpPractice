function allianceHelp(t, allianceSize) {
  let standard = 60;
  let option = Math.floor(t * 0.1);

  let a = standard * allianceSize > option * allianceSize ? option : standard;
  let b = standard * allianceSize > option * allianceSize ? standard : option;

  let aSum = a * allianceSize;
  let bSum = b * allianceSize;
  console.log(t, bSum);

  let remainedTime = 0;
  if (t === 0) return remainedTime;
  if (t > aSum && t < bSum) {
    let aMaxSteps = Math.floor(t / a);
    let bMaxSteps = Math.floor(t / b);
    console.log('bMaxSteps', bMaxSteps);
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
    console.log('t, bSum', t, bSum);
    remainedTime = t - bSum;
  }
  if (t <= aSum) remainedTime = t - Math.floor(t / a) * a;
  console.log('1', remainedTime);
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
  oneBoost(t - savedTime, actualMaxSteps, t);
}

function allianceHelp2(t, allianceSize) {
  let remainedTime = t;
  let actualMaxSteps = allianceSize;

  return remainedTime;
}
allianceHelp(1000, 1000);
allianceHelp2(1000, 1000);

allianceHelp(121, 2);
allianceHelp2(121, 2);

allianceHelp(909, 500);
allianceHelp2(909, 1500);
