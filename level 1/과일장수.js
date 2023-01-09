// LV1_연습문제: 과일장수

// 20230109 풀이
function solution(k, m, score) {
  score.sort((a, b) => a - b);
  const num = score.length % m;
  const slicedScore = score.slice(num);

  let answer = 0;
  slicedScore.forEach((a, i) => {
    if ((i + 1) % m === 1) answer += a;
  });

  return answer * m;
}
