// // LV2_스택/큐 - 다리를 지나는 트럭

// 20230523
// 시간재고 푼 첫 풀이 - 약 1시간 14분
function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridgeBlock = Array.from({ length: bridge_length }, () => 0);
  let bridgeSum = 0;

  let idx = 0;
  while (true) {
    let truck = truck_weights[idx];

    if (bridgeSum + truck <= weight) {
      bridgeBlock.unshift(truck);
      bridgeSum += truck;
      idx++;
    } else {
      bridgeBlock.unshift(0);
    }
    bridgeBlock.pop();
    bridgeSum -= bridgeBlock.at(-1);
    answer++;

    if (idx === truck_weights.length) break;
  }

  return answer + bridge_length;
}

// 다른 사람 풀이
function solution(bridge_length, weight, truck_weights) {
  let time = 0,
    qu = [[0, 0]],
    weightOnBridge = 0;

  while (qu.length > 0 || truck_weights.length > 0) {
    if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

    if (weightOnBridge + truck_weights[0] <= weight) {
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
    } else {
      if (qu[0]) time = qu[0][1] - 1;
    }

    time++;
  }
  return time;
}

// 다른 사람 풀이 2
const solution = (bridgeLength, weight, truckWeights) => {
  const progress = [];
  let i = 1;
  while (true) {
    progress.map((item, j) => {
      if (item.end === i) progress.splice(j, 1);
    });

    if (
      progress.reduce((p, c) => p + c.weight, 0) + truckWeights[0] <=
      weight
    ) {
      progress.push({ end: i + bridgeLength, weight: truckWeights.shift() });
    }

    if (!progress.length && !truckWeights.length) break;
    i += 1;
  }

  return i;
};
