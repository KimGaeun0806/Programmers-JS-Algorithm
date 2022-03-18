// Lv1.2021 KAKAO BLIND RECRUITMENT - 신규 아이디 추천

function solution(new_id) {
  let id = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, '') // 알파벳 소문자, 숫자, -, _, .이 아닌 것들 제거
    .replace(/[.]+/g, '.') // .가 2번 이상 연속된 것을 1개로 치환
    .replace(/^[.]|[.]$/g, ''); // .가 처음이나 끝에 위치하면 제거
  id = id === '' ? 'a' : id;
  id = /{,15}/.test(id) ? id : id.slice(0, 15).replace(/[.]$/g, ''); // 길이가 16자 이상이면 15자 뒤로는 모두 제거, 그 이후에 .가 끝에 위치하면 제거
  return id.length <= 2 ? id + id[id.length - 1].repeat(3 - id.length) : id;
}

// 다른 사람 풀이
function solution2(new_id) {
  const answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, '') // \w -> [A-Za-z0-9_]와 일치
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a') // ^$ -> 빈 문자열
    .slice(0, 15)
    .replace(/\.$/, '');
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
  // charAt() 함수는 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자 반환
}

//

function solution3(new_id) {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .padEnd(1, 'a')
    .slice(0, 15)
    .replace(/^\.|\.$/g, '');
  return id.padEnd(3, id[id.length - 1]);
  // padEnd 메소드는 현재 문자열에 다른 문자열을 채워, 주어진 길이를 만족하는 새로운 문자열 반환
  // str.padEnd(targetLength [, padString]) -> targetLength는 목표 문자열 길이, padString은 현재 문자열에 채워넣을 다른 문자열
}
