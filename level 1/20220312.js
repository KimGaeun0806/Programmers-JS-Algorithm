// Lv1.월간 코드 챌린지 시즌1 - 내적

function solution(a, b) {
  return a.map((a, i) => a * b[i]).reduce((a, b) => a + b);
}
