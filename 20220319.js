// Lv1.2021 Dev-Matching:웹 백엔드 개발자 - 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  let count = 0;
  win_nums.map((a) => {
    if (lottos.indexOf(a) >= 0) {
      count++;
    }
  });
  let zeroCount = lottos.filter((e) => e === 0).length;
  return [
    7 - (count + zeroCount) === 7 ? 6 : 7 - (count + zeroCount),
    7 - count === 7 ? 6 : 7 - count,
  ];
}

// 다른 사람 풀이
function solution2(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}

//

function solution3(lottos, win_nums) {
  const answer = [];
  const min = lottos.filter((n) => win_nums.includes(n)).length;
  const max = lottos.filter((n) => n === 0).length + min;

  max > 1 ? answer.push(7 - max) : answer.push(6);
  min > 1 ? answer.push(7 - min) : answer.push(6);

  return answer;
}
