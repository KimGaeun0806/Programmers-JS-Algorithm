// LV2_2021 KAKAO BLIND RECRUITMENT: 메뉴 리뉴얼

// 20230617
// 1시간 내 풀이 실패

// ['ABCD', 'ABCD']가 있는 경우 'ABCD'만 나오는게 아니라 이 안에서 'AB', 'ABC'등 여러 가지가 나올 수 있다는 점을 간과했음

// 다른 사람 풀이
function solution(orders, course) {
  let answer = [];
  let obj = {};

  course.map((num) => {
    orders.forEach((menu) => {
      combination(menu.split(""), num).map((el) => {
        const word = el.sort().join("");
        obj[word] ? (obj[word] += 1) : (obj[word] = 1);
      });
    });
  });

  course.map((num) => {
    let maxNum = 0;
    for (const key in obj) {
      if (obj[key] === 1) continue;
      if (key.length === num) {
        obj[key] > maxNum ? (maxNum = obj[key]) : "";
      }
    }
    let temp = Object.keys(obj).filter((key) => {
      return obj[key] === maxNum && key.length === num;
    });
    temp;
    temp.map((el) => answer.push(el));
  });

  return answer.sort();
}

function combination(arr, num) {
  const result = [];
  if (num === 1) return arr.map((el) => [el]);

  arr.forEach((fix, idx, array) => {
    const restArray = array.slice(idx + 1);
    const combiArr = combination(restArray, num - 1);
    const combiFix = combiArr.map((el) => [fix, ...el]);

    result.push(...combiFix);
  });

  return result;
}

// 다른 사람 풀이 2
function solution(orders, course) {
  const ordered = {};
  const candidates = {};
  const maxNum = Array(10 + 1).fill(0);
  const createSet = (arr, start, len, foods) => {
    if (len === 0) {
      ordered[foods] = (ordered[foods] || 0) + 1;
      if (ordered[foods] > 1) candidates[foods] = ordered[foods];
      maxNum[foods.length] = Math.max(maxNum[foods.length], ordered[foods]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      createSet(arr, i + 1, len - 1, foods + arr[i]);
    }
  };

  orders.forEach((od) => {
    const sorted = od.split("").sort();
    course.forEach((len) => {
      createSet(sorted, 0, len, "");
    });
  });

  const launched = Object.keys(candidates).filter(
    (food) => maxNum[food.length] === candidates[food]
  );

  return launched.sort();
}
