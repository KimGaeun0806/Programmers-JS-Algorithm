// LV2_연습문제 - 롤케이크 자르기

// 20230614
// 시간재고 푼 첫 풀이 - 약 12분
function solution(topping) {
  let answer = 0;

  let kindNum = (arr) => {
    let array = [];
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
      set.add(arr[i]);
      array.push(set.size);
    }
    return array;
  };

  let left = kindNum(topping);
  let right = kindNum(topping.reverse());

  for (let i = 1; i < topping.length; i++) {
    if (left[i] === right[topping.length - i - 2]) answer++;
  }

  return answer;
}

// 시간초과 났던 풀이
function solution(topping) {
  let answer = 0;

  const kind = (arr) => {
    return new Set(arr).size;
  };

  for (let i = 1; i < topping.length; i++) {
    let a = topping.slice(0, i);
    let b = topping.slice(i);
    if (kind(a) === kind(b)) answer++;
  }

  return answer;
}
