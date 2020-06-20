// create a function that merges two arrays and sorts them

// merge arrays using concat and sort
const mergeSortedArrays = (arr1, arr2) => arr1.concat(arr2).sort();

// merge arrays using spread operator and sort
const mergeSortedArraysSpreadOperator = (arr1, arr2) =>
  [...arr1, ...arr2].sort();

// merge arrays without using sort method
const mergeSortedArraysWithoutmethod = (arr1, arr2) => {
  const mergedArray = [];
  arr1.forEach((item) => mergedArray.push(item));
  arr2.forEach((item) => mergedArray.push(item));

  const isArraySorted = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] && arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  };

  while (!isArraySorted(mergedArray)) {
    for (let i = 0; i < mergedArray.length; i++) {
      const item1 = mergedArray[i];
      const item2 = mergedArray[i + 1];

      if (item1 > item2) {
        mergedArray[i] = item2;
        mergedArray[i + 1] = item1;
      }
    }
  }

  return mergedArray;
};
