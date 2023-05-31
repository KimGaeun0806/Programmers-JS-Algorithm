// LV2_연습문제- 혼자 놀기의 달인

// 20230531
// 시간재고 푼 첫 풀이 - 약 26분
function solution(cards) {
  let arr = [];
  let tempArr = [];
  let carIdx = 0;

  while (true) {
    let cur = cards[carIdx];

    if (!cur) {
      arr.push(tempArr.length);
      tempArr = [];
      let num = 0;
      for (let x of cards) {
        if (x) break;
        num++;
      }
      if (num >= cards.length) break; // cards.length - 1에서 고쳐서 해결
      carIdx = num;
      continue;
    }

    tempArr.push(cur);
    cards[carIdx] = 0;
    carIdx = cur - 1;
  }

  if (arr.length === 1) return 0; // 예외 주의하기
  arr.sort((a, b) => b - a);
  return arr[0] * arr[1];
}
