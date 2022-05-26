// Lv1.연습문제 - 문자열을 정수로 바꾸기

function solution(s) {
  return s[0] === /[-]/ ? s - s * 2 : +s;
}

// 다른 사람 풀이
function solution2(s) {
  return s / 1;
  // 문자열과 숫자를 사칙연산하면 숫자가 나옴
}

//

function solution3(s) {
  return Number(s);
  // Number(value)와 같이 사용하면 문자열이나 다른 값을 Number 타입으로 변환함
}
