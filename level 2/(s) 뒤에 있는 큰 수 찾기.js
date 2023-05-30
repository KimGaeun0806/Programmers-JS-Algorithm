// LV2_연습문제 - 뒤에 있는 큰 수 찾기

// 20230530
// 1시간 내 풀이 실패

// 다른 사람 풀이
function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);
  const stack = [];
  for (let i = 0; i < numbers.length; i++) {
    while (stack && numbers[stack.at(-1)] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
}

// 시간 초과 났던 풀이
function solution(numbers) {
  let arr = [];
  for (let i = 1; i < numbers.length; i++) {
    let num = 0;
    let isPushed = false;
    for (let j = 0; j < numbers.length - i; j++) {
      if (numbers[i + num] > numbers[i - 1]) {
        arr.push(numbers[i + num]);
        isPushed = true;
        break;
      }
      num++;
    }
    if (!isPushed) arr.push(-1);
  }
  arr.push(-1);
  return arr;
}
