// Lv1.월간 코드 챌린지 시즌2 - 음양 더하기

function solution(absolutes, signs) {
  return absolutes
    .map((a, i) => {
      return signs[i] === true ? a : -a;
    })
    .reduce((a, c) => a + c);
}

// 다른 사람 풀이
function solution2(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
