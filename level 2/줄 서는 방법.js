// LV2_연습문제: 줄 서는 방법

// 20230603
// 시간재고 푼 첫 풀이 - 약 1시간
function solution(n, k) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let answer = [];
  let numArr = [1];

  let num = 1;
  for (let i = 2; i <= n; i++) {
    num *= i;
    numArr.push(num);
  }

  for (let i = numArr.length - 2; i >= 0; i--) {
    let cur = numArr[i];
    let a = Math.ceil(k / cur) - 1;
    if (!k) a = arr.length - 1;
    k = k % cur;
    answer.push(arr[a]);
    arr.splice(a, 1);
  }

  answer.push(arr[0]);
  return answer;
}

// 다른 사람 풀이
const factorial = (n) =>
  Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cur) => acc * cur);

function solution(n, k) {
  let answer = [];
  const nums = Array.from({ length: n }, (_, i) => i + 1);

  for (let i = n - 1; i > 0; i--) {
    const q = Math.ceil(k / factorial(i));
    answer.push(nums.splice(q - 1, 1)[0]);
    const r = k % factorial(i);
    k = r;
  }

  answer.push(nums[0]);

  return answer;
}
