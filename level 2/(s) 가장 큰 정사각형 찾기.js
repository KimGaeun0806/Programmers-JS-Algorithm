// LV2_연습문제: 가장 큰 정사각형 찾기

// 20230518
// 1시간 내 풀이 실패
// 다른 사람 풀이
function solution(board) {
  let answer = 0;
  const row = board.length;
  const column = board[0].length;

  if (row <= 1 || column <= 1) return 1;

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (board[i][j] > 0) {
        const up = board[i - 1][j];
        const left = board[i][j - 1];
        const cross = board[i - 1][j - 1];
        const minNum = Math.min(up, left, cross);
        board[i][j] = minNum + 1;
        answer = Math.max(answer, board[i][j]);
      }
    }
  }

  return answer * answer;

  // 좌표에서 왼쪽 위로 만들 수 있는 가장 큰 정사각형의 변의 길이를 저장함
  // 좌표의 위쪽, 왼쪽, 대각선 왼쪽 3점을 비교해 결정
  // 첫 번째 column, row는 남겨둠
}
