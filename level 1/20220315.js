// Lv1.2019 카카오 개발자 겨울 인턴십 - 크레인 인형뽑기 게임

function solution(board, moves) {
  let basket = [];
  moves.map((a) => {
    for (let j = 0; j < board.length; j++) {
      if (board[j][a - 1] !== 0) {
        basket.push(board[j][a - 1]);
        board[j].splice(a - 1, 1, 0);
        break;
      }
    }
  });

  let basLeng = basket.length;
  for (let i = basket.length - 1; i--; ) {
    if (basket[i] === basket[i - 1]) {
      basket.splice(i - 1, 2);
    }
  }
  // map을 사용하거나 for (let i = 0, i < basket.length; i++)와 같은 식으로 앞에서부터 처리하면 건너뛰는 것들이 생김
  return basLeng - basket.length;
}

//

function solution2(board, moves) {
  const stack = [];
  let answer = 0;

  for (let a of moves) {
    let doll = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i][a - 1]) {
        doll = board[i][a - 1];
        board[i][a - 1] = 0;
        break;
      }
    }

    if (!doll) continue;

    if (stack.at(-1) === doll) {
      stack.pop();
      answer += 2;
    } else stack.push(doll);
  }
  return answer;
}

// 다른 사람 풀이
const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const solution3 = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};

//

function solution4(board, moves) {
  var count = 0;
  var stack = [];

  for (var i = 0; i < moves.length; i++) {
    var now = moves[i] - 1;
    for (var j = 0; j < board.length; j++) {
      if (board[j][now] != 0) {
        if (stack[stack.length - 1] === board[j][now]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(board[j][now]);
        }
        board[j][now] = 0;
        break;
      }
    }
  }
  console.log(stack);
  return count;
}
