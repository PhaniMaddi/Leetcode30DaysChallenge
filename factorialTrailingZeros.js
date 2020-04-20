/**
 *
 * @param {*} n
 * A trailing zero is always produced by prime factors 2 and 5.
 * Number of trailing zeros = count of the number 5s and 2s
 * Since num of 5s is always > num of 2s, num trailing 0s = num of 5s
 */
var trailingZeroes = function (n) {
  if (n < 5) return 0;
  let count = 0;

  while (n > 0) {
    n /= 5;
    count += Math.floor(n);
  }

  return count;
};

let factorial = function (n) {
  let factorial = 1;

  while (n >= 1) {
    factorial *= n;
    n -= 1;
  }
  return factorial;
};

console.log(trailingZeroes(92));
console.log(factorial(92));
