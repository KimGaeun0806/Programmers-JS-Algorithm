// LV2_완전탐색: 전력망을 둘로 나누기

// 20230617
// 힌트 보고 푼 풀이
function solution(n, wires) {
  let answer = 200;

  const func = (arr, cut) => {
    const set1 = new Set([cut[0]]); // new Set() 안에는 iterable한 요소만 넣을 수 있음 (배열 등)
    const set2 = new Set([cut[1]]);

    while (arr.length > 0) {
      arr = arr.filter((e) => {
        if (set1.has(e[0]) || set1.has(e[1])) {
          set1.add(e[0]); // set1.add(...e)처럼 하면 안됨
          set1.add(e[1]);
          return false;
        } else if (set2.has(e[0]) || set2.has(e[1])) {
          set2.add(e[0]);
          set2.add(e[1]);
          return false;
        } else return true;
      });
    }
    return Math.abs(set1.size - set2.size);
  };

  wires.forEach((a, i) => {
    let newWires = [...wires];
    newWires.splice(i, 1);
    let result = func(newWires, [a[0], a[1]]);
    if (answer > result) answer = result;
  });

  return answer;

  // 처음에는 for문으로 앞 요소부터 차례차례 set1과 set2에 넣는 방식으로 했지만 테케 대부분 실패했음 -> 트리구조라서 순서대로 하면 안되는 것 같음
}
