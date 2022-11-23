// LV2_연습문제: JadenCase 문자열 만들기 - 20220703

// 최종 코드
function solution(s) {
  return s.toLowerCase().replace(/\b\w/g, (a) => a.toUpperCase());
}
