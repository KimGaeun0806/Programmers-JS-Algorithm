// Lv1.연습문제 - 문자열 다루기 기본

function solution(s) {
  return (s.length === 4 || s.length === 6) && /^[\d]*$/.test(s) ? true : false;
  // s.length === 4 || 6과 같이 안쓰도록 주의하기

  // test() 메소드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true나 false로 반환
  // regexObj.test(str)

  // ^ -> 입력의 시작 부분에 대응
  // $ -> 입력의 끝 부분에 대응
  // * -> 앞의 표현식이 0회 이상 연속으로 반복되는 부분과 대응
  // \d -> 숫자 문자에 대응. [0-9]와 동일s
}

// 다른 사람 풀이
function solution2(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
  // {n} -> 앞 표현식이 n번 나타나는 부분에 대응
  // x|y -> x또는 y에 대응
}
