// LV2_연습문제: JadenCase 문자열 만들기 - 20220703 / 20230127

// 최종 코드
function solution(s) {
  return s.toLowerCase().replace(/\b\w/g, (a) => a.toUpperCase());
}

// 최종 코드2
function solution2(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((a) => a.replace(a[0], a[0]?.toUpperCase()))
    .join(" ");
}
