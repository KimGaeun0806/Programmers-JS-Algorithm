// LV2_2017 팁스다운: 예상 대진표 - 20230414

// 최종 코드
function solution(n, a, b) {
  let answer = 0;

  while (true) {
    answer++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    if (a === b) return answer;
  }
}
