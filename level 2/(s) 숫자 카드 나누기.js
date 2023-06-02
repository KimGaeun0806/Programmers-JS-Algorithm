// LV2_연습문제 - 다른 사람의 풀이

// 20230602
// 1시간 내 풀이 실패

// 다른 사람 풀이
function solution(arrayA, arrayB) {
  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);

  const findA = (curr, target) => {
    for (let i = curr[0]; i > 0; i--) {
      if (curr.every((v) => v % i === 0) && !target.some((v) => v % i === 0))
        return i;
    }
    return 0;
  };
  return Math.max(findA(arrayA, arrayB), findA(arrayB, arrayA));

  // Array.prototype.every() -> 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트. Boolean 값 반환
  // Array.prototype.some() -> 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트. Boolean 값 반환
}

// 런타임 에러 났던 풀이
function solution(arrayA, arrayB) {
  const canAllDivide = (num, arr) => {
    for (let x of arr) {
      if (x % num) return false;
    }
    return true;
  };

  const cantAllDivide = (num, arr) => {
    for (let x of arr) {
      if (!(x % num)) return false;
    }
    return true;
  };

  const func = (arrA, arrB) => {
    let min = Math.min(...arrA);
    for (let i = min; i > 1; i--) {
      if (canAllDivide(i, arrA) && cantAllDivide(i, arrB)) return i;
    }
    return 0;
  };

  return Math.max(func(arrayA, arrayB), func(arrayB, arrayA));
}
