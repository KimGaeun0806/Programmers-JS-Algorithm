// LV2_Summer/Winter Coding(~2018): 점프와 순간 이동 - 20230422

// 최종 코드
function solution(n) {
  let answer = 0;

  while (n > 1) {
    if (n % 2) {
      n -= 1;
      answer++;
    } else n /= 2;
  }

  return answer + 1;
}
