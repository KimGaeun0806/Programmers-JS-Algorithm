// LV1_연습문제 - 바탕화면 정리

// 20230614
// 시간재고 푼 첫 풀이 - 약 28분
function solution(wallpaper) {
  let top = -1;
  let left = -1;
  let right = -1;
  let down = -1;

  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].indexOf("#") >= 0) {
      top = i;
      break;
    }
  }

  for (let i = wallpaper.length - 1; i >= 0; i--) {
    if (wallpaper[i].indexOf("#") >= 0) {
      down = i;
      break;
    }
  }

  for (let i = 0; i < wallpaper[0].length; i++) {
    if (left >= 0) break;
    for (let j = 0; j < wallpaper.length; j++) {
      if (wallpaper[j][i] === "#") {
        left = i;
        break;
      }
    }
  }

  for (let i = wallpaper[0].length - 1; i >= 0; i--) {
    if (right >= 0) break;
    for (let j = 0; j < wallpaper.length; j++) {
      if (wallpaper[j][i] === "#") {
        right = i;
        break;
      }
    }
  }

  return [top, left, down + 1, right + 1];
}

// 다른 사람 풀이
function solution(wallpaper) {
  let left = [];
  let top = [];
  let right = [];
  let bottom = [];
  wallpaper.forEach((v, i) => {
    [...v].forEach((val, ind) => {
      if (val === "#") {
        left.push(i);
        top.push(ind);
        right.push(i + 1);
        bottom.push(ind + 1);
      }
    });
  });
  return [
    Math.min(...left),
    Math.min(...top),
    Math.max(...right),
    Math.max(...bottom),
  ];
}
