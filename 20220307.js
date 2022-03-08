// Lv1.탐욕법(Greedy) - 체육복

function solution(n, lost, reserve) {
  const arr = new Array(n)
    .fill(0)
    .map((a, i) =>
      lost.includes(i + 1) && reserve.includes(i + 1)
        ? 1
        : lost.includes(i + 1)
        ? 0
        : reserve.includes(i + 1)
        ? 2
        : 1
    );
  arr.map((a, i) => {
    if (a === 0) {
      if (arr[i - 1] === 2 && arr[i + 1] === 2) {
        arr[i + 2] === 0 ? arr.splice(i - 1, 1, 1) : arr.splice(i + 1, 1, 1);
        arr.splice(i, 1, 1);
      } else if (arr[i - 1] === 2) {
        arr.splice(i - 1, 1, 1);
        arr.splice(i, 1, 1);
      } else if (arr[i + 1] === 2) {
        arr.splice(i + 1, 1, 1);
        arr.splice(i, 1, 1);
      }
    }
  });
  return arr.filter((e) => e >= 1).length;
  // array.splice(변경시작인덱스, 제거할 요소 수, 추가할 요소) -> arr.splice(i, 1, 1)의 경우 arr[i]를 1로 수정하는 것이 됨
}

// 다른 사람 풀이
function solution2(n, lost, reserve) {
  // 여벌을 가져왔으나 도난당한 사람의 경우를 추가해야 함
  return (
    n -
    lost.filter((a) => {
      const b = reserve.find((r) => Math.abs(r - a) <= 1);
      if (!b) return true;
      reserve = reserve.filter((r) => r !== b);
    }).length
  );
  // find() 메소드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값 반환
}

//

function solution3(n, lost, reserve) {
  const students = {};
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }
  lost.forEach((number) => (students[number] -= 1));
  reserve.forEach((number) => (students[number] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
    }
  }
  for (let key in students) {
    if (students[key] >= 1) {
      answer++;
    }
  }
  return answer;
}
