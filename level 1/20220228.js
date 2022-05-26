// Lv1.연습문제 - 2016년

function solution(a, b) {
  const day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const week = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  let num =
    a === 1 ? b : day.slice(0, a - 1).reduce((acc, cur) => acc + cur) + b; // slice(0,0)가 되면 오류가 나기 때문에, a-1이 0이 되는 경우를 따로 생각
  return week[num % 7]; // js는 week[-1]의 경우 undefined을 반환하기 때문에 week의 요소 순서를 바꾸고 [num % 7 - 1]을 [num % 7]로 수정
}

// 다른 사람 풀이
function solution2(a, b) {
  var date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
  // new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds) -> monthIndex의 경우 1을 나타내는 0부터 12월을 나타내는 11까지 사용
  // dateobj.toString() -> Mon Sep 08 1998 14:36:22 GMT+0900 (KST) 형식으로 반환
}
