function findSweta(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Sweta") {
      console.log("Found Sweta!");
    }
  }
  let t1 = performance.now();
  console.log(`Call to find Sweta took ${t1 - t0} milliseconds`);
}

const large = new Array(10).fill("Sweta");
findSweta(large); // O(n) -> Linear Time
