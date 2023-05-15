// LV2_2023 KAKAO BLIND RECRUITMENT: 개인정보 수집 유효기간

// 20230515
// 시간재고 푼 첫 풀이 - 약 36분
function solution(today, terms, privacies) {
  const findPeriod = (kind) => {
    let newTerms = terms.filter((e) => e.includes(kind));
    return newTerms[0].slice(2);
  };

  const dateMonthes = (date) => {
    return date.slice(2, 4) * 12 + date.slice(5, 7) * 1;
  };

  let answer = [];
  let todayMonthes = dateMonthes(today);

  privacies.forEach((e, i) => {
    let period = findPeriod(e[11]) * 1;
    let trashDate = period + dateMonthes(e);

    if (trashDate < todayMonthes) answer.push(i + 1);
    else if (trashDate === todayMonthes && today.slice(8, 10) >= e.slice(8, 10))
      answer.push(i + 1);
  });

  return answer;

  // 연도에 12 곱하고 달에 1 곱하는 것인데 둘이 헷갈려서 잘못 적은 것들이 있었음
  // terms 문자열 자를 때 "B 12"같은 경우 slice(2)로 끝까지 잘라야하는데 인덱스 2만 추출했음
}
