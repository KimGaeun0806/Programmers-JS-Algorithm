// Lv1.완전탐색 - 모의고사

function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const f = (arr) => {
    return answers
      .map((a, i) => (a === arr[i % arr.length] ? 1 : 0))
      .filter((e) => e === 1).length;
  };

  const newArr = [f(first), f(second), f(third)];

  return newArr
    .map((a, i) => {
      if (a === Math.max(...newArr)) {
        return i + 1;
      }
    })
    .filter((e) => e != null);
  // ((e) => e != null)에서 !==가 아닌 !=를 사용해야 함
}

function solution2(answers) {
  const arr = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const numArr = [0, 0, 0];
  const answer = [];

  answers.forEach((a, i) => {
    arr.forEach((b, j) => {
      if (a === b[i % b.length]) numArr[j]++;
    });
  });

  numArr.forEach((a, i) => {
    if (a === Math.max(...numArr)) answer.push(i + 1);
  });

  return answer;
}

// 다른 사람 풀이
function solution3(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }
  return answer;
}
