// LV2_연습문제 - 시소 짝꿍

// 20230601
// 1시간 내 풀이 실패

// 다른 사람 풀이
function solution(weights) {
  let answer = 0;
  const store = {};
  const cal = [1, 3 / 2, 2, 4 / 3];

  weights
    .sort((a, b) => b - a)
    .forEach((w) => {
      let s;
      cal.forEach((i) => {
        if (((s = w * i), store[s])) {
          answer += store[s];
        }
      });
      if (!store[w]) store[w] = 1;
      else store[w]++;
    });
  return answer;
}

// 다른 사람 풀이 2
function solution(weights) {
  weights.sort((a, b) => b - a);
  const dict = {};
  return weights.reduce((cnt, w) => {
    if (dict[w]) cnt += dict[w];
    if (dict[(w * 4) / 3]) cnt += dict[(w * 4) / 3];
    if (dict[(w * 3) / 2]) cnt += dict[(w * 3) / 2];
    if (dict[w * 2]) cnt += dict[w * 2];
    dict[w] = (dict[w] || 0) + 1;
    return cnt;
  }, 0);
}

// 시간 초과 났던 풀이
function solution(weights) {
  weights.sort((a, b) => a - b);

  let answer = 0;
  weights.forEach((weight, idx) => {
    let a = weight * 2;
    let b = (weight * 3) / 2;
    let c = (weight * 4) / 3;

    for (let i = idx + 1; i < weights.length; i++) {
      let cur = weights[i];
      if (cur === weight || cur === a || cur === b || cur === c) answer++;
      if (cur > a) break;
    }
  });

  return answer;
}
