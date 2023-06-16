// LV2_연습문제: 택배상자

// 20230616
// 시간재고 푼 첫 풀이 - 약 1시간
function solution(order) {
  let arr = Array.from({ length: order.length }, (_, i) => order.length - i);
  let answer = 0;
  let leng = order.length;
  let idx = arr.length - 1;

  for (let i = 0; i < leng; i++) {
    let x = order[i];

    if (x > arr[idx]) {
      let curIdx = leng - x;
      arr.splice(curIdx, 1);
      idx = curIdx;
      answer++;
    } else if (x === arr[idx]) {
      arr.splice(idx, 1);
      answer++;
    } else break;

    if (idx === arr.length) idx--;
    // 이걸 안해주면 idx가 arr를 벗어나는 경우가 생김
  }

  return answer;

  // 처음에 stack을 두 개 사용하는 방식으로 해서 시간초과 남
  // 풀이방식 바꾼 이후에도 시간초과남 -> for문 안에서 slice, indexOf 삭제함
}
