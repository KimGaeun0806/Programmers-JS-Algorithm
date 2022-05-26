// Lv1.연습문제 - 같은 숫자는 싫어

function solution(arr) {
  return arr.filter((a, b) => arr[b - 1] !== arr[b]);
  // a는 처리할 현재 요소, b는 처리할 현재 요소의 인덱스
}

// 다른 사람 풀이
function solution2(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
  // arr[index] 대신 val 사용
}
