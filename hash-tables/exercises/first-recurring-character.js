// create a function that returns the first recurring character in a given array.

// solved by storing occurrences in a hashtable (object), for fast lookup
const firstRecurringCharacter = (array) => {
  const occurrences = {};
  return array.find((char) => {
    if (occurrences[char]) {
      return char;
    }
    occurrences[char] = true;
  });
};

// solution with array instead of object(hashtable), also works but slower
const firstRecurringCharacterArray = (array) => {
  const occurrences = [];
  return array.find((char) => {
    if (occurrences.includes(char)) {
      return char;
    }
    occurrences.push(char);
  });
};

// another array solution, still slower than object(hashtable) solution
const firstRecurringCharacterArray2 = (array) => {
  return array.find((char, index) => {
    return array.slice(index + 1).includes(char);
  });
};
