// Lv1.2020 카카오 인턴십 - 키패드 누르기
function solution(numbers, hand) {
  let left = [10];
  let right = [12];

  let h = hand === "right" ? "R" : "L";

  return numbers
    .map((a) => (a === 0 ? 11 : a))
    .map((a) => {
      if ([1, 4, 7].includes(a)) {
        left.push(a);
        return "L";
      } else if ([3, 6, 9].includes(a)) {
        right.push(a);
        return "R";
      } else {
        let leftResult = Math.floor(
          (Math.abs(a - left[left.length - 1]) % 3) +
            Math.abs(a - left[left.length - 1]) / 3
        );
        let rightResult = Math.floor(
          (Math.abs(a - right[right.length - 1]) % 3) +
            Math.abs(a - right[right.length - 1]) / 3
        );
        // 나눗셈 결과가 항상 정수로 나오는 것이 아니라는 데 주의하기
        // 두 수의 차를 구해서 비교할 때는 절댓값 씌우는 것 잊지 말기
        // js에서는 배열의 가장 끝 값을 구할 때 arr[-1] 쓸 수 x

        if (leftResult > rightResult) {
          right.push(a);
          return "R";
        } else if (leftResult < rightResult) {
          left.push(a);
          return "L";
        } else {
          h === "R" ? right.push(a) : left.push(a);
          return h;
        }
      }
    })
    .join("");
}

//

const func = (num1, num2) => {
  num1 = num1 ? num1 : 11;
  num2 = num2 ? num2 : 11;

  const subtract = Math.abs(num1 - num2);
  return Math.floor(subtract / 3) + (subtract % 3);
};

function solution2(numbers, hand) {
  let left = 10;
  let right = 12;

  return numbers
    .map((a) => {
      const rightFunc = () => {
        right = a;
        return "R";
      };

      const leftFunc = () => {
        left = a;
        return "L";
      };

      if ([1, 4, 7].includes(a)) return leftFunc();
      else if ([3, 6, 9].includes(a)) return rightFunc();
      else {
        if (func(left, a) > func(right, a)) return rightFunc();
        else if (func(left, a) < func(right, a)) return leftFunc();
        else if (hand === "right") return rightFunc();
        else return leftFunc();
      }
    })
    .join("");
}

// 다른 사람 풀이
function solution2(numbers, hand) {
  hand = hand[0] === "r" ? "R" : "L";
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2];
  let h = { L: [1, 1], R: [1, 1] };
  return numbers
    .map((x) => {
      if (/[147]/.test(x)) {
        h.L = [position[x], 1];
        return "L";
      }
      if (/[369]/.test(x)) {
        h.R = [position[x], 1];
        return "R";
      }
      let distL = Math.abs(position[x] - h.L[0]) + h.L[1];
      let distR = Math.abs(position[x] - h.R[0]) + h.R[1];
      if (distL === distR) {
        h[hand] = [position[x], 0];
        return hand;
      }
      if (distL < distR) {
        h.L = [position[x], 0];
        return "L";
      }
      h.R = [position[x], 0];
      return "R";
    })
    .join("");
}
