const reverseString = (str, ss) => {
  //   console.log(str.split(""));
  return str.split("").reverse().join("");
};

// reverseString.author = "Me";
// reverseString.sum = (n, m) => n + m;
// console.log(reverseString.author);
// console.log(reverseString.sum(3, "6"));
// console.dir(reverseString);
// console.log(reverseString.toString());

const obj = (n, m) => n + m;
obj.b = { b: "6" };
// console.log(obj);

db.companies.find({
  $and: [
    { $or: [{ founded_year: 2004 }, { founded_month: 10 }] },
    { $or: [{ category_code: "web" }, { category_code: "social" }] },
  ],
});

db.companies
  .find({ $expr: { $eq: ["$permalink", "$twitter_username"] } })
  .count();
db.companies.find({ offices: { $elemMatch: { city: "Seattle" } } }).count();
db.zips.find({ pop: { $gte: 5000, $lte: 1000000 } }).count();

db.trips.find({ "address.city": "NEW YORK" }).count();
db.listingsAndReviews.aggregate([
  { $project: { room_type: 1, _id: 0 } },
  { $group: { _id: "$room_type" } },
]);

// mongosh "mongodb+srv://sandbox.6kneyne.mongodb.net/myFirstDatabase"  --username m001-student --password m001-mongodb-basics
