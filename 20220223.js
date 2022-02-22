//Lv1.연습문제 - 가운데 글자 가져오기

function solution(s) {
  let leng = s.length;
  return leng % 2 === 0
    ? s.slice(leng / 2 - 1, leng / 2 + 1)
    : s[(leng - 1) / 2];
  // slice() 메소드는 어떤 배열의 begin부터 end까지 (end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
}

// 다른 사람 풀이
function solution2(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
  // substr() 메소드는 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들 반환
  // str.substr(start[, length]) -> start는 추출하고자 하는 문자들의 시작 위치, length는 추출할 문자들의 총 숫자

  // Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer로 반환
}

//

function solution3(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}

//

function solution4(s) {
  return s.length % 2
    ? s[parseInt(s.length / 2)]
    : s.substr(s.length / 2 - 1, 2);
}
