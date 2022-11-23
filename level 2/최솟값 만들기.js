// LV2_연습문제: 최솟값 만들기

// 최종 코드
function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  A.forEach((_, i) => (answer += A[i] * B[i]));
  return answer;
}
