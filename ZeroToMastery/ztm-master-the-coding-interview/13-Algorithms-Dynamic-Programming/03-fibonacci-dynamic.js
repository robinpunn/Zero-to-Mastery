// 0,1,1,2,3,5,8,13,21,34,55,89,144,233...
let calculations = 0;

function fibonacciMaster() {
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFib = fibonacciMaster();

console.log(fasterFib(10));
console.log("we did " + calculations + " calculations");
