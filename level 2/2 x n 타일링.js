// LV2_연습문제: 2 x n 타일링 - 20220829

// 최종 풀이
function solution(n) {
  let answer = 0;
  let prev = 1;
  let twicePrev = 0;

  for (let i = 0; i < n; i++) {
    answer = (prev + twicePrev) % 1000000007;
    twicePrev = prev;
    prev = answer;
  }
  return answer;
}

// 실패한 풀이
function solution2(n) {
  let answer = 0;

  for (let i = 1; i < n / 2; i++) {
    let first = Array.from({ length: i }, (item, index) => n - i - index);
    let second = Array.from({ length: i }, (item, index) => 1 + index);
    answer += first.reduce((p, c) => p * c) / second.reduce((p, c) => p * c);
  }

  n % 2 === 0 ? (answer += 2) : answer++;
  return answer % 1000000007;
}
