// LV2_연습문제: 광물 캐기

// 20230604
// 시간재고 푼 첫 풀이 - 약 40분
function solution(picks, minerals) {
  let arr = [];
  let answer = 0;
  let sum = picks.reduce((p, c) => p + c);
  let forLeng = Math.min(sum * 5, minerals.length);
  let temp = { diamond: 0, iron: 0, stone: 0 };

  for (let i = 0; i < forLeng; i++) {
    temp[minerals[i]]++;
    if ((i + 1) % 5 === 0 || i === minerals.length - 1) {
      arr.push(temp);
      temp = { diamond: 0, iron: 0, stone: 0 };
    }
  }

  arr.sort((a, b) => {
    if (a.diamond !== b.diamond) return a.diamond - b.diamond;
    else if (a.iron !== b.iron) return a.iron - b.iron;
    else return a.stone - b.stone;
  });

  let tired = [];
  for (let i = 0; i < 3; i++) {
    if (i === 0) tired = [1, 1, 1];
    if (i === 1) tired = [5, 1, 1];
    if (i === 2) tired = [25, 5, 1];

    for (let j = 0; j < picks[i]; j++) {
      let cur = arr[arr.length - 1];
      answer +=
        cur.diamond * tired[0] + cur.iron * tired[1] + cur.stone * tired[2];
      arr.pop();
      if (!arr[0]) return answer;
    }
  }
}
