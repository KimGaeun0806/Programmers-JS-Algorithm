// Lv1.연습문제 - 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
  let newArr = arr.filter((a) => a % divisor === 0).sort((a, b) => a - b);
  return newArr.length === 0 ? [-1] : newArr;
  // sort()에서 오름차순 정렬은 ((a, b) => a - b), 내림차순 정렬은 ((a, b) => b - a)
}
