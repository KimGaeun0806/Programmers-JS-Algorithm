// Lv1.2019 KAKAO BLIND RECRUITMENT - 실패율

function solution(N, stages) {
  const arr = Array.from(new Array(N), (x, i) => i + 1);
  const under = new Array(N).fill(0);
  arr.map((a, i) => {
    stages.map((b) => {
      under[i] = b >= a ? under[i] + 1 : under[i];
    });
  });
  const fail = arr.map((a, i) => {
    return stages.filter((e) => e === a).length / under[i];
  });
  return arr.sort((a, b) => fail[b - 1] - fail[a - 1]);
}

// 다른 사람 풀이
function solution2(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}
