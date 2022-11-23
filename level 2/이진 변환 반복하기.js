// LV2_월간 코드 챌린지 시즌1: 이진 변환 반복하기

// 최종 코드
function solution(s) {
  const answer = [0, 0];

  while (true) {
    answer[0]++;
    const newS = s.replace(/0/g, "");
    answer[1] += s.length - newS.length;
    s = newS.length.toString(2);
    if (s === "1") break;
  }

  return answer;
}
