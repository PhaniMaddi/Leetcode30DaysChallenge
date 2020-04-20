var productExceptSelf = function (nums) {
  let length = nums.length;
  let L = [];
  let R = [];
  let output = [];

  L[0] = 1;
  for (let i = 1; i < length; i++) {
    L[i] = nums[i - 1] * L[i - 1];
  }

  R[length - 1] = 1;

  for (let i = length - 2; i >= 0; i--) {
    R[i] = nums[i + 1] * R[i + 1];
  }

  for (let i = 0; i < length; i++) {
    output[i] = R[i] * L[i];
  }

  return output;
};
// [1, 0]
// [0, 0]
productExceptSelf([1, 0]);
