// Lv1.연습문제 - 행렬의 덧셈

function solution(arr1, arr2) {
  let arr1Flat = arr1.flat(); // flat()은 하위 배열을 이어붙인 새로운 배열을 반환함 -> [[1, 2], [3, 4]]를 [1, 2, 3, 4]로
  let arr2Flat = arr2.flat();
  let arr1_0Length = arr1[0].length;
  let arr1FlatLength = arr1Flat.length;
  let answer = [];

  let preAnswer = Array(arr1FlatLength)
    .fill(0)
    .map((v, i) => arr1Flat[i] + arr2Flat[i]); // arr1Flat = [1, 2, 3], arr2Flat = [4, 5, 6] 이라면 preAnswer은 [5, 7, 9]가 됨
  arr1.forEach((v, i) => {
    answer.push(
      preAnswer.slice(i * arr1_0Length, i * arr1_0Length + arr1_0Length) // preAnswer 배열을 arr1의 0번째 인덱스 길이만큼 각각 잘라서 answer에 push하기
    );
  });

  return answer;
}

// 다른 사람 풀이
function solution2(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}
