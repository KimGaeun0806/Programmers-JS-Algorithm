// LV1_연습문제: 숫자 짝꿍

// 20230524
// 힌트 보고 푼 풀이
function solution(X, Y) {
  let splitX = ("" + X).split("").sort((a, b) => b - a);
  let splitY = ("" + Y).split("").sort((a, b) => b - a);

  let short = X > Y ? splitY : splitX;
  let long = X > Y ? splitX : splitY;

  let answer = "";

  let shortSet = new Set(short);
  [...shortSet].forEach((e) => {
    let longNum = long.filter((a) => a === e).length;
    let shortNum = short.filter((a) => a === e).length;
    answer += e.repeat(Math.min(longNum, shortNum));
  });

  if (answer[0] === "0") return "0";
  if (!answer[0]) return "-1";
  return answer;

  // 마지막에 "00"과 같은 것들을 "0"으로 처리하기 위해 숫자로 변경한 후 다시 문자열로 변경하는 과정을 거쳤음
  // 이 때 숫자가 너무 커지는 경우가 생겨서 테케 통과가 되지 않았음
  // 이것 때문에 테케 실패가 나올 거라고 생각하지 못해서 고민하는 시간이 길었음
}

// 힌트 보고 푼 풀이 2
function solution(X, Y) {
  let splitX = ("" + X).split("").sort((a, b) => b - a);
  let splitY = ("" + Y).split("").sort((a, b) => b - a);

  let answer = "";

  let longIdx = 0;
  for (let i = 0; i < splitX.length; i++) {
    if (splitX[i] === splitY[longIdx]) {
      answer += splitX[i];
      longIdx++;
    } else if (+splitX[i] < +splitY[longIdx]) {
      i--;
      longIdx++;
    }
  }

  if (answer[0] === "0") return "0";
  if (!answer[0]) return "-1";
  return answer;
}
