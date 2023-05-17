// LV2_완전탐색: 피로도

// 20230517
// 시간재고 푼 첫 풀이 - 약 50분
function solution(k, dungeons) {
  let answer = 0;

  const order = (arr) => {
    let answer = [];
    if (arr.length === 2) {
      return [
        [arr[0], arr[1]],
        [arr[1], arr[0]],
        // Array.prototype.reverse() 메서드는 원본 배열을 변형함
      ];
    } else {
      arr.forEach((e, i) => {
        const first = e;
        const rest = [...arr];
        rest.splice(i, 1);
        // Array.prototype.splice() 메서드는 원본 배열을 변경. 반환값은 제거한 요소를 담은 배열
        order(rest).map((a) => answer.push([first, ...a]));
      });
    }
    return answer;
  };

  const exploreDungeons = (arr) => {
    let blood = k; // 아래 코드에서 blood 대신 k로 쓰지 않게 주의하기
    let idx = 0;

    for (let x of arr) {
      if (x[0] > blood) return idx;
      blood -= x[1];
      idx++;
    }
    return arr.length;
  };

  for (let x of order(dungeons)) {
    if (answer < exploreDungeons(x)) answer = exploreDungeons(x);
  }

  return answer;
}

// 다른 사람 풀이
function solution2(k, d) {
  const N = d.length;
  const visited = new Array(N).fill(0);
  let ans = 0;

  function dfs(k, cnt) {
    ans = Math.max(cnt, ans);

    for (let j = 0; j < N; j++) {
      if (k >= d[j][0] && !visited[j]) {
        visited[j] = 1;
        dfs(k - d[j][1], cnt + 1);
        visited[j] = 0;
      }
    }
  }

  dfs(k, 0);
  return ans;
}

// 다른 사람 풀이2
function solution(k, dungeons) {
  const filtered = dungeons.slice().filter((v) => v[0] <= k);

  let answer = 0;
  for (let i = 0; i < filtered.length; i++) {
    const subAnswer = solution(
      k - filtered[i][1],
      filtered.filter((_, j) => i !== j)
    );
    if (subAnswer + 1 > answer) answer = subAnswer + 1;
  }
  return answer;
}

// 다른 사람 풀이3
function solution(k, dungeons) {
  let answer = 0;
  const visited = Array.from({ length: dungeons.length }, () => false);

  function DFS(hp, L) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && dungeons[i][0] <= hp) {
        visited[i] = true;

        DFS(hp - dungeons[i][1], L + 1);

        visited[i] = false;
      }
    }

    answer = Math.max(answer, L);
  }

  DFS(k, 0);

  return answer;
}
