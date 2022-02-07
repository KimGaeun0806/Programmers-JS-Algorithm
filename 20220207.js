// Lv1.연습문제 - 자릿수 더하기

// 첫 번째 풀이
function solution1(n) {
  return String(n)
    .split('')
    .map((v) => +v)
    .reduce((a, b) => a + b);
  // 알아보기 쉽게 a, b가 아닌 acc, cur과 같이 쓰는 게 좋을 것 같음
}

// 두 번째 풀이
function solution2(n) {
  let num = [];
  do {
    num.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);
  return num.reduce((a, b) => a + b);
}

// 다른 사람 풀이
function solution3(n) {
  return (n + '').split('').reduce((acc, curr) => acc + parseInt(curr), 0);
  // initialValue(callback의 최초 호출에서 첫 번째 인수에 제공하는 값)를 0으로 지정 -> acc 초기값을 정수화
}

//

function solution4(n) {
  var sum = 0;
  do {
    sum += n % 10;
    n = Math.floor(n / 10);
  } while (n > 0);

  return sum;
}

// 속도 테스트 코드
// let start = performance.now();
// solution1(555556117);
// let end = performance.now();
// console.log((end - start) / 1000);

// let start2 = performance.now();
// solution2(555556117);
// let end2 = performance.now();
// console.log((end2 - start2) / 1000);
