// LV2_2019 KAKAO BLIND RECRUITMENT: 오픈채팅방 - 20220723

// 최종 코드
function solution(record) {
  let answer = [];
  let name = {};

  record.forEach((a) => {
    let [state, id, nickname] = a.split(" ");

    if (state === "Enter") {
      answer.push(`${id}님이 들어왔습니다.`);
      name[id] = nickname;
    } else if (state === "Leave") {
      answer.push(`${id}님이 나갔습니다.`);
    } else {
      name[id] = nickname;
    }
  });

  return answer.map((a) => a.replace(/\w+/g, (e) => name[e]));
}
