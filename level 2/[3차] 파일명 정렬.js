// // LV2_2018 KAKAO BLIND RECRUITMENT - [3차] 파일명 정렬

// 20230519
// 시간재고 푼 첫 풀이 - 약 20분
function solution(files) {
  const splitPart = (str) => {
    let answer = ["", 0];
    for (let x of str) {
      if ("0123456789".includes(x)) answer[1] += x;
      else {
        if (answer[1] !== 0) break;
        answer[0] += x.toUpperCase();
      }
    }
    return answer;
  };

  files.sort((p, c) => {
    if (splitPart(p)[0] === splitPart(c)[0]) {
      return +splitPart(p)[1] - +splitPart(c)[1];
    } else {
      if (splitPart(p)[0] < splitPart(c)[0]) return -1;
      else return 0;
    }
  });

  return files;

  // sort 사용법 헷갈려서 MDN 참고함
  // 문자열 정렬할 때는 p - c처럼 넣으면 안됨
}
