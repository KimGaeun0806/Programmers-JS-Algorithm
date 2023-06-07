// LV1_연습문제: 기사단원의 무기

// 20230607
// 힌트 보고 푼 풀이
function solution(number, limit, power) {
  let answer = 0;

  const findDivisor = (num) => {
    let divisorNum = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      // 처음에 Math.sqrt(num)을 num/2로 해서 시간초과 났음
      // 소수, 약수 구할 땐 항상 num의 제곱근으로 하기
      if (num % i === 0) {
        if (i === Math.sqrt(num)) divisorNum++;
        // i를 num이라고 적어서 실패했었음. 변수 제대로 확인하기
        else divisorNum += 2;
      }
      if (divisorNum > limit) return power;
    }
    return divisorNum;
  };

  for (let i = 1; i <= number; i++) {
    answer += findDivisor(i);
  }

  return answer;
}

// 다른 사람 풀이
function solution(number, limit, power) {
  var answer = 0;
  for (let n = 1; n <= number; n++) {
    let count = 0;
    for (let j = 1; j * j <= n; j++) {
      if (j * j == n) count++;
      else if (n % j == 0) count += 2;
    }
    if (count > limit) count = power;
    answer += count;
  }
  return answer;
}
