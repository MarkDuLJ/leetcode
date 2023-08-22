const getClockTime = (time) => {
  console.log("hooho", time);
  const sec = time.getSeconds();
  const hour = time.getHours();
  const mins = time.getMinutes();
  return { hour, mins, sec };
};

const logClockTime = (a) => {
  console.clear();
  console.log(`${a.hour}, ${a.mins}, ${a.sec}`);
  return 0;
};
// setInterval(logClockTime, 1000);

// getClockTime();

const compose =
  (...fns) =>
  (arg) =>
    fns.reduce((a, c) => {
      c(a);
    }, arg);

const showClock = compose(getClockTime, logClockTime);
// console.log(showClock(new Date()));

const oneSec = () => 1000;
const log = (msg) => console.log(msg);
const getCurTime = () => new Date();
const clear = () => console.clear();
const serializeClockTime = (time) => ({
  sec: time.getSeconds(),
  hour: time.getHours(),
  mins: time.getMinutes(),
});
const civilianHours = (val) => ({
  ...val,
  hour: val.hour > 12 ? val.hour - 12 : val.hour,
});
const appendAMPM = (val) => ({
  ...val,
  ampm: val.hour >= 12 ? "PM" : "AM",
});

const display = (target) => (time) => target(time);

const formatClock = (format) => (time) =>
  format
    .replace("hh", time.hour)
    .replace("hh", time.mins)
    .replace("hh", time.sec)
    .replace("tt", time.ampm);

const prependZero = (key) => (clocktime) => ({
  ...clocktime,
  key: clocktime[key] < 10 ? "0" + clocktime[key] : clocktime[key],
});

const convertToCivilianTime = (clocktime) =>
  compose(appendAMPM, civilianHours)(clocktime);

const doubleDigits = (civilianTime) =>
  compose(
    prependZero("hour"),
    prependZero("mins"),
    prependZero("sec")
  )(civilianTime);

const startTicking = () =>
  setInterval(
    compose(
      clear,
      getCurTime,
      serializeClockTime,
      convertToCivilianTime,
      doubleDigits,
      formatClock("hh:mm:ss tt"),
      display(log)
    ),
    oneSec()
  );

console.log(startTicking());
