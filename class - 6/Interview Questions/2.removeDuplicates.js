/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let ans = [];
  ans[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != ans[ans.length - 1]) {
      ans.push(nums[i]);
    }
  }

  console.log("vijay");

  for (let i = 0; i < ans.length; i++) nums[i] = ans[i];

  return ans.length;
};
