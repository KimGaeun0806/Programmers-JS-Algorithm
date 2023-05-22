// LV2_연습문제 - 숫자 변환하기

// 20230521
// 1시간 내 풀이 실패

// 다른 사람 풀이
function solution(x, y, n) {
  let count = 0;
  let test = [x];

  if (x === y) return 0;

  while (true) {
    count++;

    const set = new Set();
    test.forEach((item) => {
      if (item + n <= y) set.add(item + n);
      if (item * 2 <= y) set.add(item * 2);
      if (item * 3 <= y) set.add(item * 3);
    });

    if (set.size === 0) return -1;

    if (set.has(y)) {
      return count;
    }

    test = set;
  }

  // 반복문 한 번 돌릴때마다 답이 있는지 체크함 -> 가장 빨리 나오는 답을 효율적으로 찾을 수 있음
}

// 다른 사람 풀이 2
function solution(x, y, n) {
  if (x >= y) return 0;
  const dp = Array(y + 1).fill(Infinity);
  dp[x] = 0;
  for (let i = x + 1; i < y + 1; i++) {
    if (x <= i - n) dp[i] = Math.min(dp[i], dp[i - n] + 1);
    if (i % 2 === 0 && x <= i / 2) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0 && x <= i / 3) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }

  return dp[y] === Infinity ? -1 : dp[y];
}

// 다른 사람 풀이 3
function solution(x, y, n) {
  if (x === y) return 0;
  const dp = {};
  dp[x] = 0;
  let data = [x];
  while (data.length) {
    const newData = [];
    for (const d of data) {
      for (const e of [d + n, d * 2, d * 3]) {
        if (e > y || dp[e]) continue;
        if (e === y) return dp[d] + 1;
        dp[e] = dp[d] + 1;
        newData.push(e);
      }
    }
    data = newData;
  }
  return -1;
}

// 실패한 기존 풀이
function solution(x, y, n) {
  let answer = 999;

  const func = (num, idx) => {
    if (!Number.isInteger(num) || num < 0) return;
    if (num < x) return;

    if (num === x) {
      if (idx < answer) {
        answer = idx;
        return;
      }
    }

    let three = num / 3;
    let two = num / 2;
    let plus = num - n;

    func(three, idx + 1);
    func(two, idx + 1);
    func(plus, idx + 1);
  };

  func(y, 0);

  if (answer === 999) return -1;
  return answer;

  // x부터 y로 증가 -> y부터 x로 감소하는 것으로 변경 (이 경우 정수가 아닌 것들을 바로 걸러낼 수 있음)
  // 배열과 push 대신 변수 사용으로 변경
  // 했지만 시간 초과 해결하지 못했음
}
