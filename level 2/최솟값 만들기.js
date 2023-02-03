// LV2_연습문제: 최솟값 만들기

// 최종 코드
function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  A.forEach((_, i) => (answer += A[i] * B[i]));
  return answer;
}

// 최종 코드 2
function solution2(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.map((a, i) => a * B[i]).reduce((p, c) => p + c);
}
