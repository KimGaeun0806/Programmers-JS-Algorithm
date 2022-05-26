// Lv1.연습문제 - 제일 작은 수 제거하기

function solution(arr) {
  let newArr = arr.filter((e) => e !== Math.min(...arr));
  return newArr.length ? newArr : [-1];
  // spread 연산자 (전개 구문) -> 객체 혹은 배열을 펼칠 수 있음
  // Math.min() 함수는 주어진 숫자들 중 가장 작은 값을 반환함
  // Math.min(1, 2)와 같이 배열이 아닌 값들이 들어가야 하기 때문에 spread 연산자로 배열을 펼침

  // filter() 메소드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환함

  // 0이 아닌 모든 숫자는 true로 반환됨
}

// 다른 사람 풀이
function solution2(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1); // 배열에서 가장 작은 값 제거
  if (arr.length < 1) return [-1];
  return arr;
  // indexOf() 메소드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환함
  // splice() 메소드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용 변경
  // array.splice(start[, deleteCount[, item1[, item2[, ...]]]]) -> start는 배열의 변경을 시작할 인덱스, deleteCount(Optional)은 배열에서 제거할 요소의 수, item(Optional)은 배열에 추가할 요소
}
