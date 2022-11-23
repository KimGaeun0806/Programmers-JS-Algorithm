// LV2_스택/큐: 기능개발

// 최종 코드
function solution(progresses, speeds) {
  let answer = [];
  let newArr = progresses.map((a, i) => Math.ceil((100 - a) / speeds[i]));
  let max = newArr[0] - 1;

  newArr.map((a) => {
    if (a <= max) answer[answer.length - 1]++;
    else {
      max = a;
      answer.push(1);
    }
  });

  return answer;
}
