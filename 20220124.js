function solution(id_list, report, k) {
  let answer = Array.from({ length: id_list.length }, () => 0);
  let newReport = Array.from(new Set(report)); // Set 객체를 이용하여 report 배열 중복 제거
  let reportNum = Array.from({ length: id_list.length }, () => 0); // 길이가 id_list.length, 값이 0인 배열 생성 // 각자 몇번 신고당했는지

  for (let i = 0; i < newReport.length; i++) {
    for (let j = 0; j < id_list.length; j++) {
      if (newReport[i].split(' ')[1] === id_list[j]) {
        reportNum[j] = reportNum[j] + 1;
      }
    }
  }

  for (let i = 0; i < reportNum.length; i++) {
    for (let j = 0; j < id_list.length; j++) {
      if (reportNum[i] >= k) {
        if (newReport.includes(`${id_list[j]} ${id_list[i]}`)) {
          answer[j] = answer[j] + 1;
        }
      }
    }
  }
  return answer;
}

// function solution(id_list, report, k) {
//     let answer = Array.from({ length: id_list.length }, () => 0);
//     let newReport = Array.from(new Set(report)); // Set 객체를 이용하여 report 배열 중복 제거
//     let reportNum = Array.from({ length: id_list.length }, () => 0); // 길이가 id_list.length, 값이 0인 배열 생성 // 각자 몇번 신고당했는지

//     for (let i = newReport.length; i--;) {
//       for (let j = id_list.length; j--;) {
//         if (newReport[i].split(' ')[1] === id_list[j]) {
//           reportNum[j] = reportNum[j] + 1;
//         }
//       }
//     }

//     for (let i = reportNum.length; i--;) {
//       for (let j = id_list.length; j--;) {
//         if (reportNum[i] >= k && newReport.includes(`${id_list[j]} ${id_list[i]}`)) {
//             answer[j] = answer[j] + 1;
//         }
//       }
//     }
//     return answer;
//   }
