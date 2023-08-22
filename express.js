// const val = '1-1/8"-12 TPI';
// const val = '7/16"-20 TPI';
const val = '3-1/2" WD X 132MM LG';
// const val = '5/8" ID';
const attName = "SIZE";
const numRe = /\d+.?(\d+)?/g;
const inchRe = /(\d+-)?\d+(\/\d+)?/g;
const tpiRe = /(\d+-)?\d+(\/\d+)?"-\d+/g;
const unitRe = /"|(MM)|(M\s+)/g;

const findValue = (val, numRe, unitRe, matchesInch = null) => {
  const matches = val.match(numRe);
  const matchesOpt = val.match(matchesInch);
  const units = val.match(unitRe);
  console.log(matches, matchesOpt, units);
  const res = {};
  if (
    ((matches && matches.length === 1) ||
      (matchesOpt && matchesOpt.length === 1)) &&
    units
  ) {
    const value = matches && matches[0] ? matches[0] : matchesOpt[0];
    const unit = units[0];
    res.value = value;
    res.unit = unit;
  } else {
    res.error = `parse ${val} failed`;
  }

  return res;
};

//val from customer row, attribute from category template
const findFieldValues = (atts, attribute) => {
  const attName = attribute.name;
  const val = atts[attName];
  const tempFields = attribute.fields;
  // console.log(tempFields);
  const resultAtt = {
    name: attName,
    value: val,
  };
  if (attName.includes("SIZE") && tempFields.length > 1) {
    console.log(attName, val);
    return resultAtt;
  } else {
    switch (attName) {
      default:
        return resultAtt;
        break;
    }
  }
};

const findSize = (val, inchRe, unitRe, numRe) => {
  const valArr = val.split(/\s+?X\s+?/g);
  const resArr = [];
  for (let i = 0; i < valArr.length; i++) {
    const element = valArr[i];
    res.push(findValue(element, inchRe, unitRe, numRe));
  }
  return resArr;
};

const arr1 = [
  "LENGTH",
  "SHAFT HEIGHT",
  "SHAFT CENTER",
  "BLOCK HEIGHT",
  "BOLT CENTER FIXED",
  "BOLT CENTER MIN",
  "BOLT CENTER MAX",
  "WIDTH",
  "BLOCK WIDTH",
  "INSIDE DIAMETER",
  "OUTSIDE DIAMETER",
];

const arr2 = [
  "INSIDE DIAMETER",
  "OUTSIDE DIAMETER",
  "WIDTH",
  "LENGTH",
  "BLOCK HEIGHT",
  "BLOCK WIDTH",
  "THREADS",
  "SHAFT HEIGHT",
  "SHAFT CENTER",
  "BOLT CENTER FIXED",
  "BOLT CENTER MIN",
  "BOLT CENTER MAX",
];

const arr3 = [
  1,
  2,
  3,
  4,
  "BOLT CENTER FIXED",
  "BOLT CENTER MIN",
  "BOLT CENTER MAX",
];
const arr4 = [5, 6, 7, 4];

// console.log(arr2.filter((e) => arr1.indexOf(e) === -1));

const arr = [
  {
    name: "khk",
    error: "error one",
  },
  {
    name: "kk",
    error: "error two",
  },
  {
    name: "khak",
    error: "error three",
  },
  {
    name: "khaak",
    error: "error four",
  },
];

const groupBy = (arr, keygetter) => {
  const map = new Map();
  arr.forEach((item) => {
    const key = keygetter(item);
    const collection = map.get(key);
    console.log(map);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
};

const str = "0.28-0.4A";
const Re_U = /(?<=(\d+|\s+))A|(MA)|(KA)/g;
const Re_V = /((\d+.)?\d+[-\/]){0,3}(\d+.)?\d+/g;
///(?<=(\d+|\s+))A/g
console.log(findValue(str, Re_V, Re_U));
