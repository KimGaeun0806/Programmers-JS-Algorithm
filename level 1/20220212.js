// Lv1.연습문제 - 수박수박수박수박수박수?

function solution(n) {
  let s = '수';
  let sb = '수박';

  return n % 2 === 0 ? sb.repeat(n / 2) : sb.repeat(n / 2) + s;
}

// 다른 사람 풀이
const solution2 = (n) => '수박'.repeat(n).slice(0, n);
// slice() 메소드는 어떤 배열의 begin부터 end까지 (end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
