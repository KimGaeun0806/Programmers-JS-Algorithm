// Lv1.연습문제 - 콜라츠 추측

// 첫 번째 풀이
function solution(num) {
  let answer = 0;
  while (num > 1) {
    if (num % 2 === 0) {
      num = num / 2;
      answer += 1;
    } else {
      num = num * 3 + 1;
      answer += 1;
    }
    if (answer >= 500) {
      answer = -1;
      break;
    }
  }
  return answer;
}

// 두 번째 풀이
function solution2(num) {
  let answer = 0;
  while (num > 1 && answer >= 0) {
    num = num % 2 ? num * 3 + 1 : num / 2;
    answer = answer >= 500 ? -1 : (answer += 1);
  }
  return answer;
}

// 다른 사람 풀이
function solution3(num, count = 0) {
  // input에 count = 0 추가
  return num == 1
    ? count >= 500
      ? -1
      : count
    : solution3(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
  // 재귀함수 -> 함수가 자신을 다시 호출하는 구조로 만들어진 함수
}
