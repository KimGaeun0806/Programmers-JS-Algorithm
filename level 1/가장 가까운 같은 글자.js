// LV1_연습문제: 가장 가까운 같은 글자

// 20230109 풀이
function solution(s) {
  const stack = [];
  const answer = [];

  s.split("").forEach((a) => {
    stack.unshift(a);
    answer.push(stack.indexOf(a, 1));
  });

  return answer;
}
