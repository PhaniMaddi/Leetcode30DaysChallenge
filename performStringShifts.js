/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  let totalShift = 0;

  // first calculate totalShift
  // - indicates left shift and + is right shift
  for (let i = 0; i < shift.length; i++) {
    let dir = shift[i][0];
    let amt = shift[i][1];

    if (dir === 0) {
      totalShift += amt;
    } else if (dir === 1) {
      totalShift -= amt;
    }
  }

  if (totalShift === 0) {
    return s;
  } else if (totalShift > 0) {
    return leftRotate(s, totalShift % s.length);
  } else if (totalShift < 0) {
    return leftRotate(s, s.length + (totalShift % s.length));
  }
};

let leftRotate = (s, d) => {
  return `${s.substring(d)}${s.substring(0, d)}`;
};

// console.log(
//   stringShift("abc", [
//     [1, 1],
//     [0, 2],
//   ])
// );
// console.log(
//   stringShift("xqgwkiqpif", [
//     [1, 4],
//     [0, 7],
//     [0, 8],
//     [0, 7],
//     [0, 6],
//     [1, 3],
//     [0, 1],
//     [1, 7],
//     [0, 5],
//     [0, 6],
//   ])
// );

console.log(
  stringShift("yzeuobhwxatulpruiab", [
    [1, 15],
    [0, 18],
    [0, 12],
    [0, 7],
    [0, 7],
    [1, 17],
    [1, 15],
    [0, 9],
    [1, 4],
    [0, 19],
    [1, 16],
    [0, 7],
    [1, 4],
    [1, 17],
    [1, 19],
    [1, 10],
    [1, 2],
    [0, 18],
    [1, 15],
  ])
);
