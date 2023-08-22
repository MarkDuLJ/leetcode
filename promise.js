let p1 = new Promise((res, rej) => setTimeout(() => res("Done"), 1000));

p1.then(
  (val) => console.log(val),
  (val) => console.log("rejected" + val)
);

let firstName = () =>
  new Promise((res, rej) => setTimeout(() => rej("Steven"), 1000));
let lastName = () =>
  new Promise((res, rej) => setTimeout(() => res("Hancock"), 3000));
let midName = () =>
  new Promise((res, rej) => setTimeout(() => res("Jr."), 2000));

console.log("run this async code");

Promise.race([firstName(), lastName(), midName()])
  .then((msg) => console.log(msg))
  .catch((msg) => console.log(msg));
