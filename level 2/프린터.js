// LV2_스택/큐: 프린터 - 20220902

// 최종 풀이
function solution(p, location) {
  let print = 0;

  while (true) {
    const max = Math.max(...p);

    if (p[0] < max) {
      p.push(p.shift());
      location === 0 ? (location = p.length - 1) : (location -= 1);
    } else {
      p.shift();
      print += 1;
      if (location === 0) return print;
      location -= 1;
    }
  }
}
