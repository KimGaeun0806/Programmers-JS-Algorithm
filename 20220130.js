// Lv1.연습문제 - 평균 구하기

function solution(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
  // a는 누산기(acc), b는 현재 값(cur). 누산기는 콜백의 반환값을 누적함 -> 배열의 요소들을 모두 더함
}
