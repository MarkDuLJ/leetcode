const factoryFun = (newNum) => {
  let num = 100;
  return {
    sum() {
      return num * newNum;
    },
  };
};

const multi10 = factoryFun(10);
console.log(multi10.sum());
