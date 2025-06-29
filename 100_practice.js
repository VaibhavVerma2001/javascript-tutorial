let i = 1;
setInterval(() => {
  console.log("Inside set time out async : ", i);
  i++;
}, 1000);

for (let i = 0; i < 100000; i++) {
  console.log(i);
}
console.log("END");
