// LV1_연습문제 - 콜라 문제

// 20230611
// 시간재고 푼 첫 풀이 - 약 9분
function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    let newBot = Math.floor(n / a);
    answer += newBot * b;
    n -= newBot * a;
    n += newBot * b;
  }

  return answer;
}
