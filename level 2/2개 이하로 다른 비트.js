// LV2_월간 코드 챌린지 시즌2: 2개 이하로 다른 비트

// 20230615
// 시간재고 푼 첫 풀이 - 약 16분
function solution(numbers) {
  const func = (num) => {
    let numBit = num.toString(2);
    let bitArr = numBit.split("");

    if (!bitArr.filter((e) => e === "0").length) {
      bitArr[0] = "0";
      bitArr.unshift("1");
      return parseInt(bitArr.join(""), 2);
    } else {
      let lastIdx = bitArr.lastIndexOf("0"); // 0과 '0' 구분 잘하기
      bitArr[lastIdx] = "1";
      if (lastIdx < bitArr.length - 1) bitArr[lastIdx + 1] = "0";
      return parseInt(bitArr.join(""), 2);
    }
  };

  return numbers.map((a) => func(a));

  // 10진수에서 n진수로 변환
  // -> num.toString(n);

  // n진수에서 10진수로 변환
  // -> parseInt(num, n)
}
