// Lv1.2021 카카오 채용연계형 인턴십 - 숫자 문자열과 영단어

function solution(s) {
  let num = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  for (let i = 0; i <= 9; i++) {
    s = s.split(num[i]).join(i);
  }
  return +s;
  // s = s.replace(num[i], i);을 했을 때 ->
  // replace() 메소드는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열 반환
  // 여기서 패턴이 문자열인 경우, 첫 번째 문자열만 치환이 됨
  // 그러므로 s = "oneone"같은 경우 "1one"과 같이 첫 번째  것만 변경됨

  // split() 메소드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눔
}

// 다른 사람 풀이
function solution2(s) {
  s = s
    .replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9);
  return parseInt(s);
}

//

function solution3(s) {
  while (isNaN(+s)) {
    s = s.replace('zero', 0);
    s = s.replace('one', 1);
    s = s.replace('two', 2);
    s = s.replace('three', 3);
    s = s.replace('four', 4);
    s = s.replace('five', 5);
    s = s.replace('six', 6);
    s = s.replace('seven', 7);
    s = s.replace('eight', 8);
    s = s.replace('nine', 9);
  }
  return +s;
}
