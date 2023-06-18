//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// console.log(reverseStringIterative("yoyo mastery"));
//should return: 'yretsam oyoy'

function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStringRecursive("yoyo mastery"));
