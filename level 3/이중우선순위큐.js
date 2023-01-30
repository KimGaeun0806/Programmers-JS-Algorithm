// LV3_힙(Heap): 이중우선순위큐 - 20230130

// 최종 풀이
function solution(operations) {
  let queue = [];

  operations.forEach((a) => {
    if (a === "D -1") {
      queue = queue.filter((e) => e !== Math.min(...queue));
    } else if (a === "D 1") {
      queue = queue.filter((e) => e !== Math.max(...queue));
    } else {
      queue.push(+a.split(" ")[1]);
    }
  });

  return [Math.max(...queue) | 0, Math.min(...queue) | 0];
}
