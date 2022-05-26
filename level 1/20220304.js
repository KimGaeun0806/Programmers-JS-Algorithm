// Lv1.월간 코드 챌린지 시즌2 - 약수의 개수와 덧셈

function solution(left, right) {
  const arr = Array.from(new Array(right - left + 1), (x, i) => left + i);
  const newArr = arr.map((a) => (Math.sqrt(a) % 1 === 0 ? -a : +a));
  return newArr.reduce((acc, cur) => acc + cur);

  // 제곱수의 약수의 개수는 홀수이고, 제곱수가 아닌 경우는 짝수임

  // Array.from() 메소드는 유사 배열 객체나 반복 가능한 객체를 얕게 복사해 새로운 Array 객체를 만듦
  // Array.from(arrayLike[, mapFn[, thisArg]]) -> arrayLike는 배열로 변환하고자 하는 유사 배열 객체나 반복 가능한 객체, mapFn은 배열의 모든 요소에 대해 호출할 맵핑 함수. 반환값은 새로운 Array 인스턴스.\
  // new Array(right - left + 1)로, 길이가 right - left + 1인 배열 만듦. 그리고 (x, i) => left + i로 left부터 1씩 커지게 함.

  // n이 정수인지 판별하려면 n % 1 === 0 말고도 Number.isInteger(n)을 사용할 수 있음
}

// 다른 사람 풀이
function solution2(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
