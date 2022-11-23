// LV2_탐욕법(Greedy): 큰 수 만들기 - 20220910

// 최종 풀이
function solution(number, k) {
  let newNum = number.split("").reverse();
  let num = 0;

  for (let i = newNum.length; i >= 0; i--) {
    if (newNum[i] < newNum[i - 1]) {
      newNum.splice(i, 1);
      num++;
      i++;
    }
    if (num === k) break;
  }

  if (num < k) newNum.splice(0, k - num);
  return newNum.reverse().join("");
}
