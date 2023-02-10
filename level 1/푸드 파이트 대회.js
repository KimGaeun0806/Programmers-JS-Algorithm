// LV1_연습문제: 푸드 파이트 대회

// 20230210 풀이
function solution(food) {
  const answer = [];

  for (let i = 1; i < food.length; i++) {
    answer.push(`${i}`.repeat(Math.floor(food[i] / 2)));
  }

  return answer.join("") + "0" + answer.reverse().join("");
}

function solution2(food) {
  let answer = "";

  for (let i = 1; i < food.length; i++) {
    answer += `${i}`.repeat(Math.floor(food[i] / 2));
  }

  return answer + "0" + [...answer].reverse().join("");
}
