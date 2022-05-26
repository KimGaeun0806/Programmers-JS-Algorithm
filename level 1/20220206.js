// Lv1.연습문제 - 자연수 뒤집어 배열로 만들기

function solution(n) {
  return (n + '')
    .split('')
    .reverse()
    .map((v) => +v);
}

// 다른 사람 풀이
function solution2(n) {
  // 문자풀이보다 숫자풀이가 더 빠름
  var arr = [];
  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);
  return arr;
  // do...while 문은 테스트 조건이 거짓으로 평가될 때까지 지정된 구문을 실행하는 루프를 만듦
  // do...while 문은 구문이 실행된 뒤에 테스트 조건이 평가되므로 구문이 무조건 한 번은 실행됨. while문과 비슷하지만 첫 번째 반복문 실행 때 실행 순서가 다른 것

  // Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환함
}
