// Lv1.월간 코드 챌린지 시즌3 - 나머지가 1이 되는 수 찾기

function solution(n) {
  for (let x = 0; x < n; x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

// 다른 사람 풀이
function solution2(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}
