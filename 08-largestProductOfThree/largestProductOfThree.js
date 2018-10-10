/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // TODO: everything
  array = array.sort((a, b) => a - b)

  if (array[array.length - 1] < 0) {
    array = array.slice(array.length - 3);
  } else if (array[1] < 0) {
    var first = array.slice(0, 2).concat(array[array.length - 1])
    var second = array.slice(array.length - 3)

    if (array[0] * array[1] > array[array.length-2] * array[array.length-3]) {
      array = first
    } else {
      array = second
    }
  }
  return array.slice(array.length - 3).reduce((accum, curr) => {
    return accum * curr;
  }, 1)
};
