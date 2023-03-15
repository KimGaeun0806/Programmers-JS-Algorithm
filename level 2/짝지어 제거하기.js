// LV2_2017 팁스타운: 짝지어 제거하기 - 20220820 / 20230315

// 최종 코드
function solution(s) {
  let stack = [""];
  for (let x of s) stack[stack.length - 1] === x ? stack.pop() : stack.push(x);
  return stack.length === 1 ? 1 : 0;
}

// 최종 코드2
function solution2(s) {
  const stack = [];

  for (let x of s) {
    if (stack.at(-1) === x) stack.pop();
    else stack.push(x);
  }

  return stack.length ? 0 : 1;
}
