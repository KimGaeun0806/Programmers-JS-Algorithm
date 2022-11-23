// LV2_완전탐색: 카펫

// 최종 코드
function solution(brown, yellow) {
  let height = 1;

  while (true) {
    if ((yellow / height + height) * 2 + 4 === brown)
      return [yellow / height + 2, height + 2];
    height++;
  }
}
