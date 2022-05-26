// Lv1.위클리 챌린지 - 부족한 금액 계산하기

function solution(price, money, count) {
  let answer = (price * count * (count + 1)) / 2 - money;
  return answer > 0 ? answer : 0;
  // 1부터 n까지의 합 = n(n+1)/2
}

// 다른 사람 풀이
function solution2(..._) {
  Math.max((_[0] * _[2] * ++_[2]) / 2 - _[1], 0);
  // ..._ -> solution 함수에 들어오는 매개변수의 목록. 즉 _[0]은 price, _[1]은 money, _[2]는 count
  // ++_[2]는 count + 1과 비슷한 의미
}
