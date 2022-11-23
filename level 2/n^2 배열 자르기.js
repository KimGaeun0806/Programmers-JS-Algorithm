// LV2_월간 코드 챌린지 시즌3: n^2 배열 자르기 - 20220915

// 최종 풀이
function solution(n, left, right) {
  return Array.from({ length: right - left + 1 }, (_, i) => {
    let index = i + left;
    let a = (index + 1) % n === 0 ? n : (index + 1) % n;
    let b = Math.floor(index / n) + 1;
    return a < b ? b : a;
  });
}

// 최종 풀이2
function solution2(n, left, right) {
  let array = [];
  for (let i = left; i <= right; i++) {
    const a = i % n;
    const b = Math.floor(i / n);
    array.push((a < b ? b : a) + 1);
  }
  return array;
}

// 런타임 에러 난 풀이
function solution3(n, left, right) {
  return (array = Array.from({ length: n * n }, (_, i) => {
    let a = (i + 1) % n === 0 ? n : (i + 1) % n;
    let b = Math.floor(i / n) + 1;
    return a < b ? b : a;
  }).slice(left, right + 1));
}
