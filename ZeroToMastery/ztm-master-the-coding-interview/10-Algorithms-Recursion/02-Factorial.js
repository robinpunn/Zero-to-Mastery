// Write two functions that find the factorial of any number. One should be recursive, the other should be a loop

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;
  for (let i = number; i > 1; i--) {
    answer *= i;
  }
  return answer;
}

console.log(findFactorialRecursive(5));
