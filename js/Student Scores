let subjects = ["Math","Physics","Chemistry","Biology","English","History",];

let arr = [100, 60, 58, 60, 70, 59];
let arr1 = [58, 60, 58, 60, 70, 59];
let arr2 = [58, 60, 58, 60, 70, 59];
let arr3 = [100, 60, 58, 60, 70, 59];
let arr4 = [58, 60, 58, 60, 70, 59];
let arr5 = [58, 60, 58, 60, 70, 59];

let allarrr1 = [arr, arr1, arr2, arr3, arr4, arr5];

function ahma2d(allarrr) {
  for (let i = 0; i < allarrr.length; i++) {
    let need = 2;
    console.log(`\n Student ${i + 1}:`);

    for (let j = 0; j < allarrr[i].length; j++) {
      let score = allarrr[i][j];
      let subject = subjects[j];

      if (score >= 60) {
        console.log(`${subject}: ${score} ✅ Passed`);
      } else {
        let deficit = 60 - score;
        if (need >= deficit) {
          need -= deficit;
          console.log(`${subject}: ${score} ✅ Passed (Compensated)`);
        } else {
          console.log(`${subject}: ${score} ❌ Failed`);
        }
      }
    }
  }
}

ahma2d(allarrr1);

