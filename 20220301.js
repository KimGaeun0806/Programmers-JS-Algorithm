// Lv1.월간 코드 챌린지 시즌1 - 두 개 뽑아서 더하기

function solution(numbers) {
  let arr = [];
  numbers.map((a, i) => {
    for (let j = 1, leng = numbers.length; j < leng - i; j++) {
      arr.push(a + numbers[i + j]);
    }
  });
  return arr.filter((e, i) => arr.indexOf(e) === i).sort((a, b) => a - b);
  // .filter((e, i) => arr.indexOf(e) === i)로 중복 제거
}

// 다른 사람 풀이
function solution2(numbers) {
  const temp = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }
  const answer = [...new Set(temp)];
  return answer.sort((a, b) => a - b);
  // Set 내에서는 같은 값이 중복될 수 없음
}
