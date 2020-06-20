// create a function that reverses a given string

// simply using the reverse method on arrays
const reverse = (string) => string.split("").reverse().join("");

// simply using reverse method and spread operator
const reverseWithSpreadOperator = (string) => [...string].reverse().join("");

// solution without using the reverse method
const reverseWithoutMethod = (string) => {
  reversed = [];
  length = string.length - 1;
  while (length >= 0) {
    reversed.push(string.charAt(length));
    length--;
  }
  return reversed.join("");
};
