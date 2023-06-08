// LV1_연습문제 - 카드 뭉치

// 20230608
// 시간재고 푼 첫 풀이 - 약 3분
function solution(cards1, cards2, goal) {
  for (let x of goal) {
    if (cards1[0] === x) cards1.shift();
    else if (cards2[0] === x) cards2.shift();
    else return "No";
  }
  return "Yes";
}
