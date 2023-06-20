// // LV2_2018 KAKAO BLIND RECRUITMENT: [3차] 방금그곡

// 20230620
// 시간재고 푼 첫 풀이 - 약 47분
function solution(m, musicinfos) {
  const timeFunc = (str) => {
    let [hour, minute] = str.split(":");
    return hour * 60 + minute * 1;
  };

  const divideFunc = (str) => {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i + 1] === "#") {
        arr.push(str[i] + "#");
        i++;
      } else arr.push(str[i]);
    }
    return arr;
  };

  let answerArr = [];

  musicinfos.forEach((a) => {
    let [start, end, title, song] = a.split(",");
    let period = timeFunc(end) - timeFunc(start);
    let all = divideFunc(song);

    for (let i = 0; i < Math.ceil(period / divideFunc(song).length); i++) {
      all = [...all, ...divideFunc(song)];
    }

    all = all.slice(0, period).join("");
    let reg = new RegExp(`${m}(?!#)`, `g`);
    if (reg.test(all)) answerArr.push([period, title, song]);
    // 처음에는 all.includes(m)으로만 했음 -> "ABC#"만 있어도 "ABC"가 있다고 간주될 수 있음
    // x(?!y) -> x 다음에 y가 오지 않는 경우에만 x와 일치함
    // new RegExp(`${변수}`, `g`) -> 정규표현식 내에 변수를 넣을 수 있음
  });

  answerArr.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0];
  });

  if (!answerArr[0]) return "(None)"; // 예외처리 주의
  return answerArr[0][1];

  // "AB#C"가 있다면 "A", "B#", "C" 세 개로 봐야 하는데, 처음에 str.length로 4개로 처리했음
}
