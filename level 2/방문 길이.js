// LV2_Summer/Winter Coding(~2018): 방문 길이 - 20221003

// 최종 풀이
function solution(dirs) {
  let place = ["0 0"];
  let road = [];
  let cur = [0, 0];

  dirs.split("").forEach((a) => {
    if (a === "U" && cur[1] <= 4) cur[1]++;
    else if (a === "D" && cur[1] >= -4) cur[1]--;
    else if (a === "R" && cur[0] <= 4) cur[0]++;
    else if (a === "L" && cur[0] >= -4) cur[0]--;
    else return;

    let temp = [place.at(-1), `${cur[0]} ${cur[1]}`].sort();

    road.push(`${temp[0]} ${temp[1]}`);
    place.push(`${cur[0]} ${cur[1]}`);
  });

  return [...new Set(road)].length;
}
