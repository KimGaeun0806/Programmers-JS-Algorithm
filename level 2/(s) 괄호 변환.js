// LV2_2020 KAKAO BLIND RECRUITMENT: 괄호 변환

// 20230520
// 1시간 내 풀이 실패

// 문제 이해를 제대로 못했음

// 다른 사람 풀이
function solution(p) {
  var answer = "";
  var open = 0;
  var close = 0;

  if (!p) return "";

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") open++;
    else close++;

    if (open === close) {
      if (check(p.slice(0, i + 1))) {
        answer = p.slice(0, i + 1) + solution(p.slice(i + 1));
        return answer;
      } else {
        answer = "(" + solution(p.slice(i + 1)) + ")";

        for (let j = 1; j < i; j++) {
          if (p[j] === "(") {
            answer = answer + ")";
          } else {
            answer = answer + "(";
          }
        }
        return answer;
      }
    }
  }
}

function check(p) {
  var stack = [];
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") stack.push("(");
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return true;
}

// 다른 사람 풀이 2
function solution(w) {
  if (w === "") return "";
  let u, v;
  let cnt = 0;

  const wLen = w.length;
  for (let i = 0; i < wLen; i++) {
    w[i] === "(" ? cnt++ : cnt--;
    if (cnt === 0) {
      u = w.slice(0, i + 1);
      v = w.slice(i + 1);
      break;
    }
  }

  const uLen = u.length;
  for (let i = 0; i < uLen; i++) {
    u[i] === "(" ? cnt++ : cnt--;
    if (cnt < 0) {
      let str = "";
      str += `(${solution(v)})`;
      for (let j = 1; j < uLen - 1; j++) {
        u[j] === "(" ? (str += ")") : (str += "(");
      }
      return str;
    }
  }

  return u + solution(v);
}
