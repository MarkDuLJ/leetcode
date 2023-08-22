const fs = require("fs");
const myfunc = () => {
  setTimeout(() => console.log("2 seconds waiting..."), 2000);
  setTimeout(() => console.log("half second waiting..."), 500);
  setImmediate(() => console.log("immediately..."));
};

myfunc();
const EventEmitter = require("events");
const path = require("path");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => console.log("event started..."));
eventEmitter.emit("start");

const notes = "/users/joe/notes.txt";
const name1 = path.dirname(notes);
const name2 = path.basename(notes);
const name3 = path.extname(notes);

// console.log(name1, name2, name3);
// console.log(path.basename(notes, path.extname(notes)));

const isFile = (filename) => fs.lstatSync(filename).isFile();
const folderPath = "./";

const files = fs
  .readdirSync(folderPath)
  .map((filename) => path.join(folderPath, filename))
  .filter(isFile);

const buf = Buffer.from("Hey?");
const bufCopy = Buffer.from("Moo!");
const subBuf = buf.subarray(1, 3);
// console.log(subBuf.toString());
// bufCopy.set(subBuf, 1);
// console.log(bufCopy.toString());

const run = (e) => {
  let a = 0,
    b = 10;
  console.log("line 1 a=", a);
  setTimeout(function () {
    a++;
    setTimeout(function () {
      a++;
      console.log("1 attempt: " + a);
    }, 0);
  }, 0);

  console.log("line 2 a=", a);

  setTimeout(() => {
    console.log("2 attempt: " + a);
  }, 0);

  console.log("line 3 a=", a);

  a = b;
  console.log("line 4 a=", a);
};

// run();

let num = 1;
console.log(num);

let id = setInterval(() => {
  num++;
  console.log("first", num);
  if (num > 5) {
    clearInterval(id);
  }
  console.log("second", num + 4);
}, 0);

console.log(num);

while (num < 5) {
  num++;
}
