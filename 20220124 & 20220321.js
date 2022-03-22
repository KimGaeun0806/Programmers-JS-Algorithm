// Lv1.2022 KAKAO BLIND RECRUITMENT - 신고 결과 받기

// 20220321 - success

function solution(id_list, report, k) {
  let nReport = Array.from(new Set(report)); // 배열 중복 제거

  let arr = Array.from({ length: id_list.length }, () => []);
  // let arr = new Array(id_list.length).fill([]);을 하게 되면, arr[2].push('a')와 같이 했을 때 arr[2]뿐만이 아니라 arr 안의 모든 배열에 'a'가 들어감

  nReport.map((a) => {
    arr[id_list.indexOf(a.split(' ')[1])].push(a.split(' ')[0]);
  });

  let id = arr.map((a) => {
    if (a.length >= k) return a;
  });

  let flatId = id.flat(); // 중첩 배열 평탄화
  return id_list.map((a) => {
    return flatId.filter((e) => e === a).length;
  });
}

// 실패했던 코드
function solution2(id_list, report, k) {
  let [first, second] = [[], []];

  let answer = new Array(id_list.length).fill(0);
  let nReport = Array.from(new Set(report));

  nReport.map((a) => {
    first.push(a.split(' ')[0]);
    second.push(a.split(' ')[1]);
  });

  second.map((a, i) => {
    if (second.filter((e) => e === a).length >= k) {
      answer[id_list.indexOf(first[i])]++;
    }
  });
  return answer;
} // 몇몇 테스트 케이스 시간 초과로 실패

//

// 20220124 - failed

function solution3(id_list, report, k) {
  let answer = Array.from({ length: id_list.length }, () => 0);
  let newReport = Array.from(new Set(report)); // Set 객체를 이용하여 report 배열 중복 제거
  let reportNum = Array.from({ length: id_list.length }, () => 0); // 길이가 id_list.length, 값이 0인 배열 생성 // 각자 몇번 신고당했는지

  for (let i = newReport.length; i--; ) {
    // (let i = 0; i < newReport.length; i++) 부분을 성능최적화를 위해 수정
    for (let j = id_list.length; j--; ) {
      if (newReport[i].split(' ')[1] === id_list[j]) {
        reportNum[j] = reportNum[j] + 1;
      }
    }
  }

  for (let i = reportNum.length; i--; ) {
    for (let j = id_list.length; j--; ) {
      if (
        reportNum[i] >= k &&
        newReport.includes(`${id_list[j]} ${id_list[i]}`)
      ) {
        answer[j] = answer[j] + 1;
      }
    }
  }
  return answer;
} // 첫 번째 코드 -> 중첩 for문이 너무 많아서 정확성 테스트에서 실패

function solution4(id_list, report, k) {
  let answer = Array.from({ length: id_list.length }, () => 0);
  let newReport = Array.from(new Set(report)); // Set 객체를 이용하여 report 배열 중복 제거

  let id = [];
  let alert = [];
  let alertNum = [];

  for (var key in newReport) {
    id.push(newReport[key].split(' ')[0]);
    alert.push(newReport[key].split(' ')[1]);
  }

  for (let i = 0, id_listLength = id_list.length; i < id_listLength; i++) {
    alertNum.push(alert.filter((n) => n === id_list[i]).length);
  }

  alertNum.map((item, index) => {
    id_list.map((item1, index1) => {
      if (
        alertNum[index] >= k &&
        newReport.includes(`${id_list[index1]} ${id_list[index]}`)
      ) {
        answer[index1] = answer[index1] + 1;
      }
    });
  });

  return answer;
} // 두 번째 코드 -> 첫 번째 코드에서 중첩 for문을 없애려고 해보았으나 큰 진전 없이 정확성 테스트 실패
