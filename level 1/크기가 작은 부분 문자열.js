// LV1_연습문제: 크기가 작은 부분 문자열

// 20230125 풀이
function solution(t, p) {
  const arr = [];

  for (let i = 0; i < t.length - p.length + 1; i++) {
    arr.push(t.slice(i, i + p.length));
  }

  return arr.filter((a) => +a <= +p).length;
}
