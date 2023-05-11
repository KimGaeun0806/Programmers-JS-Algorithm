// LV2_연습문제: 연속 부분 수열 합의 개수

// 20230511
// 시간재고 푼 첫 풀이 - 약 10분
function solution(elements) {
  let twiceElements = [...elements, ...elements];
  let answerArray = [];
  // const set = new Set(); 처음부터 set으로 만들 수 있음

  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      let sum = 0;

      for (let k = 0; k < i; k++) {
        sum += twiceElements[j + k];
      }
      answerArray.push(sum);
      // set으로 했을 경우는 set.add(sum) 으로 할 수 있음
    }
  }

  return [...new Set(answerArray)].length;
  // return new Set(answerArray).size 로 할 수 있음
}

// 다른 사람 풀이
function solution2(elements) {
  const circular = elements.concat(elements);
  const set = new Set();
  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j];
      set.add(sum);
    }
  }
  return set.size;
}
