// Lv1.연습문제 - 소수 찾기

function solution(n) {
  let arr = new Array(n + 1).fill(true);
  let sqrtN = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= sqrtN; i++) {
    for (let j = 2; j * i <= n; j++) {
      // j <= n이 아니라 j * i <= n으로 바꿈으로써 효율성 문제 해결
      if (arr[i * j] === true) {
        arr[i * j] = false;
      }
    }
  }

  let arr2 = arr.filter((a) => a === true);
  return arr2.length - 2;

  // 에라토스테네스의 체 -> 1. 2~n까지의 수가 있음
  //                       2. 2부터 n의 제곱근(루트n)까지의 소수의 배수들을 제외시키면 소수만 남음
}

// 다른 사람 풀이
function solution2(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}
