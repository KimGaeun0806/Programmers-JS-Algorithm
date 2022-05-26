// Lv1.해시 - 완주하지 못한 선수

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  return participant
    .map((a, i) => {
      if (a !== completion[i]) {
        participant.splice(i, 1);
        return a;
      }
    })
    .filter((a) => a != null)
    .join();

  // completion.map(a => {
  //     if (participant.includes(a)) {
  //         participant.splice(participant.indexOf(a), 1)
  //     }
  // })
  // return participant.join();
  // 위와 같이 했을 때는 효율성 테스트를 통과하지 못했음
}

// 다른 사람 풀이
var solution2 = (participant, completion) =>
  participant.find(
    (a) => !completion[a]--,
    completion.map((a) => (completion[a] = (completion[a] | 0) + 1))
  );

//

function solution3(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return 'nothing';
}

//

const solution4 = (participant, completion) => {
  participant.sort();
  completion.sort();
  while (participant.length) {
    let pp = participant.pop();
    if (pp !== completion.pop()) return pp;
  }
};
