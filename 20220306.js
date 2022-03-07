// Lv1.찾아라 프로그래밍 마에스터 - 폰켓몬

function solution(nums) {
  const leng = nums.length / 2;
  const newLeng = nums.filter((e, i) => nums.indexOf(e) === i).length;
  return newLeng >= leng ? leng : newLeng;
  // nums.filter((e, i) => nums.indexOf(e) === i)로 배열 nums의 중복 제거
}

// 다른 사람 풀이
function solution2(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];
  return arr.length > max ? max : arr.length;
  // const arr = [...new Set(nums)]로 배열 nums의 중복 제거
}
