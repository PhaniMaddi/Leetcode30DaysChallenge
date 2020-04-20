let isHappy = function(n) {
  if (n === 1 || n === 7) return true;
  if (n < 10) return false;

  return isHappy(getSumOfSquaresOfDigits(n));
};

let getSumOfSquaresOfDigits = function(n) {
  let sum = 0;

  let arr = n.toString().split("");
  console.log(arr);

  for (let num in arr) {
    sum += Math.pow(Number(arr[num]), 2);
  }

  console.log(sum);

  return sum;
};

console.log(isHappy(1111111111));
