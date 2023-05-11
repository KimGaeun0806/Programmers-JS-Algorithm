// LV2_연습문제: N개의 최소공배수

// 20230510
// 시간재고 푼 첫 풀이
function solution(arr) {
  arr.sort((a, b) => a - b);
  let answer = 1;

  arr.forEach((e) => {
    let current = e;

    if (current % answer) {
      let num = 1;
      while (current % answer) {
        num++;
        current = e * num;
      }
    }
    answer = current;
  });

  return answer;
}
