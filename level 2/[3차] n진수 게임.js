// LV2_2018 KAKAO BLIND RECRUITMENT: [3차] n진수 게임

// 20230512
// 시간재고 푼 첫 풀이 - 약 18분
function solution(n, t, m, p) {
  let answer = "";
  let arr = "";
  let num = 0;
  let idx = 0;

  while (true) {
    arr += num.toString(n);
    num++;
    if (arr.length >= m * (t - 1) + p) break;
  }

  for (let x of arr) {
    if ((idx - p + 1) % m === 0) answer += x;
    idx++;
  }

  return answer.slice(0, t).toUpperCase();
}

// 리팩토링 후 풀이
function solution(n, t, m, p) {
  let answer = "";
  let game = "";
  let num = 0;
  let idx = p - 1;

  while (true) {
    game += num.toString(n);
    num++;
    if (game[idx]) {
      answer += game[idx];
      idx += m;
    }
    if (game.length >= m * (t - 1) + p) break;
  }

  return answer.toUpperCase();
}

// 다른 사람 풀이
function solution(n, t, m, p) {
  let res = "";
  let num = 0;
  let seq = "";
  while (res.length < t) {
    if (seq.length >= m) {
      res += seq[p - 1];
      seq = seq.slice(m);
    } else {
      seq += num.toString(n).toUpperCase();
      num++;
    }
  }
  return res;
}
