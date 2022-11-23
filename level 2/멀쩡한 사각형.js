// LV2_Summer/Winter Coding(2019): 멀쩡한 사각형 - 20220813

// 최종 코드
function solution(w, h) {
  let width = 0;
  let heigth = 0;
  let num = 0;

  for (let i = w; i > 0; i--) {
    if (h % i === 0 && w % i === 0) {
      [width, heigth] = [w / i, h / i];
      num = i;
      break;
    }
  }

  return w * h - num * (width + heigth - 1);
}
