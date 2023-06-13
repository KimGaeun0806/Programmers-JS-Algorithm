// LV2_연습문제: 가장 큰 수

// 20230612
// 1시간 내 풀이 실패
// 다른 사람 풀이
function solution(numbers) {
  var answer = numbers
    .map((c) => c + "")
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer; // numbers 배열이 0으로만 구성되어있을 경우 예외처리
}

// 다른 사람 풀이 2
function solution(numbers) {
  const buckets = [];

  for (const n of numbers) {
    const s = String(n),
      l = s.length;

    let j = "";
    for (let i = 0; i < 4; i++) {
      j += s[l > i ? i : i % l];
    }
    j = 9999 - j;

    buckets[j] = buckets[j] ? buckets[j] + s : s;
  }

  const ans = buckets.join``;

  return ans[0] === "0" ? "0" : ans;
}
