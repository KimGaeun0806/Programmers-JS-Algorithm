// LV2_연습문제: 다음 큰 숫자

// 최종 코드
function solution(n) {
  const oneNum = n.toString(2).replace(/0/g, "").length;

  while (true) {
    n++;
    if (n.toString(2).replace(/0/g, "").length === oneNum) return n;
  }
}
