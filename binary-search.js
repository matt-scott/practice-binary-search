function linearSearch (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

function binarySearch(arr, target) {
  debugger;
  // Set integers pointing to the high and low range of possible indices
  let loIndex = 0;
  let hiIndex = arr.length - 1;

  // While high and low indices do not overlap...
  while (loIndex <= hiIndex) {
    // Find the midpoint between high and low indices
    let midIndex = Math.floor(((hiIndex - loIndex) / 2)) + loIndex;
    // Compare the target value to the midpoint value
    // If the target equals the midpoint...
    if (arr[midIndex] === target) {
      // Return the midpoint index
      return midIndex;
    }
    // If the target is higher than the midpoint...
    if (target > arr[midIndex]) {
      // Move the low pointer to midpoint + 1
      loIndex = midIndex + 1;
    }
    // If the target is less than the midpoint...
    if (target < arr[midIndex]) {
      // Move the high pointer to midpoint - 1
      hiIndex = midIndex - 1;
    }
  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;

}

let array = [1,2,3,4,5,6,7,8,9];
let x = binarySearch(array, 9);
console.log(x);

module.exports = [linearSearch, binarySearch]