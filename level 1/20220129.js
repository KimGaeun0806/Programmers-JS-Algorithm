// Lv1.연습문제 - 하샤드 수

function solution(x) {
  let idvStringX = String(x).split('');
  let sum = idvStringX.reduce((a, b) => a * 1 + b * 1); // Number(a) 대신 a*1로 형변환
  if (x % sum == 0) {
    return true;
  } else {
    return false;
  }
}

// 다른 사람 풀이
function solution2(x) {
  return !(x % (x + '').split('').reduce((a, b) => +b + +a));
  // x + '' -> String으로 형변환
  // +a -> Number로 형변환
  // js에서 0은 false, 1은 true로 출력됨. !를 붙여서 나눠떨어지면 true, 나눠떨어지지 않으면 false를 return하도록 함
}
