/**
 * https://leetcode.com/problems/running-sum-of-1d-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let a = [];
  a[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    a[i] = a[i - 1] + nums[i];
  }

  return a;
};
