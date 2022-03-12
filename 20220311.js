// Lv1.Summer/Winter Coding(~2018) - 소수 만들기

function solution(nums) {
  let arr = [];
  nums.map((a, i) => {
    for (let j = 1; j < nums.length - i; j++) {
      for (let k = 1; k < nums.length - j - i; k++) {
        arr.push(a + nums[i + j] + nums[i + j + k]);
      }
    }
  });

  let newArr = arr.filter((e) => e % 2 !== 0);
  let leng = newArr.length;

  newArr.map((a) => {
    for (let j = 3; j <= Math.sqrt(a); j++) {
      if (a % j === 0) {
        leng--;
        break;
      } // 이부분을 if (a % j === 0) newArr.splice(i, 0)로 하면 x
    }
  });
  return leng;
}

// 다른 사람 풀이
function primecheck(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
function solution2(nums) {
  var cnt = 0;
  for (var i = 0; i < nums.length - 2; i++) {
    for (var j = i + 1; j < nums.length - 1; j++) {
      for (var w = j + 1; w < nums.length; w++) {
        if (primecheck(nums[i] + nums[j] + nums[w])) {
          cnt++;
        }
      }
    }
  }
  return cnt;
}
