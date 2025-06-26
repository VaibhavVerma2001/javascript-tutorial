const arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const res = arr.map((item) => {
  const temp = {...item};
  temp.id = 10;
  return temp;
});

console.log(arr);
console.log(res);
