function createAdvancedCounter() {
  console.log("outer");
  innerHeight();
}

createAdvancedCounter();

function innerHeight() {
  console.log("inner");
}
