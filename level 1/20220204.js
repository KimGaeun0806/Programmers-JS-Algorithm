// Lv1.연습문제 - 정수 제곱근 판별

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
  // Math.sqrt() 함수는 숫자의 제곱근을 반환함
  // Number.isInteger() 메소드는 주어진 값이 정수인지 판별함. 매개변수의 값이 정수면 true, 아니면 false를 반환. 값이 NaN이거나 Infinity여도 false 반환
}

// 다른 사람 풀이
function solution2(n) {
  var result = 0;
  var n = Math.sqrt(n);
  result = Number.isInteger(n) ? Math.pow(n + 1, 2) : -1;
  return result;
  // Math.pow() 함수는 base^exponent처럼 base에 exponent를 제곱한 값을 반환함
  // Math.pow(base, exponent) -> base는 밑 값, exponent는 지수
}
