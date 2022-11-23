// LV2_2019 카카오 개발자 겨울 인턴십: 튜플 - 20220813

// 최종 코드
function solution(s) {
  let array = [];
  s.slice(2, -2)
    .split("},{")
    .map((a) => [...a.split(",")])
    .sort((a, b) => a.length - b.length)
    .forEach((a) => {
      a.forEach((b) => {
        if (!array.includes(b)) array.push(b);
      });
    });

  return array.map((a) => +a);
}

// 최종 코드2
function solution2(s) {
  let answer = [];
  JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"))
    .sort((a, b) => a.length - b.length)
    .forEach((a) => answer.push(...a.filter((e) => !answer.includes(e))));

  return answer;
}
