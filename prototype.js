const objProto = {
  fullName() {
    return "My name is " + this.firstName + " " + this.lastName;
  },
};

const user1 = Object.create(objProto);
user1.firstName = "Steven";
user1.lastName = "Handcock";

const Users = function (fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
};

Users.prototype = objProto;
Users.prototype.constructor = Users;

const user2 = new Users("Simon", "Smith");
// console.log(user2.fullName());

const greeting = (greet, name) => `${greet} ${name}`;

const morningGreeting = greeting.bind(null, "Good morning");
// console.log(morningGreeting(greeting("hello", "Jane")));

const exp = (exponent, num) => num ** exponent;

const square = exp.bind(null, 2);
const cube = exp.bind(null, 3);
// console.log(square(exp(3, 10)));

let user4 = {
  name: "Lynn",
};
let user3 = {
  name: "Matt",
  greet() {
    console.log(this);
    console.log(this.name);
  },
};

// setTimeout(() => user3.greet(), 1000);

let greet = user3.greet.bind(user4);
// setTimeout(greet, 1000);
// console.log(user4);

const num = 546366.62;

const usCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

console.log(usCurrency.format(num));
