// LV3_연습문제: 최고의 집합 - 20230130

// 최종 풀이
function solution(n, s) {
  const rest = s % n;
  const share = Math.floor(s / n);
  let answer = [];

  for (let i = 0; i < n; i++) {
    answer.push(i < rest ? share + 1 : share);
  }

  if (s < n) return [-1];
  return answer.sort((a, b) => a - b);
}
