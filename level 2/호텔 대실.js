// LV2_연습문제: 호텔 대실

// 20230518
// 시간재고 푼 첫 풀이 - 약 40분
function solution(book_time) {
  const endTime = [];

  const timeToNum = (str) => {
    let splitedStr = str.split(":");
    return splitedStr[0] * 60 + splitedStr[1] * 1;
  };

  book_time.sort((a, b) => timeToNum(a[0]) - timeToNum(b[0]));

  book_time.forEach((time) => {
    let earlyEnd = 9999;
    let earlyEndIdx = -1;
    let idx = 0;

    for (let x of endTime) {
      if (x + 10 <= timeToNum(time[0]) && earlyEnd > x) {
        earlyEnd = x;
        earlyEndIdx = idx;
      }
      idx++;
    }

    if (earlyEndIdx >= 0) endTime[earlyEndIdx] = timeToNum(time[1]);
    // -1도 true로 인식됨. 0만 falsy한 값이고 음수는 truthy한 값임
    else endTime.push(timeToNum(time[1]));
  });

  return endTime.length;

  // 시간 오래 걸린 부분
  // timeToNum = (str) => +str.replace(':', ''); 로 해서 통과안되는 테케가 있었음
  // -> 15:50에서 10을 더할 경우 16:00이 되지 않고 15:60이 돼서 계산이 꼬임
  // -> 시간 형태 계산 시 문자열을 그대로 숫자로 바꾸지 않고 초,분단위로 정확히 계산해서 숫자로 변환하는 것이 안전할 것 같음
}

// 다른 사람 풀이
function makeMinStamp(time) {
  const [hour, min] = time.split(":").map((v) => Number(v));
  return hour * 60 + min;
}

function solution2(book_time) {
  const timeArr = Array.from({ length: makeMinStamp("23:59") + 10 }, () => 0);

  book_time.forEach((time, i) => {
    const [s, e] = time;
    let start = makeMinStamp(s);
    const end = makeMinStamp(e) + 9;

    for (start; start <= end; start++) {
      timeArr[start]++;
    }
  });

  return Math.max(...timeArr);
}

// 다른 사람 풀이 2
function solution3(book_time) {
  let room = [];

  book_time = book_time.map((item) => {
    return item.map(
      (el) => Number(el.split(":")[0]) * 60 + Number(el.split(":")[1])
    );
  });

  book_time.sort((a, b) => a[0] - b[0]);
  room.push(book_time[0]);

  for (i = 1; i < book_time.length; i++) {
    let room_add_flag = true;
    for (j = 0; j < room.length; j++) {
      if (room[j][1] + 10 <= book_time[i][0]) {
        room[j] = book_time[i];
        room_add_flag = false;
        break;
      }
    }

    if (room_add_flag) {
      room.push(book_time[i]);
    }
  }

  return room.length;
}
