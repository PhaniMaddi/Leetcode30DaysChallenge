var rotate = function (nums, k) {
  // for(let i = 0; i < k; i++) {
  //     nums.unshift(nums.pop());
  // }
  let a = [];

  for (let i = 0; i < nums.length; i++) {
    a[(i + k) % nums.length] = nums[i];
    console.log(a);
  }

  // for (let i = 0; i < nums.length; i++) {
  //   nums[i] = a[i];
  // }
  console.log(a);

  return a;
};

rotate([-1, -100, 3, 99], 2);
