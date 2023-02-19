// LV2_정렬: H-index - 20230219

// 최종 코드
function solution(citations) {
  const max = Math.max(...citations);
  citations.sort((a, b) => b - a);

  for (let i = max; i >= 0; i--) {
    for (let j = 0; j < citations.length; j++) {
      if (i <= citations[j]) {
        if (j + 1 === i) return i;
        if (i === 0) return 0;
      }
    }
  }
}

// 최종 코드 2
function solution2(citations) {
  const max = Math.max(...citations);
  citations.sort((a, b) => b - a);

  for (let i = max; i >= 0; i--) {
    if (citations.filter((a) => a >= i).length >= i) return i;
  }
}

// 최종 코드 3
function solution3(citations) {
  return citations.sort((a, b) => b - a).filter((a, i) => a >= i + 1).length;
}
