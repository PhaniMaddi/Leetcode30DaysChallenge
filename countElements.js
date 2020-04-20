/**
 *
 * @param {*} arr
 *
 * Accepted Solutions Runtime Distribution
 * Sorry. We do not have enough accepted submissions to show distribution chart
 * :)
 *
 */

var countElements = function (arr) {
  let count = 0;
  let numsSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    numsSet.add(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (numsSet.has(arr[i] + 1)) {
      count++;
    }
  }

  return count;
};

countElements([1, 2, 3, 5, 6]);
