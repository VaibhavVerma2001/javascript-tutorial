// async function always return promise
// await can be used only inside async function

const p = new Promise((resolve, reject) => {
  resolve("Promise Resolved");
});

const getData = () => {
  p.then((res) => console.log(res));
};
getData(); // Promise Resolved

// Using async await
const asyncGetData = async () => {
  const res = await p;
  console.log(res);
};
asyncGetData(); // Promise Resolved
