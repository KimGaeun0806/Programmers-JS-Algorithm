// LV2_연습문제: 마법의 엘리베이터

// 20230519
// 힌트 보고 푼 풀이
function solution(storey) {
  let storeyArr = (storey + "").split("").map((e) => +e);
  let answer = 0;

  for (let i = storeyArr.length - 1; i >= 0; i--) {
    let cur = storeyArr[i];

    if (cur < 5) answer += cur;
    else if (cur > 5) {
      if (i === 0) {
        // 생각 못했던 부분
        answer += 11 - cur;
        break;
      }
      answer += 10 - cur;
      storeyArr[i - 1]++;
    } else {
      if (i === 0) {
        // 생각 못했던 부분
        answer += 5;
        break;
      }
      if (storeyArr[i - 1] >= 5) storeyArr[i - 1]++;
      answer += 5;
    }

    if (storeyArr[i - 1] === 10) {
      storeyArr[i - 1] = 0;
      if (i - 1 === 0) storeyArr = [1, ...storeyArr];
      else storeyArr[i - 2]++;
    }
  }

  return answer;

  // 테케 통과 못한 부분
  // 첫 번째 자리의 수 생각을 못했음
  // -> 678같은 경우 0번 인덱스이면서 5 이상인 경우 로직을 포함하지 못했음
  // -> 항상 문자열/배열 제일 처음과 제일 끝을 따로 생각해보기
}

// 다른 사람 풀이
function solution2(storey) {
  if (storey < 5) return storey;
  const r = storey % 10;
  const m = (storey - r) / 10;
  return Math.min(r + solution(m), 10 - r + solution(m + 1));
}

// 다른 사람 풀이2
function solution(storey) {
  let answer = Number.MAX_SAFE_INTEGER;

  const dfs = (num, counter) => {
    if (counter >= answer) return;
    if (num === 0) {
      answer = counter;
      return;
    }

    let res = num % 10;

    dfs((num - res) / 10, counter + res);
    dfs((num - res) / 10 + 1, counter + 10 - res);
  };

  dfs(storey, 0);
  return answer;
}
