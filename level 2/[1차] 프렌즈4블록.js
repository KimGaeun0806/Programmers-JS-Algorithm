// LV2_2018 KAKAO BLIND RECRUITMENT - [1차] 프렌즈4블록

// 20230521
// 시간재고 푼 첫 풀이 - 약 1시간
function solution(m, n, board) {
  let answer = 0;
  let arr = Array.from({ length: n }, () => []);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr[j].unshift(board[i][j]);
    }
  }

  const removeBlock = (pan) => {
    let remove = new Set();
    let removeNum = 0;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < pan[i].length - 1; j++) {
        let cur = pan[i][j];
        let right = pan[i][j + 1];
        let down = pan[i + 1][j];
        let diag = pan[i + 1][j + 1];
        if (cur === right && cur === down && cur === diag) {
          remove.add(`${i} ${j}`);
          remove.add(`${i} ${j + 1}`);
          remove.add(`${i + 1} ${j}`);
          remove.add(`${i + 1} ${j + 1}`);
        }
      }
    }

    for (let e of remove) {
      let [x, y] = e.split(" ");
      arr[x].splice(y, 1, 0);
      removeNum++;
    }

    arr = arr.map((e) => e.filter((a) => a !== 0));
    answer += removeNum;
    if (remove.size > 0) removeBlock(arr);
  };

  removeBlock(arr); // removeBlock(board)를 넣어서 계속 에러났음
  return answer;
}

// 다른 사람 풀이
const solution = (m, n, board) => {
  let answer = 0;
  board = board.map((v) => v.split(""));

  while (true) {
    const arr = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j + 1]
        ) {
          arr.push([i, j]);
        }
      }
    }
    if (!arr.length) {
      return [].concat(...board).filter((v) => !v).length;
    }

    for (let i = 0; i < arr.length; i++) {
      const col = arr[i][0];
      const row = arr[i][1];
      board[col][row] = 0;
      board[col][row + 1] = 0;
      board[col + 1][row] = 0;
      board[col + 1][row + 1] = 0;
    }

    for (let i = m - 1; i > 0; i--) {
      if (!board[i].some((v) => !v)) continue;
      // Array.prototype.some() -> 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트

      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
          if (board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
  }
};
