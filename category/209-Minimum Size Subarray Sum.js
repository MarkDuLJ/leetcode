/** 
 * Given an array of positive integers nums and a positive integer target, 
 * return the minimal length of a contiguous subarray
 *  [numsl, numsl+1, ..., numsr-1, numsr] of which the sum 
 * is greater than or equal to target. If there is no such subarray, 
 * return 0 instead.

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 */
const nums = [2, 2, 3, 1, 2, 4, 3];
const k = 7;
const minSubArrayLen = (nums, k) => {
  let result = 10000;
  let subLength = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= k) {
        console.log("hhhh", sum, i, j);
        subLength = j - i + 1;
        result = result > subLength ? subLength : result;
        break;
      }
    }
  }
  return result;
};

const minSubArrayLen1 = (nums, k) => {
  let sublen = 10000;
  let queue = [];
  for (let i = 0; i < nums.length - 1; i++) {
    console.log(i);
    let j = i;
    while (queue.reduce((a, c) => a + c, 0) < k) {
      queue.push(nums[j]);
      j++;
      console.log(queue, j, i);
    }
    sublen = sublen > queue.length ? queue.length : sublen;
    queue = [];
  }
  return sublen;
};

// Input: target = 7, nums = [2,3,1,2,4,3]

const minSubArrayLen2 = (nums, k) => {
  let sublen = 10000;
  for (let i = 0; i < nums.length - 1; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= k) {
      }
    }
  }
  return sublen;
};

console.log(minSubArrayLen2(nums, k));
