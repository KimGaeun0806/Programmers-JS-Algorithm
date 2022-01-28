// Lv1.연습문제 - 핸드폰 번호 가리기

function solution(phone_number) {
  var answer = '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
  // arr.slice([begin[, end]]) -> slice는 end 인덱스를 제외하고 추출함. end가 생략되면 배열의 끝까지 추출

  return answer;
}

// 다른 사람 풀이
return phone_number.replace(/\d(?=\d{4})/g, '*');

// replace() 메소드는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환함
// str.replace(regexp|substr, newSjbstr|function) -> str.replace(pattern, replacement) 형식

// \d -> 숫자를 의미. [0-9]와 동일
// x{n} -> x 문자가 n번 반복됨을 의미
// g -> 대상 문자열 내 모든 패턴들을 검색하는 것을 의미
// x(?=y) -> y가 뒤따라오는 x에만 대응됨
