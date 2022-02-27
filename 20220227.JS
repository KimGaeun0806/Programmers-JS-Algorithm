// lV1. 위클리 챌린지 - 최소 직사각형
function solution(sizes) {
  let newSizes = sizes
    .map((a) => a.sort((b, c) => c - b))
    .sort((a, b) => b[0] - a[0]);
  let smallNum = newSizes.map((a) => a[1]);
  return Math.max(...smallNum) * newSizes[0][0];
}

// 다른 사람 풀이
function solution2(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  return hor * ver;
  // reduce() 메소드는 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고 하나의 결과값 반환
  // arr.reduce(callback[, initialValue]) -> callback은 배열의 각 요소에 대해 실행할 함수, initialValue(Optional)은 callback의 최초 호출에서 첫 번째 인수에 제공하는 값
}

//

function solution3(sizes) {
  for (let size of sizes) {
    size.sort((a, b) => a - b);
  }
  const a = sizes.sort((a, b) => b[0] - a[0])[0][0];
  const b = sizes.sort((a, b) => b[1] - a[1])[0][1];

  return a * b;
}
