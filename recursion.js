const countDown = (val) => (val > 0 ? countDown(val - 1) : val);

const log = (msg) => console.log("hoho...", msg);
const countDownLog = (log, val) => {
  log(val);
  return val > 0 ? countDownLog(log, val - 1) : val;
};

const countDownDelay = (log, val, delay = 1000) => {
  log(val);
  console.log("no delaying...");
  return val > 0
    ? setTimeout(() => {
        countDownDelay(log, val - 1, delay);
      }, delay)
    : val;
};

// console.log(countDownDelay(log, 10));

const dan = {
  type: "person",
  data: {
    gender: "male",
    info: {
      id: 22,
      fullname: {
        first: "Dan",
        last: "Deacon",
      },
    },
  },
};

const deepPick = (term, person) => {
  if (person[term]) {
    return person[term];
  } else {
    const arr = term.split(".");
    const pre = arr.shift();
    console.log("running", arr);
    const newTerm = arr.join(".");

    return deepPick(newTerm, person[pre]);
  }
};

const deepPick1 = (term, person = {}) => {
  const [first, ...remaining] = term.split(".");

  return remaining.length
    ? deepPick1(remaining.join("."), person[first])
    : person[first];
};

// console.log(deepPick1("type", dan));
// console.log(deepPick1("data.info.fullname.first", dan));
const atts = [
  {
    name: "INSIDE DIAMETER",
    format: "(VALUE)(UNIT) ID",
    fields: [
      {
        name: "VALUE",
        type: "text",
        formats: [
          "^[0-9]*$",
          "^[0-9]*\\.[0-9]{2}$",
          "^([0-9]+\\s)?[1-9][0-9]*\\/[1-9][0-9]*$",
        ],
      },
      { name: "UNIT", type: "select", options: ["MM", "CM", "FT"] },
    ],
  },
  {
    name: "HOUSING SIZE",
    format: "(VALUE)",
    fields: [
      {
        name: "VALUE",
        type: "text",
        formats: [
          "^[0-9]*$",
          "^[0-9]*\\.[0-9]{2}$",
          "^([0-9]+\\s)?[1-9][0-9]*\\/[1-9][0-9]*$",
        ],
      },
      { name: "UNIT", type: "select", options: ["MM", "CM", "FT"] },
    ],
  },
  {
    name: "ROLLING ELEMENT",
    format: "(VALUE)",
    fields: [{ name: "UNIT", type: "select", options: ["MM", "CM", "FT"] }],
  },
  {
    name: "SLOT WIDTH",
    format: "(VALUE)",
    fields: [
      {
        name: "VALUE",
        type: "text",
        formats: [
          "^[0-9]*$",
          "^[0-9]*\\.[0-9]{2}$",
          "^([0-9]+\\s)?[1-9][0-9]*\\/[1-9][0-9]*$",
        ],
      },
      { name: "UNIT", type: "select", options: ["MM", "CM", "FT"] },
    ],
  },
  {
    name: "FRAME",
    format: "(VALUE)",
    fields: [
      {
        name: "VALUE",
        type: "text",
        formats: [
          "^[0-9]*$",
          "^[0-9]*\\.[0-9]{2}$",
          "^([0-9]+\\s)?[1-9][0-9]*\\/[1-9][0-9]*$",
        ],
      },
      { name: "UNIT", type: "select", options: ["MM", "CM", "FT"] },
    ],
  },
];

const addID = (atts, arr = []) => {
  for (let att of atts) {
    Object.keys(att).forEach((field) => {
      console.log(arr);
      if (field === "name") {
        att = { id: 123, ...att };
      }
      if (Array.isArray(att[field])) {
        addID(att[field]);
      }
      arr.push(att);
    });
  }
  return arr;
};

// console.log(addID(atts)[0].fields);

const cdownrec = (n) => {
  if (n <= 0) {
    console.log("finished");
    return;
  }
  console.log(n);
  cdownrec(n - 1);
};

const sumRange = (n, a = 0) => {
  if (n <= 0) {
    return a;
  }
  console.log(a);
  return sumRange(n - 1, a + n);
};

// console.log(sumRange(4));

const printChildren = (dan, person = {}) => {
  if (dan.children.length === 0) {
    return;
  }

  printChildren(remaining, person);
};

const strOne = "the simple engineer";
const strReversal = (strOne) => {
  if (strOne === "") return;
  return strReversal(strOne.substring(1)) + strOne.charAt(0);
};

// console.log("hoho", strReversal(strOne));

const palindromeStr = "kabcycbak";

const palindromeReversal = (str) => {
  if (str.length === 0 || str.length == 1) {
    return true;
  }
  if (str.charAt(0) === str.charAt(str.length - 1)) {
    return palindromeReversal(str.substring(1, str.length - 1));
  }
  return false;
};

// console.log(palindromeReversal(str));

const decimalReversal = (n, str = "") => {
  if (n === 0) {
    return str;
  }

  str = (n % 2) + str;
  return decimalReversal(Math.floor(n / 2), str);
};

// console.log(decimalReversal(15));

const sumNums = (n) => {
  if (n == 0) {
    return n;
  }
  return sumNums(n - 1) + n;
};

// console.log(sumNums(10));

const binSearch = (arr, left, right, x) => {
  if (left > right) {
    return -1;
  }
  const mid = Math.floor((left + right) / 2);

  if (x === arr[mid]) {
    return mid;
  }

  if (x < arr[mid]) {
    return binSearch(arr, left, mid - 1, x);
  }
  return binSearch(arr, mid + 1, right, x);
};

const arr = [-1, 1, 2, 3, 4, 7, 8, 9, 10, 11];

// console.log(binSearch(arr, 0, arr.length - 1, 10));

const fib = (n) => {
  if (n === 0 || n === 1) {
    return n;
  } else {
    console.log("first", n);
    return fib(n - 2) + fib(n - 1);
  }
};

// console.log(fib(13));

const sortArr = [4, 1, 3, 2, 0, -1, 7, 10, 9, 20];

const mergeSort = (arr, res = []) => {
  if (arr.length === 0) {
    return res;
  }
  let a = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    a > element ? (a = element) : a;
  }
  res.push(a);
  arr.splice(arr.indexOf(a), 1);
  return mergeSort(arr, res);
};

const merge = (arr, start, mid, end) => {
  const temp = [];
  let i = start,
    j = mid + 1,
    k = 0;
  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      temp[k] = arr[i];
      i++;
      k++;
    } else {
      temp[k] = arr[j];
      k++;
      j++;
    }

    while (i <= mid) {
      temp[k] = arr[i];
      k++;
      i++;
    }
    while (j <= end) {
      temp[k] = arr[j];
      k++;
      j++;
    }
    console.log(temp);
  }
};

const mergeSortOpt = (arr, start, end) => {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    console.log("first", mid);
    mergeSortOpt(arr, start, mid);
    mergeSortOpt(arr, mid + 1, end);
  }
};

// console.log(mergeSortOpt(sortArr, 0, sortArr.length - 1));
// console.log(merge([3, 1, 2, 5, 4], 0, 2, 4));
const isObj = (val) => {
  if (val === null) return false;
  return typeof val === "object";
};

const objPros = (obj, pre) => {
  for (let val in obj) {
    if (isObj(obj[val])) {
      objPros(obj[val], val);
    } else {
      console.log(pre + val, obj[val]);
    }
  }
};

// objPros(atts);

for (let key of dan) {
  console.log(key);
}
