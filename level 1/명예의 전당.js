// LV2_연습문제: 명예의 전당(1)

// 20230615
// 시간재고 푼 첫 풀이 - 약 25분
function solution(k, score) {
  let jundang = [];
  let result = [];

  for (let i = 0; i < score.length; i++) {
    if (jundang.length < k) {
      jundang.push(score[i]);
      jundang.sort((a, b) => a - b);
    } else if (jundang[0] < score[i]) {
      jundang[0] = score[i];
      jundang.sort((a, b) => a - b);
    }
    result.push(jundang[0]);
  }

  return result;

  // 처음 k일간의 최하위 점수를 하나로 고정시켜놔서 테케 대부분이 통과가 안됐었음
}

// 다른 사람 풀이
function solution(k, score) {
  const stack = [];
  return score.reduce((a, c) => {
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }
    a.push(stack[0]);
    return a;
  }, []);
}
