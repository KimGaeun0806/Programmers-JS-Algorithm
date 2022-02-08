// Lv1.연습문제 - 이상한 문자 만들기

function solution(s) {
  let arr = s.split(' ').map((a) =>
    a.split('').map(function (b, j) {
      if (j % 2 === 0) {
        return b.toUpperCase();
      } else {
        return b.toLowerCase();
      }
      // map은 callback 함수를 각각의 요소에 대해 한 번씩 순서대로 불러 그 '함수의 반환값'으로 새로운 배열을 만듦
    })
  );
  return arr.map((a) => a.join('')).join(' ');
  // join() 메소드는 배열의 모든 요소를 연결해 하나의 문자열로 만듦
  // arr.join([separator]) -> separator(Optional)은 배열의 각 요소를 구분할 문자열 지정
}

// 다른 사람 풀이
function solution2(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
  // \w -> 밑줄 문자를 포함한 영숫자 문자
  // (\w)(\w) -> 두 문자씩 선택
  // "try hello world"에 /(\w)(\w)/g를 적용하면 "tr" "he" "ll" "wo" "rl"과 같은 식으로 찾음
}

//

function solution3(s) {
  return s
    .split(' ')
    .map((i) =>
      i
        .split('')
        .map((j, key) => (key % 2 === 0 ? j.toUpperCase() : j)) // if else 대신 삼항연산자 사용
        .join('')
    )
    .join(' ');
}
