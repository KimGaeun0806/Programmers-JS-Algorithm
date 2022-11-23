// LV2_해시: 위장 - 20220715

// 최종 코드
function solution(clothes) {
  let numArr = [];
  clothes
    .map((a) => a[1])
    .sort()
    .forEach((a, i, arr) => {
      a !== arr[i - 1] ? numArr.push(2) : numArr[numArr.length - 1]++;
    });
  return numArr.reduce((acc, cur) => acc * cur) - 1;
}
