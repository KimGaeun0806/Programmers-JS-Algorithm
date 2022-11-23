// LV2_Summer/Winter Coding(~2018): 영어 끝말잇기 - 20220719

// 최종 코드
function solution(n, words) {
  let num = -1;
  let arr = [words[0][0]];

  words.forEach((a, i) => {
    if (num === -1 && (words.indexOf(a) !== i || arr[arr.length - 1] !== a[0]))
      num = i;
    arr.push(a[a.length - 1]);
  });

  if (num === -1) return [0, 0];
  return [(num + 1) % n ? (num + 1) % n : n, Math.ceil((num + 1) / n)];
}

// 최종 코드2
function solution2(n, words) {
  let idx = 0;
  let arr = [words[0][0]];

  for (let x of words) {
    if (words.indexOf(x) !== idx || arr[arr.length - 1] !== x[0]) {
      return [(idx + 1) % n ? (idx + 1) % n : n, Math.ceil((idx + 1) / n)];
    }
    arr.push(x[x.length - 1]);
    idx++;
  }

  return [0, 0];
}
