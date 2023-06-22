// LV2_2018 KAKAO BLIND RECRUITMENT - [3차] 파일명 정렬

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

// 다른 사람 풀이
function solution(files) {
  const re = /^([a-zA-Z-\. ]+)([0-9]+)(.*)$/;
  let dict = [];
  files.forEach((entry, idx) => {
    let [fn, head, num] = entry.match(re);
    dict.push({ fn, head: head.toLowerCase(), num: parseInt(num), idx });
  });

  return dict
    .sort((a, b) => {
      if (a.head > b.head) return 1;
      if (a.head < b.head) return -1;
      if (a.num > b.num) return 1;
      if (a.num < b.num) return -1;
      return a.idx - b.idx;
    })
    .map((e) => e.fn);
}

// 다른 사람 풀이 2
function solution(files) {
  return files.sort((a, b) => {
    const aHead = a.match(/^\D+/)[0].toLowerCase();
    const bHead = b.match(/^\D+/)[0].toLowerCase();

    if (aHead < bHead) return -1;
    if (aHead > bHead) return 1;

    const aNum = a.match(/\d+/)[0].replace(/^0+/, "");
    const bNum = b.match(/\d+/)[0].replace(/^0+/, "");

    return aNum - bNum;
  });
}
