const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1 -  FILTER()
// No need to use return if not using {...}
const res1 = myNums.filter((item) => item > 5);
console.log("Res1 : ", res1);

// return when using {...}
const res2 = myNums.filter((item) => {
  return item > 5;
});
console.log("Res2 : ", res1);

const arr = [
  { title: "Book One", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Two", genre: "English", publish: 2010, edition: 2014 },
  { title: "Book Three", genre: "Maths", publish: 2011, edition: 2014 },
  { title: "Book Four", genre: "Hindi", publish: 2012, edition: 2014 },
  { title: "Book Five", genre: "GK", publish: 2013, edition: 2014 },
];
