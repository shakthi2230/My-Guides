// Normal function, Arrow function, Hoisting, Closure


// Normal function
function add(x, y) { return x + y; }
console.log(add(2,3)); // 5

// Arrow function
const mul = (x,y) => x*y;
console.log(mul(2,3)); // 6

// Closure
function makeCounter() {
  let count = 0;
  return () => ++count;
}


const c = makeCounter();
console.log(c()); //1
console.log(c()); //2
