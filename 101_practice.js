function createAdvancedCounter() {
  let count = 0;

  return {
    increment: () => console.log(++count),
    decrement: () => console.log(--count),
    reset: () => {
      count = 0;
      console.log("Reset to", count);
    },
  };
}

const counter = createAdvancedCounter();
console.log(counter);
