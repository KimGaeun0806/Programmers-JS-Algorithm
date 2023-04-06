// LV2_탐욕법(Greedy): 구명보트 - 20230406

// 최종 풀이
function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);

  while (people.length) {
    if (people[0] + people.at(-1) <= limit) people.shift();
    people.pop();
    answer++;
  }

  return answer;
}

// 다른 사람 코드 참고한 풀이
function solution2(people, limit) {
  let i = 0;
  let j = people.length - 1;

  people.sort((a, b) => a - b);

  while (j - i >= 0) {
    if (people[i] + people[j] <= limit) i++;
    j--;
  }
  return people.length - j - 1;
}
