// LV3_Summer/Winter Coding(~2018): 숫자 게임

// 20230623
// 시간재고 푼 첫 풀이 - 약 18분
function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  A.forEach((a) => {
    for (let i = B.length; i >= 0; i--) {
      if (B[i] <= a) B.pop();
      if (B[i] > a) {
        answer++;
        B.pop();
        break;
      }
    }
  });

  return answer;
}
