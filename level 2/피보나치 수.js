// LV2_연습문제: 피보나치 수 - 20221123 / 20230303

// 최종 코드
function solution(n) {
  const stack = [0, 1];

  for (let i = 0; i < n - 1; i++) {
    stack.push((stack.at(-1) + stack.at(-2)) % 1234567);
  }

  return stack.at(-1);
}

// 최종 코드2
function solution2(n) {
  let prev = 1;
  let prevprev = 1;

  for (let i = 3; i <= n; i++) {
    const newPrev = prev;
    prev = (prev + prevprev) % 1234567;
    prevprev = newPrev % 1234567;
  }

  return prev;
}
