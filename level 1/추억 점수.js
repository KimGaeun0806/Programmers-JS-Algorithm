// LV1_연습문제 - 추억 점수

// 20230526
// 시간재고 푼 첫 풀이 - 약 7분
function solution(name, yearning, photo) {
  let answer = [];
  let obj = {};

  name.forEach((person, i) => (obj[person] = yearning[i]));

  photo.forEach((photo) => {
    let score = 0;
    photo.forEach((person) => {
      if (obj[person]) score += obj[person];
    });
    answer.push(score);
  });

  return answer;
}
