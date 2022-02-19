// Lv1.연습문제 - 두 정수 사이의 합

// 첫 번째 풀이
function solution(a, b) {
  let sub = Math.abs(b - a);
  return Math.min(a, b) * (sub + 1) + (sub * (sub + 1)) / 2;
}

// 두 번째 풀이
function solution2(a, b) {
  const min = Math.min(a, b) - 1;
  const max = Math.max(a, b);
  return (max * (max + 1)) / 2 - (min * (min + 1)) / 2;
  // 가우스 덧셈 공식 -> 1부터 n까지의 합 = n(n+1)/2
}

// 다른 사람 풀이
function solution3(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
  // (양 끝의 합) * (양 끝의 합의 개수)
}
