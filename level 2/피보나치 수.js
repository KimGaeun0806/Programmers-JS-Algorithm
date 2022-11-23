// LV2_연습문제: 피보나치 수 - 20221123

// 최종 코드
function solution(n) {
  const stack = [0, 1];

  for (let i = 0; i < n - 1; i++) {
    stack.push((stack.at(-1) + stack.at(-2)) % 1234567);
  }

  return stack.at(-1);
}
