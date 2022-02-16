// Lv1.연습문제 - 문자열 내림차순으로 배치하기

function solution(s) {
  return s.split('').sort().reverse().join('');
  // sort() 메소드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열 반환. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따름
}
