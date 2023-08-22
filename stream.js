const http = require("http");
const fs = require("fs");
const Stream = require("stream");

const server = http.createServer((req, res) => {
  // const stream = fs.createReadStream("input.txt");
  // stream.pipe(res);
  fs.readFile("input.txt", (err, data) => {
    res.end(data);
  });
});

// server.listen(3000, () => console.log("i'm running..."));

const readableStream = new Stream.Readable({
  read() {},
});

const writableStream = new Stream.Writable();

writableStream._write = (chunk, encoding, next) => {
  // console.log(chunk);
  console.log(chunk.toString());
  next();
};

readableStream.pipe(writableStream);

// readableStream.on("readable", () => {
//   console.log("consuming read...", readableStream.read());
// });

readableStream.push("hi!");
readableStream.push("hoo");

readableStream.on("close", () => {
  writableStream.end();
});

writableStream.on("close", () => console.log("writing ended..."));

readableStream.destroy();

console.log(WebAssembly.Table);

const myInit = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  mode: "cors",
  cache: "default",
};

const request = new Request("https://www.mozilla.org/favicon.ico");
let myReq = new Request("./testdata/vendors.json", myInit);

fetch(myReq)
  .then((res) => {
    console.log("works");
    console.log(res);
  })
  .catch((err) => console.log(err));
