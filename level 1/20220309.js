// Lv1.정렬 - K번째수

function solution(array, commands) {
  const sliceFunc = (a, c) => {
    return a.slice(c[0] - 1, c[1]).sort((a, b) => a - b)[c[2] - 1];
  };

  return commands.map((a, i) => {
    return sliceFunc(array, commands[i]);
  });
}

// 다른 사람 풀이
function solution2(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
  // 구조 분해 할당 -> 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 함
  // let a, b, rest; [a, b, ...rest] = [10, 20, 30, 40, 50]; 인 경우 a = 10, b = 20, rest = [30, 40, 50]이 됨
  // let x = [1, 2, 3, 4, 5]; let [y, z] = x; 의 경우 y = 1, z = 2가 됨
}

//

function solution3(array, commands) {
  return commands.map((v) => {
    return array
      .slice(v[0] - 1, v[1])
      .sort((a, b) => a - b)
      .slice(v[2] - 1, v[2])[0];
  });
}
