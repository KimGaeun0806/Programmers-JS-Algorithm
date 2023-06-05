// LV2_연습문제: 광물 캐기

// 20230605
// 시간재고 푼 첫 풀이 - 약 9분
function solution(r1, r2) {
  const findY = (diag, x) => {
    return Math.sqrt(diag ** 2 - x ** 2);
  };

  let answer = 0;

  for (let i = 1; i <= r2; i++) {
    let r1x = findY(r1, i);
    let r2x = findY(r2, i);
    if (i >= r1) r1x = 0;

    answer += Math.floor(r2x) - Math.ceil(r1x) + 1;
  }

  return answer * 4;
}
