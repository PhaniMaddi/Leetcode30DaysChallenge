var findMaxLength = function (nums) {
  let map = new Map();
  map.set(0, -1);
  let maxLength = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    count = count + (nums[i] === 1 ? 1 : -1);
    if (map.has(count)) {
      maxLength = Math.max(maxLength, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }

  console.log(maxLength);

  return maxLength;
};

findMaxLength([0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1]);
