// LV2_완전탐색: 카펫 - 20221123 / 20230404

// 최종 코드
function solution(brown, yellow) {
  let height = 1;

  while (true) {
    if ((yellow / height + height) * 2 + 4 === brown)
      return [yellow / height + 2, height + 2];
    height++;
  }
}

// 최종 코드 2
function solution2(brown, yellow) {
  const sum = brown + yellow;

  for (let i = 1; i <= Math.sqrt(sum); i++) {
    const j = sum / i;
    if (sum % i) continue;
    if (yellow === (i - 2) * (j - 2)) return [j, i];
  }
}
