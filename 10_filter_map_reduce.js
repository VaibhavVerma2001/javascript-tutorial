const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1 -  FILTER()
// No need to use return if not using {...}
const res1 = myNums.filter((item) => item > 5);
console.log("Res1 : ", res1); // [ 6, 7, 8, 9, 10 ]

// return when using {...}
const res2 = myNums.filter((item) => {
  return item > 5;
});
console.log("Res2 : ", res1); // [ 6, 7, 8, 9, 10 ]

const arr = [
  { title: "Book One", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Two", genre: "English", publish: 2010, edition: 2014 },
  { title: "Book Three", genre: "Maths", publish: 2011, edition: 2014 },
  { title: "Book Four", genre: "Hindi", publish: 2012, edition: 2014 },
  { title: "Book Five", genre: "GK", publish: 2013, edition: 2014 },
];

const res3 = arr.filter((bk) => bk.publish >= 2012 && bk.genre === "GK");
console.log("Res 3 : ", res3); // [ { title: 'Book Five', genre: 'GK', publish: 2013, edition: 2014 } ]

// 2 - CHAINING -
let nums = ["1", "2", "3", "4", "5"];
// const res4 = nums
//   .map((num) => Number(num))
//   .map((num) => num * 2)
//   .filter((num) => num > 6);

// OR - same result
const res4 = nums.map((num) => Number(num) * 2).filter((num) => num > 6);
console.log("Res4 : ", res4); // Res4 :  [ 8, 10 ]

const res5 = nums.map((num) => {
  num = Number(num) * 2;
  if (num > 6) {
    return num;
  }
});
console.log("Res5 : ", res5); // Res5 :  [ undefined, undefined, undefined, 8, 10 ]
//You're getting undefined because .map() always returns the same number of elements as the original array — and in your case, you are conditionally returning a value only if num > 6. If that condition fails, .map() implicitly returns undefined for those elements.

// 3 - reduce()
nums = [1, 2, 3, 4, 5];
const res6 = nums.reduce((accumulator, currValue) => {
  return accumulator + currValue;
}, 0); // initial value , NOTE -> only in 1st iteration initialValue will be assigned to accumulator.
console.log("Res6 : ", res6); // 15

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const res7 = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log("Res7 : ", res7); // Output: { apple: 3, banana: 2, orange: 1 }

const arr2 = [
  { title: "Book One", genre: "Science", price: 100 },
  { title: "Book Two", genre: "English", price: 200 },
  { title: "Book Three", genre: "Maths", price: 300 },
  { title: "Book Four", genre: "Hindi", price: 400 },
  { title: "Book Five", genre: "GK", price: 500 },
];

// ADD ALL PRICES -
const res8 = arr2.reduce((accu, curr) => accu + curr.price, 0);
console.log("Res8 : ", res8); // 1500
