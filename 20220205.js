// Lv1.연습문제 - 정수 내림차순으로 배치하기
function solution(n) {
  let stringArr = String(n).split('');
  let numberArr = stringArr.map((v) => Number(v)); // Number(v) 대신 v * 1도 가능
  return Number(numberArr.sort((a, b) => b - a).join(''));
  // split() 메소드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눔

  // sort() 메소드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환함
  // arr.sort([compareFunction]) -> compareFunction은 정렬 순서를 정의하는 함수. compareFunction(a, b)이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬, 0보다 큰 경우 b를 a보다 낮은 색인으로 정렬
  // numberArr.sort((a, b) => b - a)를 하면 내림차순 정렬이 됨. ((a, b) => a - b)인 경우 오름차순

  // join() 메소드는 배열의 모든 요소를 연결해 하나의 문자열로 만듦
  // arr.join([separator]) -> separator(Optional)은 배열의 각 요소를 구분할 문자열 지정
}

// 다른 사람 풀이
function solution2(n) {
  const newN = n + '';
  // 정수 n을 문자열로 만들기
  const newArr = newN.split('').sort().reverse().join('');
  // ['1', '1', '8', '3', '7', '2']에 sort()메소드를 적용하면 ['1', '1', '2', '3', '7', '8']과 같이 정렬됨 (한자리수에 한해서)
  // 오름차순으로 정렬된 것에 reverse()메소드를 적용해서 내림차순으로 바꿈
  return +newArr;
  // + 기호를 붙여서 숫자형으로 변환

  // 문자로 푸는 것보다 숫자로 푸는 것이 더 빠름
}
