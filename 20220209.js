// Lv1.연습문제 - 약수의 합

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

// 다른 사람 풀이
function solution2(n, a = 0, b = 0) {
  return n <= a / 2 ? b : solution(n, a + 1, (b += n % a ? 0 : a));
}

//

function solution3(n) {
  var answer = 0;
  for (var i = 1; i <= n / 2; i++) if (n % i == 0) answer += i;
  return answer + n;
  // 정수 n의 약수 중 가장 큰 수는 자기 자신이고, 그 다음으로 큰 약수는 n/2보다 크지 않음
}
