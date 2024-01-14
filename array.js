//binary search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Constraints:
1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
 */

// nums = [-1, 0, 3, 5, 9, 12, 15, 16, 18];
// target = 18;
const search = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let mid = (l + r) >> 1;
    if (nums[mid] === target) {
      console.log("hooray", `found target ${target} in index ${mid}`);
      return mid;
    }
    let isSmall = nums[mid] < target;
    l = isSmall ? mid + 1 : l;
    r = isSmall ? r : mid - 1;
  }
  //   while (l <= r) {
  //     let mid = (l + r) >> 1;
  //     if (nums[mid] === target) {
  //       console.log("hooray", `found target ${target} in index ${mid}`);
  //       return mid;
  //     }
  //     let isSmall = nums[mid] < target;
  //     l = isSmall ? mid + 1 : l;
  //     r = isSmall ? r : mid - 1;
  //   }
  return -1;
};

// search(nums, target);

//977. Squares of a Sorted Array
// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// const nums = [-4, -1, 0, 3, 10];
const sortedSquares = (nums) => {
  const sqNums = nums.map((n) => n * n).sort((a, b) => a - b);
  console.log(sqNums);
};

// sortedSquares(nums);

/*
209. Minimum Size Subarray Sum
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
*/
// const target = 87;
// const nums = [2, 3, 1, 2, 4, 3, 7];

const minSubArrayLen = (target, nums) => {
  let result = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let subLength = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= target) {
        subLength = j - i + 1;
        result = result < subLength ? result : subLength;
        break;
      }
    }
  }

  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
};

// console.log(minSubArrayLen(target, nums));

/*
674. Longest Continuous Increasing Subsequence
Input: nums = [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
4.
*/

// const nums = [1, 1, 1, 1, 1];
const findLengthOfLCIS = (nums) => {
  let a = (result = 0);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] <= nums[i - 1]) {
      a = i;
    }
    result = Math.max(result, i - a + 1);
  }
  return result;
};
// console.log(findLengthOfLCIS(nums));

/*
54. Spiral Matrix
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/
// const matrix = [[1], [5], [9]];
// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16, 17],
// ];
const spiralOrder = (matrix) => {
  let result = [];

  if (matrix.length && matrix[0].length) {
    result = [...result, ...matrix.shift()];
  }
  if (matrix.length && matrix[0].length) {
    result = [...result, ...matrix.map((row) => row.pop())];
  }
  if (matrix.length && matrix[0].length) {
    result = [...result, ...matrix.pop().reverse()];
  }
  if (matrix.length && matrix[0].length) {
    result = [...result, ...matrix.map((row) => row.shift()).reverse()];
  } else {
    return result;
  }
  return [...result, ...spiralOrder(matrix)];
};
// console.log(spiralOrder(matrix));

/*
59. Spiral Matrix II
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
*/

const generateMatrix = (n) => {
  if (n === 0) return [[]];
  if (n === 1) return [[1]];
  const result = Array.from({ length: n }).map(() => new Array(n));
  let rowBegin = 0;
  let colBegin = 0;
  let rowEnd = n - 1;
  let colEnd = n - 1;
  let num = 1;
  while (num <= n * n) {
    for (let i = colBegin; i <= colEnd; i++) {
      result[rowBegin][i] = num;
      num++;
    }
    rowBegin++;

    for (let j = rowBegin; j <= rowEnd; j++) {
      result[j][colEnd] = num;
      num++;
    }
    colEnd--;

    for (let i = colEnd; i >= colBegin; i--) {
      result[rowEnd][i] = num;
      num++;
    }
    rowEnd--;

    for (let j = rowEnd; j >= rowBegin; j--) {
      result[j][colBegin] = num;
      num++;
    }
    colBegin++;
  }

  return result;
};

// console.log(generateMatrix(7));

const head = [7, 7, 7, 7, 7, 7];
const val = 7;
removeElements = function (head, val) {
  return head.filter((el) => el !== val);
};
// console.log(removeElements(head, val));

/*
242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
*/
// const s = "anagram";
// const t = "nagaram";
const isAnagram = (s, t) => {
  const map = {};
  for (let el of s) {
    if (map[el]) {
      map[el]++;
    } else {
      map[el] = 1;
    }
  }

  for (let el of t) {
    if (map[el]) {
      map[el]--;
    } else {
      map[el] = 1;
    }
  }
  if (Object.values(map).every((el) => el === 0)) return true;
  return false;
};

// console.log(isAnagram(s, t));
/*
202. Happy Number
A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/
let n = 19;
const getN = (n) => {
  let result = 0;
  let a = n
    .toString()
    .split("")
    .map((c) => parseInt(c) * parseInt(c));
  a.forEach((element) => {
    result += parseInt(element);
  });
  return result;
};
let result = new Set();
const isHappy = (n) => {
  if (n === 1) return true;
  result.add(n);
  let temp = getN(n);
  if (result.has(temp)) return false;
  console.log(result);
  return isHappy(temp);
};

// console.log(isHappy(100));

/*
454. 4Sum II
Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
Output: 2
Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
*/

const nums1 = [6, 8];
const nums2 = [-2, -3];
const nums3 = [-3, 2];
const nums4 = [-3, -1];

const fourSumCount = (nums1, nums2, nums3, nums4) => {
  // cuadratic solution... counter, reduced from sum_of_two
  let memory = new Map();
  for (let i of nums1) {
    for (let j of nums2) {
      memory.set(-(i + j), memory.get(-(i + j)) + 1 || 1);
      console.log(memory);
    }
  }
  // look in the map if we have seen the complement of this sum
  let output = 0;
  for (let m of nums3) {
    for (let n of nums4) {
      console.log(m + n);
      output += memory.has(m + n) ? memory.get(m + n) : 0;
    }
  }
  return output;
};

// console.log(fourSumCount(nums1, nums2, nums3, nums4));

/*
383. Ransom Note
Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/
const ransomNote = "aa";
const magazine = "ab";
const canConstruct = (ransomNote, magazine) => {
  let obj = {};
  ransomNote.split("").forEach((c) => (obj[c] ? obj[c]++ : (obj[c] = 1)));
  for (let c of magazine) {
    if (obj[c]) obj[c]--;
  }
  if (Object.values(obj).every((v) => v <= 0)) return true;
  return false;
};
// console.log(canConstruct(ransomNote, magazine));

/*
15. 3Sum
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
*/
// const nums = [-1, 0, 1, 2, -1, -4];
// const threeSum = (nums) => {};

// console.log(threeSum(nums));

/**
 * 
 * 344. Reverse String
 * Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
 */

// const s = ["h", "e", "l", "l", "o", "l"];
const reverseString = function (s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    console.log(i, s[i]);
    console.log(j, s[j]);
    i++;
    j--;
  }
};

// console.log(reverseString(s));

/**
 * 
 * 541. Reverse String II
 * Input: s = "abcdefg", k = 2
Output: "bacdfeg"
 */
let s = "abcdefg";
let k = 2;
const reverseStr = function (s, k) {};

// console.log(reverseStr(s, k));

const sumInt = (count) => {
  let arr = new Array(5);
  let sum = 0;
  for (let i = 0; i < count; i++) {
    arr[i] = i + 1;
  }
  for (let i = 0; i < count; i++) {
    sum += arr[i];
  }
  return sum;
};

function objFromVals(vals) {
  let objArr = [];
  let objKeys = [];
  for (let i = 0; i < vals.length; i++) {
    if (i === 0) {
      objKeys = vals[i];
      continue;
    }
    console.log(objKeys);

    let obj = {};
    for (let j = 0; j < vals[i].length; j++) {
      obj[objKeys[j]] = vals[i][j];
    }
    objArr.push(obj);
  }
  return objArr;
}

const vals = [
  { Act: ["martin", 1998] },
  { Act: ["martin1", 1998] },
  { Act: ["martin2", 1998] },
  { Act: ["martin3", 1998] },
  { Dir: ["martin", 1998] },
  { Dir: ["martin", 1998] },
];
function mergeObjArr(vals) {
  let array = [];
  vals.forEach((val) => {
    const arr = [];
    const key = Object.keys(val)[0];
    const value = Object.values(val)[0];
    arr.push(key);
    arr.push(...value);
    array.push(arr);
  });
  return array;
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const p = 4;

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

// console.log(findMax(nums, p));

const atts = {
  TYPE: "SNAP-OFF SINGLE EXPANSION",
  "DRILL SIZE": '1/4"',
  "ANCHOR SIZE": '7/16" OD X 1-1/4" LG',
};

const getOptions = (atts) => {
  let options = {};
  for (let key in atts) {
    if (!key.includes("SIZE")) {
      options[key]
        ? (options[key] = options[key].add(atts[key]))
        : (options[key] = new Set([atts[key]]));
    }
  }
  console.log(options);
  return options;
};

// getOptions(atts);

const arr = [3, 5, 2, 6, 4, 1];

const selSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min;
    min = 2 ** 30;
    for (let j = i; j < arr.length; j++) {
      min = arr[j] > min ? min : arr[j];
    }
    const index = arr.indexOf(min);
    arr[index] = arr[i];
    arr[i] = min;
    // console.log(arr);
  }
  return arr;
};
// selSort(arr);

const insertionSort = (arr, sorted = []) => {
  let i;
};
// insertionSort(arr);

// const arr1 = [91, 4, 6, 24, 8, 7, 59, 3, 13, 0, 11, 98, 54, 23, 52, 87, 4];
const arr1 = [91, 4, 6, 24, 8, 7, 59, 3, 3, 13, 0];
// const arr = [3, 5, 2, 6, 4, 1];
const res = arr.reduce((sorted, el) => {
  let index = 0;
  while (index < sorted.length && el > sorted[index]) {
    // console.log(sorted, index, el);
    index++;
  }
  sorted.splice(index, 0, el);
  return sorted;
}, []);

const quickSort = (arr, low, high) => {
  if (low > high) {
    pivotLocation = Partition(arr, low, high);
    quickSort(arr, low, pivotLocation);
    quickSort(arr, pivotLocation + 1, high);
  }
};

const Partition = (arr, low, high) => {
  let pivot = arr[low];
  let leftwall = low;
  for (let i = low + 1; i < high + 1; i++) {
    if (arr[i] < pivot) {
      console.log(`index:${i}, value:${arr[i]}, pivot:${pivot}`);
    }
  }
};

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return 2 * index + 1;
  }

  rightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  insert(item) {
    this.heap.push(item);
    let index = this.heap.length - 1;
    let parent = this.parentIndex(index);
    while (this.heap[parent] && this.heap[parent] < this.heap[index]) {
      this.swap(parent, index);
      index = this.parentIndex(index);
      parent = this.parentIndex(index);
    }
  }

  delete() {
    let item = this.heap.shift();
    this.heap.unshift(this.heap.pop());
    let index = 0;
    let leftChild = this.leftChildIndex(index);
    let rightChild = this.leftChildIndex(index);
    while (
      (this.heap[leftChild] && this.heap[leftChild] > this.heap[index]) ||
      this.heap[rightChild] > this.heap[index]
    ) {
      let max = leftChild;
      if (this.heap[rightChild] && this.heap[rightChild] > this.heap[max]) {
        max = rightChild;
      }
      this.swap(max, index);
      index = max;
      leftChild = this.leftChildIndex(max);
      rightChild = this.rightChildIndex(max);
    }
    return item;
  }
}

const heapSort = (arr) => {
  const sorted = [];
  const heap1 = new MaxHeap();

  for (let i = 0; i < arr.length; i++) {
    heap1.insert(arr[i]);
  }
  console.log(heap1);
  for (let j = 0; j < arr.length; j++) {
    sorted.push(heap1.delete());
  }

  return sorted;
};

// console.log(heapSort(arr1));
const propArr = [
  {
    fName: "Abby",
    lName: "Dula",
    age: 33,
    score: 98,
  },
  {
    fName: "Martin",
    lName: "Twin",
    age: 23,
    score: 89,
  },
  {
    fName: "James",
    lName: "Bond",
    age: 43,
    score: 100,
  },
  {
    fName: "Huan",
    lName: "Marcelo",
    age: 28,
    score: 77,
  },
  {
    fName: "Jack",
    lName: "Chen",
    age: 60,
    score: 67,
  },
];

const sort2props = (arr, prop1, prop2) => {
  return [...arr].sort((a, b) => {
    if (a[prop1] === b[prop1]) {
      if (a[pro2] === b[prop2]) return 0;
      return a[prop2] > b[prop2] ? 1 : -1;
    } else {
      return a[prop1] > b[prop1] ? 1 : -1;
    }
  });
};

const propArrObj = propArr.reduce((a, c) => ({ ...a, [c.fName]: c }), {});

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(() => console.log(`${arr[i]},index: ${i}`), 2000);
// }

const arrofarr = [1, { a: 5, b: [] }, 2, [3, 4], 5, [6, [7, 8]]];

const flatten = (arr) => {
  const result1 = [];
  const stack = [...arr];
  while (stack.length > 0) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result1.push(next);
    }
  }
  return result1.reverse();
};

let obj = {
  name: "mam",
  getName() {
    return this.name;
  },
};

// console.log(obj.getName?.() ?? "no getName function");

function allWords(str, rgx) {
  return Array.from(str.matchAll(rgx)).reduce((a, c) => {
    let b = (f = c.index),
      w = [str[b]],
      s = " ";
    while (
      b > -1 &&
      f <= str.length &&
      ![w.at(0), w.at(-1)].every((e) => e === s)
    ) {
      w.at(0) !== s && w.unshift(str[--b]);
      w.at(-1) !== s && w.push(str[++f]);
    }
    a.push(w.join("").trim());
    return a;
  }, []);
}
// allWords(str, /o/g) --> (4) ['How', 'our', 'overly', 'long']
const swap = (arr, postion1, postion2) => {
  const arr1 = [...arr];
  [arr1[postion2], arr1[postion1]] = [arr1[postion1], arr1[postion2]];
  return arr1;
};

const removeNth = (arr, n) => {
  arr.filter((v, i) => i);
};

// console.log(arr.filter((v, i) => (i + 1) % 3 !== 0));
const arr2 = [1, 2, 3, 4, 52, 5, 4, 1, 5, 6];
// console.log(arr2.filter((v, i) => arr2.indexOf(v) !== i));

let str = "four score and seven years ago";

const getRepeatedChar = (str, char) => {
  const temArr = [...str];
  char = char.toLowerCase();

  return temArr.reduce(
    (a, el) => (el.toLowerCase() === char ? a.count++ : { ...a }),
    {
      count: 0,
    }
  );
};

const strcount = [...str].reduce((a, c) => {
  if (a[c]) {
    a[c] = a[c] + 1;
  } else {
    a[c] = 1;
  }

  return a;
}, {});

// console.log(
//   Object.fromEntries(Object.entries(strcount).sort(([, a], [, b]) => b - a))
// );

function* randomElement(arr) {
  let elem,
    len = arr.length;
  while (len > 0) {
    let rand = Math.floor(Math.random() * len);
    elem = arr.splice(rand, 1)[0];
    console.log(elem);
    yield elem;
    len = arr.length;
  }
}

// const next = randomElement(arr);
// console.log(arr);
// console.log(next.next(), arr);
// console.log(next.next(), arr);
// console.log(next.next(), arr);
// console.log(next.next(), arr);
// console.log(next.next(), arr);
// console.log(next.next(), arr);
// console.log(next.next(), arr);

console.log(
  arr.reduce((a, c) => {
    if (c > a) return c;
    return a;
  }, 0)
);

const wordCheck = ["test", "run", "jump"];
const compare = [
  "test",
  "run",
  "jump",
  "test",
  "run",
  "test",
  "run",
  "jump",
  "run",
  "jump",
];

const countwds = (arr, com) =>
  arr.map((el) =>
    com.reduce(
      (a, c) => {
        c === el && a[el]++;
        return a;
      },
      { [el]: 0 }
    )
  );

const users = [
  {
    id: 1,
    name: "Mark",
    score: 89,
  },
  {
    id: 3,
    name: "Jason",
    score: 80,
  },
  {
    id: 1,
    name: "Mark",
    score: 89,
  },
  {
    id: 3,
    name: "Jason",
    score: 80,
  },
  {
    id: 2,
    name: "Tim",
    score: 99,
  },
];

const uniqueUsers = [
  ...users.reduce((map, u) => map.set(u.id, u), new Map()).values(),
];

// console.log(arr1.reduce((a, c) => (c === 3 ? a++ : a), 0));

const fibonacci = (res, len) => {
  let num1 = res[0];
  let num2 = res[1];
  let next;
  let cnt = 2;

  while (cnt < len) {
    next = num1 + num2;
    num1 = num2;
    num2 = next;
    res.push(next);
    cnt++;
  }
  return res;
};

const fib = (res, len) => {
  if (res.length >= len) {
    return res;
  }

  res.push(res[res.length - 2] + res[res.length - 1]);

  return fib(res, len);
};

// console.log(fibonacci([1, 1], 10));

const Input = "a,b$c";
const strRev = (input) =>
  [...input].reduce((acc, char) => {
    console.log(char);
    // /\w/.test(char) ? acc.unshift(char) : acc.push(char);
  }, []);

// console.log(strRev(Input));
const empArr = [1, , 2, null, 3, undefined, 4, 5];
console.log(empArr.length);
console.log(empArr.filter((x) => x));


const users1 = [
  { id: 1, name: 'John', email: 'john@test.com', department: 'IT' },
  { id: 2, name: 'Doe', email: 'Doe@test.com', department: 'Marketing' },
  { id: 3, name: 'Morgan', email: 'Morgan@test.com', department: 'IT' },
  { id: 4, name: 'Martha', email: 'Martha@test.com', department: 'Marketing' },
  { id: 5, name: 'Dave', email: 'Dave@test.com', department: 'Sales' },
  { id: 6, name: 'Oslo', email: 'Oslo@test.com', department: 'Sales' },
  { id: 7, name: 'Qiev', email: 'Qiev@test.com', department: 'Product' },
  { id: 8, name: 'Hanzel', email: 'Hanzel@test.com', department: 'Product' },
  { id: 9, name: 'Mats', email: 'Mats@test.com', department: 'Sales' },
  { id: 10, name: 'Yoshimura', email: 'Yoshimura@test.com', department: 'IT' }
]

const tasks = [
  { id: 1, department: 'IT', title: 'Develop company landing page' },
  { id: 2, department: 'IT', title: 'Develop company API' },
  { id: 3, department: 'Product', title: 'Call customers' },
  { id: 4, department: 'Sales', title: 'Sells more!' },
  { id: 5, department: 'IT', title: 'QA' },
]

const mapTasksToUsers = (users,tasks) => {
  // map user by department for mapping
  const userDepMap = users.reduce((map,{department,...user}) => {
    if(!map[department]){
      map[department]=[];
    } 
      map[department].push({...user});
    return map;
  },{});

  //map task to users by department
  const result = tasks.map((task) => ({...task,users:userDepMap[task.department]}));
  return result;
}

const a = mapTasksToUsers(users1,tasks);
for(let b of a){

  console.log(b);
}
