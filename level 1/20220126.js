// Lv1.연습문제 - x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

// 다른 사람 풀이
function solution2(x, n) {
  return Array(n) // n개의 길이를 갖는 배열 생성
    .fill(x)
    .map((v, i) => (i + 1) * v); // v -> 처리할 현재 요소, i -> 처리할 현재 요소의 인덱스

  // fill() 메소드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채움
  // arr.fill(value[, start[, end]]) -> 매개변수 value는 배열을 채울 값, start는 시작 인덱스(기본 값 0), end는 끝 인덱스(기본 값 this.length). start와 end 인자는 선택 사항

  // map() 메소드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환함
  // map은 callback 함수를 각각의 요소에 대해 한 번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만듦
  // callback 함수는 호출될 때 대상 요소의 값(currentValue), 그 요소의 인덱스(index), map을 호출한 원본 배열(array) 3개의 인수를 전달받음 (index와 array는 optional)
}
