// LV2_2021 카카오 채용연계형 인턴십: 거리두기 확인하기

// 20230620
// 시간재고 푼 첫 풀이 - 약 37분
function solution(places) {
  const distance = (arr1, arr2) => {
    return Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
  };

  const func = (arr) => {
    const people = [];
    arr.forEach((a, i) => {
      a.split("").forEach((b, j) => {
        if (b === "P") people.push([i, j]);
      });
    });

    for (let i = 0; i < people.length; i++) {
      for (let j = i; j < people.length; j++) {
        let dis = distance(people[i], people[j]);

        if (dis === 1) return false;
        else if (dis === 2) {
          if (people[i][0] === people[j][0] || people[i][1] === people[j][1]) {
            if (
              arr[(people[i][0] + people[j][0]) / 2][
                (people[i][1] + people[j][1]) / 2
              ] === "X"
            ) {
              continue;
            } else return false;
          } else {
            if (
              arr[people[i][0]][people[j][1]] === "X" &&
              arr[people[j][0]][people[i][1]] === "X"
            )
              continue;
            else return false;
          }
        }
      }
    }

    return true;
  };

  return places.map((a) => {
    if (func(a)) return 1;
    else return 0;
  });

  // [a][b]라고 해야하는데 [a,b]로 해서 시간이 지체됨 -> a와 b가 길어져서 헷갈림. 길어지면 따로 변수로 빼버리기
}
