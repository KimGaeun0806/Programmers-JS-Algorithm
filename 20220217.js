// Lv1.연습문제 - 문자열 내 p와 y의 개수

// 첫 번째 풀이
function solution(s) {
  let pLeng = s.split('').filter((a) => a === 'p' || a === 'P').length;
  let sLeng = s.split('').filter((a) => a === 'y' || a === 'Y').length;
  return pLeng === sLeng ? true : false;
}

// 두 번째 풀이
function solution2(s) {
  return (s.match(/p|P/g) || []).length === (s.match(/y|Y/g) || []).length
    ? true
    : false;
  // x|y -> x 또는 y에 대응

  // match() 메소드는 문자열이 정규식과 매치되는 부분을 검색함
  // match 메소드를 사용했을 때 일치하는 부분이 없으면 null이 반환되는데, 이때 .length를 하면 에러가 발생함
  // -> null일 때 빈배열 []로 대체함으로써 에러 방지 (length는 0)

  // 굳이 삼항연산자로 true, false 반환할 필요 없음
}

// 다른 사람 풀이
function solution3(s) {
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
  // s가 "pPoooyY"일 경우 s.toUpperCase().split('P')를 했을 때 	[ '', '', 'OOOYY' ]가 나옴
  //                      s.toUpperCase().split('Y')를 했을 때 [ 'PPOOO', '', '' ]가 나옴
}

//

function solution4(s) {
  return (s.match(/p/gi) || []).length == (s.match(/y/gi) || []).length;
  // 정규식은 여섯 개의 플래그를 설정해줄 수 있음
  // g -> 전역 검색
  // i -> 대소문자 구분 없는 검색
}
