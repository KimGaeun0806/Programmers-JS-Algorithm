// LV2_연습문제: 할인 행사

// 20230511
// 시간재고 푼 첫 풀이 - 약 15분
function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0; i < want.length; i++) {
    want[i] = want[i].repeat(number[i]);
  }

  want.sort();
  want = want.join("");

  for (let i = 0; i < discount.length - 9; i++) {
    let slicedDiscount = discount.slice(i, i + 10);
    slicedDiscount = slicedDiscount.sort().join("");
    if (slicedDiscount === want) answer++;
  }

  return answer;

  // sort((a, b) -> a - b)로 했을 때 정렬이 제대로 안되었음
  // 처음에 discount.length - 9 부분을 9리는 숫자로 넣어놔서 테케 통과 못했음
}
