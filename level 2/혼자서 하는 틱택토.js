// LV2_연습문제: 혼자서 하는 틱택토

// 20230621
// 시간재고 푼 첫 풀이 - 약 47분
function solution(board) {
  let oNum = 0;
  let xNum = 0;

  for (let x of board) {
    for (let y of x) {
      if (y === "O") oNum++;
      else if (y === "X") xNum++;
    }
  }

  if (xNum > oNum) return 0;
  if (oNum - xNum > 1) return 0;

  let one = board[0][0];
  let two = board[0][1];
  let three = board[0][2];
  let four = board[1][0];
  let five = board[1][1];
  let six = board[1][2];
  let seven = board[2][0];
  let eight = board[2][1];
  let nine = board[2][2];

  let case1 = one === two && one === three && two === three && one !== ".";
  let case2 = one === four && one === seven && four === seven && one !== ".";
  let case3 =
    seven === eight && seven === nine && eight === nine && seven !== ".";
  let case4 = three === six && three === nine && six === nine && three !== ".";
  let case5 = one === five && one === nine && five === nine && one !== ".";
  let case6 =
    three === five && three === seven && five === seven && three !== ".";
  let case7 = four === five && four === six && five === six && four !== ".";
  let case8 = two === five && two === eight && five === eight && two !== ".";

  if (case1 && case3) return 0;
  if (case1 && case7) return 0;
  if (case3 && case7) return 0;
  if (case2 && case4) return 0;
  if (case2 && case8) return 0;
  if (case4 && case8) return 0;

  if (case1 || case2 || case3 || case4 || case5 || case6 || case7 || case8) {
    if (case1 || case2) {
      if (one === "X" && oNum > xNum) return 0;
      else if (one === "O" && xNum === oNum) return 0;
    } else if (case3 || case4) {
      if (nine === "X" && oNum > xNum) return 0;
      else if (nine === "O" && xNum === oNum) return 0;
    } else {
      if (five === "X" && oNum > xNum) return 0;
      else if (five === "O" && xNum === oNum) return 0;
    }
  }

  return 1;

  // 처음에 case7, case8을 생각하지 못했음
  // 처음에 선공이 'O', 후공이 'X'라는 부분을 간과하고 풀어서 테케 통과 못했음
}
