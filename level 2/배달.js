// LV2_Summer/Winter Coding(~2018): 배달 - 20221002

// 최종 풀이
function solution(N, road, K) {
  let arr = Array.from({ length: N - 1 }, (x) => 500001);
  arr.unshift(0);
  let visited = [];
  let num = 1;

  while (visited.length <= N) {
    road.forEach((a) => {
      let other = a.indexOf(num) ? a[0] : a[1];
      if ([a[0], a[1]].includes(num) && !visited.includes(other))
        arr[other - 1] = Math.min(arr[other - 1], a[2] + arr[num - 1]);
    });

    visited.push(num);

    let tempNum = 500001;
    arr.forEach((a, i) => {
      if (!visited.includes(i + 1) && a < tempNum) {
        tempNum = a;
        num = i + 1;
      }
    });
  }

  return arr.filter((e) => e <= K).length;
}
