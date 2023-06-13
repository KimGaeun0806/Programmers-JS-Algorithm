// LV2_연습문제 - 과제 진행하기

// 20230613
// 시간재고 푼 첫 풀이 - 약 48분
function solution(plans) {
  plans.push(["0", "10100:00", "0"]);
  // 이 부분 시간을 충분히 크게 하지 않아서 통과되지 않은 테케가 있었음

  let timeFormat = (string) => {
    let [hour, minute] = string.split(":");
    return hour * 60 + minute * 1;
  };

  let rest = [];
  let answer = [];

  plans.sort((a, b) => timeFormat(a[1]) - timeFormat(b[1]));

  for (let i = 0; i < plans.length - 1; i++) {
    let nextTime = timeFormat(plans[i + 1][1]);
    let curTime = timeFormat(plans[i][1]);
    let subtract = nextTime - (curTime + plans[i][2] * 1);
    // plans[i][2]를 Number 형태로 바꾸지 않고 문자열형태 그대로 사용해서 문제가 생겼음

    if (subtract < 0) {
      rest.push([plans[i][0], curTime + plans[i][2] * 1 - nextTime]);
    } else if (subtract === 0) {
      answer.push(plans[i][0]);
    } else {
      answer.push(plans[i][0]);
      for (let i = rest.length - 1; i >= 0; i--) {
        let cur = rest[i];
        if (subtract >= cur[1]) {
          answer.push(cur[0]);
          rest.pop();
          subtract -= cur[1];
        } else {
          rest[rest.length - 1] = [rest.at(-1)[0], rest.at(-1)[1] - subtract];
          break;
        }
        // answer와 rest 헷갈려서 잘못 적은 부분들이 있었음. 배열이나 문자열 여러 개 있을 때 제대로 구분해서 사용하기
      }
    }
  }

  return answer;

  // 문제를 제대로 안읽고 '가장 최근에 멈춰둔 과제'가 아닌 '먼저 멈춰둔 과제' 순서로 진행해서 시간이 지체됐음
}
