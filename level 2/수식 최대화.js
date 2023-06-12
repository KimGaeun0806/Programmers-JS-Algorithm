// LV2_2020 카카오 인턴십 - 수식 최대화

// 20230612
// 시간재고 푼 첫 풀이 - 약 31분
function solution(expression) {
  let expressArr = [];
  let answer = 0;
  let order = ["*-+", "*+-", "-+*", "-*+", "+*-", "+-*"];

  let temp = "";
  for (let i = 0; i < expression.length; i++) {
    let cur = expression[i];
    if (["*", "-", "+"].includes(cur)) {
      expressArr.push(+temp);
      expressArr.push(cur);
      temp = "";
    } else if (i === expression.length - 1) expressArr.push(+(temp + cur));
    else temp += cur;
  }

  const func = (arr, operator) => {
    for (let i = 0; i < arr.length; i++) {
      let cur = arr[i];
      if (cur === operator) {
        let calculate;
        if (operator === "-") calculate = arr[i - 1] - arr[i + 1];
        else if (operator === "+") calculate = arr[i - 1] + arr[i + 1];
        else calculate = arr[i - 1] * arr[i + 1];
        arr.splice(i - 1, 3, calculate);
        i--;
      }
    }
    return arr;
  };

  for (let x of order) {
    let tempArr = [...expressArr];
    for (let y of x) {
      tempArr = func(tempArr, y);
    }
    if (Math.abs(tempArr) > answer) answer = Math.abs(tempArr);
  }

  return answer;
}

// 다른 사람 풀이
function solution(expression) {
  function calculator(a, b, oper) {
    if (oper === "+") return a + b;
    if (oper === "*") return a * b;
    if (oper === "-") return a - b;
  }
  const combinations = [
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["-", "*", "+"],
    ["-", "+", "*"],
  ];
  let answer = Number.MIN_SAFE_INTEGER;

  combinations.forEach((combination) => {
    const operands = expression.match(/[0-9]+/g).map(Number);
    const operators = expression.match(/[\*\+\-]/g);
    combination.forEach((c) => {
      let idx = operators.indexOf(c);
      while (idx !== -1) {
        operands[idx] = calculator(operands[idx], operands[idx + 1], c);
        operands.splice(idx + 1, 1);
        operators.splice(idx, 1);
        idx = operators.indexOf(c);
      }
    });
    if (answer < Math.abs(operands[0])) answer = Math.abs(operands[0]);
  });
  return answer;
}

// 다른 사람 풀이 2
function solution(expression) {
  const prior = [
    ["-", "*", "+"],
    ["-", "+", "*"],
    ["*", "-", "+"],
    ["*", "+", "-"],
    ["+", "-", "*"],
    ["+", "*", "-"],
  ];
  let cand = [];

  for (let opCand of prior) {
    const temp = expression.split(/(\D)/);
    for (let exp of opCand) {
      while (temp.includes(exp)) {
        const idx = temp.indexOf(exp);
        temp.splice(idx - 1, 3, eval(temp.slice(idx - 1, idx + 2).join("")));
      }
    }
    cand.push(Math.abs(temp[0]));
  }
  return Math.max(...cand);
}
