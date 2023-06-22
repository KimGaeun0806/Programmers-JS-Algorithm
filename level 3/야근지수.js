// LV3_연습문제: 야근지수

// 20230621
// 시간재고 푼 첫 풀이 - 약 27분
function solution(n, works) {
  works.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    let leng = works.length - 1;
    if (works[leng]) works[leng]--;
    if (works[leng] < works[leng - 1]) {
      works.splice(works.indexOf(works[leng - 1]), 0, works[leng]);
      works.pop();
    }
  }

  let answer = 0;
  for (let x of works) {
    answer += x ** 2;
  }

  return answer;

  // for문 돌 때마다 max를 구하거나 sort하면 시간초과 났음
  // works를 내림차순으로 해서 unshift를 쓰면 시간초과 났음 -> 오름차순으로 바꿔서 pop 쓰니 해결됨
}
