/** 
 * You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 */
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
const maxSlidingWindow = (nums, k) => {
  const queue = [];
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
    console.log(queue, i);
    while (queue[0] <= i - k) {
      queue.shift();
    }
    if (i >= k - 1) {
      arr.push(nums[queue[0]]);
    }
    console.log("answer", arr);
  }
  console.log(arr);
  return arr;
};
console.log(maxSlidingWindow(nums, k));

const findMax = (nums, p) => {
  const array = [];
  const queue = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    queue.push(element);
    console.log(queue, i);
    if (queue.length >= p) {
      array.push(Math.max(...queue));
      console.log("dealing.555..", queue);
      queue.shift();
    }
  }
  return array;
};

console.log(findMax(nums, k));
