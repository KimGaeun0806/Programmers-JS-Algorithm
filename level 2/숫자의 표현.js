// LV2_연습문제: 숫자의 표현 - 20230225

// 최종 풀이
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && (n % 2 || (n / i) % 2)) answer++;
  }

  return answer;
}
