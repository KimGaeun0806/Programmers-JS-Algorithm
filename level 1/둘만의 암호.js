// LV1_연습문제: 둘만의 암호 - 20230414

// 최종 코드
function solution(s, skip, index) {
  const char = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .filter((a) => !skip.includes(a));

  let answer = "";

  for (let x of s) {
    let i = (char.indexOf(x) + index) % char.length;
    answer += char[i];
  }

  return answer;
}
