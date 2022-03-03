// Lv1. 월간 코드 챌린지 시즌1 - 3진법 뒤집기

function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
  // reverse()는 배열에만 적용가능함
  // toString()은 10진수를 다른 진수로 변환할 때 사용
  // n진수를 10진수로 변환할 때는 parseInt(string, n)과 같이 사용. n은 string의 진수를 나타내는 2부터 36까지의 정수.
}

// 다른 사람 풀이
function solution2(n) {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
}
