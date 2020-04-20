var backspaceCompare = function (S, T) {
  return getFreshString(S) === getFreshString(T);
};

let getFreshString = function (str) {
  let freshStr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#") {
      freshStr.pop();
    } else {
      freshStr.push(str[i]);
    }
  }

  return freshStr.join("");
};

console.log(backspaceCompare("a#c", "b"));
