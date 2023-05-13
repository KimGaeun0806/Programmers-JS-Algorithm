// LV2_2018 KAKAO BLIND RECRUITMENT: [3차] 압축

// 20230513
// 시간재고 푼 첫 풀이 - 약 32분
function solution(msg) {
  let alphabet = [
    "0",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let answer = [];

  for (let i = 0; i < msg.length; i++) {
    let num = msg.length;

    while (true) {
      let sliced = msg.slice(i, num);
      if (alphabet.includes(sliced)) {
        answer.push(alphabet.indexOf(sliced));
        break;
      }
      num--;
    }

    alphabet.push(msg.slice(i, num + 1));
    i += num - i - 1;
  }

  return answer;
}
