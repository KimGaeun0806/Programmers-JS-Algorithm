// LV2_연습문제: 124 나라의 숫자 - 20220925

// 최종 풀이
function solution(n) {
  let arr = [];

  while (n > 0) {
    if (n % 3) arr.unshift(n % 3);
    else {
      arr.unshift(4);
      n -= 1;
    }
    n = Math.floor(n / 3);
  }

  return arr.join("");
}
