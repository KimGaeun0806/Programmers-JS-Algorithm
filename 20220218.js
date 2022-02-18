// Lv1.연습문제 - 문자열 내 마음대로 정렬하기

// 첫 번째 풀이
function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] < b[n]) {
      return -1;
    } else if (a[n] > b[n]) {
      return 1;
    } else {
      if (a < b) {
        return -1;
      } else {
        return 1;
      }
    }
  });
  return strings;
  // sort() 메소드는 복사본을 만드는 것이 아니라 원 배열을 정렬함
  // arr.sort([compareFunction]) -> conpareFunction은 정렬 순서를 정의하는 함수
  // compareFunction(a, b)이 0보다 작으면 a가 먼저(더 낮은 인덱스로), 0보다 크면 b가 먼저 옴
}

// 두 번째 풀이
function solution2(strings, n) {
  return strings.sort((a, b) => {
    return a[n] < b[n] ? -1 : a[n] > b[n] ? 1 : a < b ? -1 : 1;
  });
}

// 다른 사람 풀이
function solution3(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
  // localCompare() 메소드는 기존 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에  오는지, 후에 오는지 혹은 같은 순서에 배치되는지 알려주는 숫자 리턴
  // referenceStr.localCompare(compareString[, locales[, options]]) -> compareString은 참조 문자열이 비교되는 문자열
  // 참조 문자열이 비교 문자열보다 앞에 있으면 음수, 뒤에 있으면 양수, 같으면 0
}

//

function solution4(strings, n) {
  return strings.sort((a, b) => {
    const chr1 = a.charAt(n);
    const chr2 = b.charAt(n);

    if (chr1 == chr2) {
      return (a > b) - (a < b);
    } else {
      return (chr1 > chr2) - (chr1 < chr2);
    }
  });
  // charAt() 함수는 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환함
  // true는 1, false는 0이라는 것을 이용
}
