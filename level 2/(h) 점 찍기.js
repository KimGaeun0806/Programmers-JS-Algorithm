// LV2_연습문제: 점 찍기

// 20230520
// 힌트 보고 푼 풀이
function solution(k, d) {
  let answer = 0;

  for (let i = 0; i <= d; i += k) {
    let max = Math.floor(Math.sqrt(d ** 2 - i ** 2));
    answer += Math.floor(max / k) + 1;
  }

  return answer;

  // 코드는 빠른 시간 내에 작성할 수 있었으나 시간초과로 고민하는 시간이 길었음
  // for문 갯수를 줄이지 못해서 시간초과
  // for문 최대한 줄일 수 있도록 해보기
}

// 시간 초과 났던 풀이
function solution(k, d) {
  const distance = (x, y) => Math.sqrt(x ** 2 + y ** 2);

  let answer = 0;

  for (let i = 0; i <= d; i += k) {
    for (let j = 0; j <= d; j += k) {
      if (distance(i, j) <= d) {
        answer++;
      }
    }
  }

  return answer;
}
