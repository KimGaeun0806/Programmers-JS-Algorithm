// LV2_2022 KAKAO BLIND RECRUITMENT: k진수에서 소수 개수 구하기

// 20230512
// 시간재고 푼 첫 풀이 - 약 35분
const isPrimeNum = (n) => {
  if (n == 1) return false;
  if (!n) return false;
  // 예외처리 주의하기

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

function solution(n, k) {
  let answer = 0;
  n = n.toString(k);
  let splitedN = n.split("0");
  // let splitedN = n.toString(k).split('0'); 하나로 합쳐도 될 것 같음

  splitedN.forEach((e) => {
    if (isPrimeNum(e)) answer++;
  });

  return answer;

  // 처음에 문제 이해를 잘못 해서 쓸모없는 과정을 거쳤음 (211이 있으면 2, 11, 211까지 모두 조건에 맞다고 착각)
  // 너무 허겁지겁 문제풀이에 들어가지 말고 문제를 충분히 읽고 제대로 이해하는 과정이 필요
}
