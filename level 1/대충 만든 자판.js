// LV1_연습문제: 대충 만든 자판 - 20230422

// 최종 코드
function solution(keymap, targets) {
  return targets.map((a) => {
    let result = 0;

    for (let x of a) {
      let num = 200;

      for (let y of keymap) {
        if (y.indexOf(x) <= num && y.indexOf(x) > -1) num = y.indexOf(x);
      }

      if (num === 200) {
        result = -1;
        break;
      }

      result += num + 1;
    }

    return result;
  });
}
