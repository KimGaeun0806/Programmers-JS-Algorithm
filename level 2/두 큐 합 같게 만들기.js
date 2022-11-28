// LV2_2022 KAKAO TECH INTERNSHIP: 두 큐 합 같게 만들기 - 20221128

// 최종 풀이
function solution(queue1, queue2) {
  let num = 0;
  const leng = queue1.length * 3;
  const sumArr = [...queue1, ...queue2];
  let p1 = 0;
  let p2 = queue1.length;

  let sum1 = queue1.reduce((p, c) => p + c);
  let sum2 = queue2.reduce((p, c) => p + c);

  for (let i = 0; i < leng; i++) {
    if (sum1 === 0 || sum2 === 0) {
      return -1;
    }

    if (sum1 > sum2) {
      sum2 += sumArr[p1];
      sum1 -= sumArr[p1];
      p1 = p1 + 1 > 0 ? (p1 + 1) % sumArr.length : sumArr.length - (p1 + 1);
      num++;
    } else if (sum1 < sum2) {
      sum1 += sumArr[p2];
      sum2 -= sumArr[p2];
      p2 = p2 + 1 > 0 ? (p2 + 1) % sumArr.length : sumArr.length - (p2 + 1);
      num++;
    } else return num;
  }
  return -1;
}

// 1번 실패 -> for문을 queue1.length * 2 반복하는 것에서 * 3 반복하는 걸로 바꾸어서 해결
// 22, 23, 24번 시간초과 -> queue 사용하는 것에서 포인터 사용으로 바꾸어서 해결
// 11, 28번 실패 -> [1, 1], [1, 2]와 같이 답이 안나오는 경우를 처리하지 않았음. for문 내에서 return이 되지 않을 경우 for문 끝난 후에 -1을 return해서 해결
// 이외 시간초과들 -> queue1, queue2 합을 매 반복문을 돌 때마다 구했는데, 미리 구해놓은 후 반복문 내에서는 값에 +- 하는 걸로 변경해서 해결

// 실패한 풀이 (queue 사용)
function solution(queue1, queue2) {
  let num = 0;
  const leng = queue1.length * 3;

  let sum1 = queue1.reduce((p, c) => p + c);
  let sum2 = queue2.reduce((p, c) => p + c);

  for (let i = 0; i < leng; i++) {
    if (sum1 === 0 || sum2 === 0) {
      num = -1;
      break;
    }

    if (sum1 > sum2) {
      sum2 += queue1[0];
      sum1 -= queue1[0];
      queue2.push(queue1.shift());
      num++;
    } else if (sum1 < sum2) {
      sum1 += queue2[0];
      sum2 -= queue2[0];
      queue1.push(queue2.shift());
      num++;
    } else break;
  }
  return num;
}
