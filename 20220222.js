// Lv1.2018 KAKAO BLIND RECRUITMENT - [1차]다트 게임

function solution(dartResult) {
  let numArr = [];
  let arr = dartResult
    .replace(/([1-9])|(?<!1)0/g, '.$1')
    .split('.')
    .filter((a) => a !== '');
  // (?<!x)y -> s가 앞에 존재하지 않는 y를 검색
  // 숫자를 기준으로 배열을 나눔 ([ '1S', '2D*', '3T' ]와 같이)

  arr.map((a) => {
    numArr.push(a.replace(/[^0-9]/g, ''));
  });
  // /[^0-9]/g -> 0-9가 아닌 것을 검색
  // 숫자가 아닌 것들을 모두 삭제한 후 numArr에 넣기

  let newNumArr = numArr.map((a) => +a);

  let newArr = arr.map((a, i) => {
    if (/D/g.test(a)) {
      return newNumArr[i] ** 2;
    } else if (/T/g.test(a)) {
      return newNumArr[i] ** 3;
    } else {
      return newNumArr[i];
    }
  });
  // S, D, T 적용

  let newArr2 = arr.map((a, i) => {
    if (/\*/g.test(a)) {
      return newArr[i] * 2;
    } else if (/#/g.test(a)) {
      return -newArr[i];
    } else {
      return newArr[i];
    }
  });
  // *, # 적용

  let newArr3 = arr.map((a, i) => {
    if (/\*/g.test(arr[i + 1])) {
      return newArr2[i] * 2;
    } else {
      return newArr2[i];
    }
  });
  // * 앞 점수에 적용

  return newArr3.reduce((a, b) => a + b);
}

// 다른 사람 풀이
function solution2(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { '*': 2, '#': -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);
  // . -> 개행 문자를 제외한 모든 단일 문자와 대응
  // ? -> 앞의 표현식이 0 또는 1회 등장하는 부분과 대응
  // \d -> 숫자 문자에 대응. [0-9]와 동일
  // \D -> 숫자 문자가 아닌 문자에 대응. [^0-9]와 동일
  // match -> 대응되는 문자열을 찾는 String 메소드. 정보를 가지고 있는 배열 반환
  // 문자열이 한 뭉텅이씩 나눠짐 ([ '1S', '2D*', '3T' ]와 같이)

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];
    // Math.pow(base, exponent) -> base에 exponent를 제곱한 값 반환

    if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];
    // *= -> 오른쪽 피연산자의 값을 변수에 곱한 결과를 다시 변수에 할당

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
