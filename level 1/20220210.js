// Lv1.연습문제 - 시저 암호

function solution(s, n) {
  let newArr = s.split('').map((a) => {
    if (a === ' ') {
      return a;
    } else if (a === a.toLowerCase()) {
      return String.fromCharCode(
        a.charCodeAt() + n >= 123 ? a.charCodeAt() + n - 26 : a.charCodeAt() + n
      );
    } else {
      return String.fromCharCode(
        a.charCodeAt() + n >= 91 ? a.charCodeAt() + n - 26 : a.charCodeAt() + n
      );
    }
  });

  return newArr.join('');

  // charCodeAt() 메소드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수 반환 (문자열을 유니코드로 변환해줌)

  // String.fromCharCode() 메소드는 UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환 (유니코드를 문자열로 변환해줌)
  // String.fromCharCode(num1[, ...[, numN]]) -> num1, ... numN은 UTF-16 코드 유닛인 숫자 뭉치이며 0부터 65535까지 가능
}

// 다른 사람 풀이

function solution2(s, n) {
  var chars =
    'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          ';
  return s
    .split('')
    .map((e) => chars[chars.indexOf(e) + n])
    .join('');
}
