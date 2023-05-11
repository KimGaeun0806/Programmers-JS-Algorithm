// LV2_연습문제: 멀리 뛰기

// 20230511
// 시간재고 푼 첫 풀이 - 약 1시간 14분
function solution(n) {
  let previous = 1;
  let current = 1;

  for (let i = 1; i < n; i++) {
    let saveCurrent = current;
    current += previous % 1234567;
    previous = saveCurrent;
  }

  return current % 1234567;

  // 실패한 처음 풀이에서 1시간 소요 후, 새로운 풀이에 14분 소요
  // 5개까지 직접 적어보고 규칙성 발견한 후 풀었음
}

// 실패한 풀이
function factorial(n) {
  let answer = 1;
  for (let i = 2; i <= n; i++) {
    answer *= i;
  }
  return answer;
}

function solutio2(n) {
  let answer = 1;
  for (let i = 1; i <= n / 2; i++) {
    answer += factorial(n - i) / (factorial(i) * factorial(n - 2 * i));
    answer = answer % 1234567;
  }
  return answer;

  // 팩토리얼 사용해서 풀었으나 실패
  // 정수 오버플로우 문제로 예상됨
}
