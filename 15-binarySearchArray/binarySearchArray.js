/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function(array, target, start, end) {
  var start = start || 0;
  var end = end || array.length - 1;
  var midpoint = Math.floor((end + start) / 2);

  if (array[midpoint] === target) return midpoint;

  if (array[midpoint] > target) {
    return binarySearch(array, target, start, midpoint - 1);
  } else if (array[midpoint] < target) {
    return binarySearch(array, target, midpoint + 1, end);
  } else {
    return null;
  }
};
