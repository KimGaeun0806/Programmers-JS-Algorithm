// LV2_연습문제: 최댓값과 최솟값 - 20220527

// 최종 코드
function solution(s) {
  let newS = s.split(' ').map((a) => a * 1);
  return `${Math.min(...newS)} ${Math.max(...newS)}`;
}

// 다른 사람 풀이
function solution2(s) {
  const arr = s.split(' ');
  return Math.min(...arr) + ' ' + Math.max(...arr);
}
