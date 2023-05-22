// LV2_연습문제: 연속된 부분 수열의 합

// 20230522
// 힌트 보고 푼 풀이
function solution(sequence, k) {
  let [left, right] = [sequence.length - 1, sequence.length - 1];

  for (let i = sequence.length - 1; i >= 0; i--) {
    let num = sequence.at(-1);

    while (true) {
      if (num === k) {
        if (sequence[left] === sequence[right]) {
          let first = sequence.indexOf(sequence[left]);
          return [first, first + (right - left)];
        }
        return [left, right];
      } else if (num > k) {
        num -= sequence[right];
        right--;
      } else {
        left--;
        num += sequence[left];
      }
    }
  }

  // 원래 풀이에서 테케 몇 개 시간초과를 해결하지 못했음
  // 앞뒤로 인덱스를 추가, 삭제하는 방법으로 해결함 (투포인터 알고리즘)
}
