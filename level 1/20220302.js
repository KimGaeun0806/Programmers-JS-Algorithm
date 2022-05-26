// Lv1.Summer/Winter Coding(~2018) - 예산

function solution(d, budget) {
  let arr = d.sort((a, b) => a - b);
  let num = 0;
  let newArr = arr
    .map((a) => {
      num += a;
      if (num <= budget) {
        return num;
      }
    })
    .filter((e) => e !== undefined);
  return newArr.length;
}

// 다른 사람 풀이
function solution2(d, budget) {
  d.sort((a, b) => a - b);
  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();
  return d.length;
}

//

function solution3(d, budget) {
  return ~(
    ~d
      .sort((a, b) => a - b)
      .map((v) => (budget -= v))
      .findIndex((v) => v < 0) || ~d.length
  );
  // Bitwise NOT(~) -> 피연산자의 비트를 반전함. 예를 들어 a = 5 (5는 00000000000000000000000000000101)라면, ~a = -6 (-6은 11111111111111111111111111111010)이 됨
}

//

function solution4(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}
