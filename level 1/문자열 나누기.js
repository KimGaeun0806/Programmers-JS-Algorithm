// LV1_연습문제: 문자열 나누기

// 20230315 풀이
function solution(s) {
  let first = s[0];
  let answer = 0;
  let arr = [0, 0];

  for (let i = 0; i < s.length; i++) {
    if (arr[0] === arr[1]) {
      first = s[i + 1];
      arr = [0, 0];
      answer++;
    }
    s[i] === first ? arr[0]++ : arr[1]++;
  }

  return answer;
}
