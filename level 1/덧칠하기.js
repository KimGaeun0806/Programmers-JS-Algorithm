// LV1_연습문제 - 덧칠하기

// 20230529
// 시간재고 푼 첫 풀이 - 약 5분
function solution(n, m, section) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (section.includes(i)) {
      answer++;
      i += m - 1;
    }
  }
  return answer;
}
