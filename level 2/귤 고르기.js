// LV2_연습문제: 귤 고르기 - 20221128

// 최종 코드
function solution(k, tangerine) {
  const obj = {};
  let num = 0;
  let answer = 0;

  tangerine.forEach((a) => (obj[a] ? obj[a]++ : (obj[a] = 1)));
  const arr = Object.values(obj);
  arr.sort((a, b) => b - a);

  for (let x of arr) {
    num += x;
    answer++;
    if (num >= k) return answer;
  }
}
