/**
 *
 * @param {*} s
 * Using Greedy Algorithm
 *
 * Explaination:
 * If the input string is ()()(), the sequence will be 1,0,1,0,1,0.
 * If s = (()()), 1,2,1,2,1,0.
 * But when we introduce * into the mix which can act as either "(" or ")", the possible
 * sequence can be ++ or --. So we'll keep it as a range.
 * i.e.if we have string '(***)', then as we parse each symbol,
 * the set of possible values for the balance is
 * [1] for '('; [0, 1, 2] for '(*'; [0, 1, 2, 3] for '(**';
 * [0, 1, 2, 3, 4] for '(***', and [0, 1, 2, 3] for '(***)'.
 * Furthermore, we can prove these states always form a contiguous interval.
 * Thus, we only need to know the left and right bounds of this interval.
 * That is, we would keep those intermediate states described above as
 * [lo, hi] = [1, 1], [0, 2], [0, 3], [0, 4], [0, 3].
 *
 * When we meet:
 * (, ++maxDiff and ++minDiff.
 * ), --maxDiff and --minDiff.
 * *, ++maxDiff and --minDiff.
 * If maxDiff become negative, it means it's already invalid, we should return false.
 * Whenever minDiff falls below 0, we should force it to be 0 because we never accept negative diff during the process.
 * After scanning through string s, as long as minDiff is 0, this string can be a valid one.
 */

var checkValidString = function (s) {
  let minDiff = 0;
  let maxDiff = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);

    if (char === "(") {
      minDiff++;
      maxDiff++;
    } else if (char === ")") {
      minDiff--;
      maxDiff--;
    } else {
      minDiff--;
      maxDiff++;
    }

    if (maxDiff < 0) return false;

    minDiff = Math.max(minDiff, 0);
  }

  return minDiff === 0;
};

console.log(checkValidString("(((*))"));

// var checkValidString = function (s) {
//   let map = new Map();

//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       let val = map.get(s[i]);
//       map.set(s[i], val + 1);
//     } else {
//       map.set(s[i], 1);
//     }
//   }

//   if (map.get("(") === map.get(")")) {
//     return true;
//   } else if (
//     map.get("(") + map.get("*") === map.get(")") ||
//     map.get(")") + map.get("*") === map.get("(")
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };
