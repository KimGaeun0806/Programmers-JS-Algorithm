// Lv1.연습문제 - 직사각형 별찍기

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = b; i--; ) {
    console.log('*'.repeat(a)); // console.log('*' * a)를 하면 NaN이 뜸
    // repeat() 메소드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열 반환
    // str.repeat(count); -> 매개변수 count는 문자열을 반복할 횟수
  }
});

// 다른 사람 풀이
console.log(('*'.repeat(a) + '\n').repeat(b));
