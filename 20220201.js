// Lv1.연습문제 - 최대공약수와 최소공배수

function solution(n, m) {
  var answer = [];
  let a = 0; // a가 큰 수
  let b = 0; // b가 작은 수
  (function () {
    n > m ? ((a = n), (b = m)) : ((a = m), (b = n));
  })();

  for (let i = a + 1; i--; ) {
    if (a % i === 0 && b % i === 0) {
      answer.push(i);
      break;
    }
  } // 최대공약수

  for (let i = 1; i <= a * b; i++) {
    if (i % a === 0 && i % b === 0) {
      answer.push(i);
      break;
    }
  } // 최소공배수

  return answer;
}

// 다른 사람 풀이
function greatestCommonDivisor(a, b) {
  return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
  // Math.abs() 함수는 주어진 숫자의 절대값을 반환함
  // 재귀함수 사용
}
function leastCommonMultipleOfTwo(a, b) {
  return (a * b) / greatestCommonDivisor(a, b);
}
function solution2(a, b) {
  return [greatestCommonDivisor(a, b), leastCommonMultipleOfTwo(a, b)];
}
// 유클리드 호제법 -> 2개의 자연수 a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면 (단, a > b) a와 b의 최대공약수는 b와 r의 최대공약수와 같음
//                   이 성질에 따라 b를 r로 나눈 나머지 r1을 구하고, 다시 r을 r1로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 나누는 수가 a와 b의 최대공약수임
// a와 b의 최소공배수와 최대공약수를 곱하면 두 수의 곱인 a*b가 됨 -> 최소공배수는 (a*b) / 최소공약수

//

function solution3(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
}
return [b, ab / b];
// for ([initialization]; [condition]; [final-expression]) statement
// initialization   -> 식 또는 변수 선언
// condition        -> 매 반복마다 평가할 식. 평가 결과가 참이라면 statement를 실행함
// final-expression -> 매 반복 후 평가할 식. 다음 번 condition 평가 이전에 발생
// statement        -> 조건의 평가 결과가 참일 때 실행하는 문

// r = a % b이 0이 되면 false가 되어 for문이 끝남
