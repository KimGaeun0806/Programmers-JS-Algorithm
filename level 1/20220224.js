// Lv1.2018 KAKAO BLIND RECRUITMENT - [1차]비밀지도

// 첫 번째 풀이
function solution(n, arr1, arr2) {
  let newArr1 = arr1
    .map((a) => a.toString(2))
    .map((a) => '0'.repeat(n - a.length) + a)
    .map((a) => a.split(''));
  let newArr2 = arr2
    .map((a) => a.toString(2))
    .map((a) => '0'.repeat(n - a.length) + a)
    .map((a) => a.split(''));

  let plusArr = newArr1.map((a, i) =>
    a
      .map((b, j) => {
        return b === '0' && newArr2[i][j] === '0' ? ' ' : '#';
      })
      .join('')
  );

  return plusArr;
}

// 두 번째 풀이
function solution2(n, arr1, arr2) {
  const newArrFunc = (arr, n) => {
    return arr
      .map((a) => a.toString(2))
      .map((a) => '0'.repeat(n - a.length) + a)
      .map((a) => a.split(''));
  };

  let plusArr = newArrFunc(arr1, n).map((a, i) =>
    a
      .map((b, j) => {
        return b === '0' && newArrFunc(arr2, n)[i][j] === '0' ? ' ' : '#';
      })
      .join('')
  );
  return plusArr;
} // 반복되는 부분을 함수로 묶음. 하지만 속도는 첫 번째 풀이보다 더 느려짐.

// 다른 사람 풀이
function solution3(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(
      /1|0/g,
      (a) => (+a ? '#' : ' ')
      // (a) => +a ? '#' : ' ' -> 양수인 1은 '#', 0은 ' ' 반환
    )
  );
}
const addZero = (n, s) => {
  return '0'.repeat(n - s.length) + s;
};

//

var solution4 = (n, a, b) =>
  a.map(
    (a, i) =>
      (a | b[i])
        .toString(2)
        .padStart(n, 0)
        .replace(/0/g, ' ')
        .replace(/1/g, '#')
    // padStart() 메소드는 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환함. 채워넣기는 대상 문자열의 시작(좌측)부터 적용됨.
    // str.padStart(targetLength[, padString]) -> targetLength는 목표 문자열 길이, padString은 현재 문자열에 채워넣을 다른 문자열

    // bitwise OR (비트연산자 |) -> 각 비트 위치에서 하나 혹은 두 개 모두가 1일 때 1을 반환함 (110, 100이 있다면 110이 반환됨)
  );

//

function solution5(n, arr1, arr2) {
  let num1, num2, s;
  let answer = [];
  for (let i = 0; i < n; i++) {
    num1 = arr1[i];
    num2 = arr2[i];
    s = '';
    for (let j = 0; j < n; j++) {
      s = (num1 % 2) + (num2 % 2) ? '#' + s : ' ' + s;
      num1 = Math.floor(num1 / 2);
      num2 = Math.floor(num2 / 2);
    }
    answer.push(s);
  }
  return answer;
}
