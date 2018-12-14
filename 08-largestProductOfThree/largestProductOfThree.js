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

  const caseOne = array.slice(array.length - 3)
                       .reduce((accum, curr) => accum * curr)
  const caseTwo = array.slice(0, 2).concat(array[array.length - 1])
                       .reduce((accum, curr) => accum * curr)

  return (caseOne > caseTwo) ? caseOne : caseTwo

  // if (array[array.length - 1] < 0) {
  //   array = array.slice(array.length - 3);
  // } else if (array[1] < 0) {
  //   if (array[0] * array[1] > array[array.length-2] * array[array.length-3]) {
  //     array = array.slice(0, 2).concat(array[array.length - 1])
  //   } else {
  //     array = array.slice(array.length - 3)
  //   }
  // }
  
  // return array.slice(array.length - 3).reduce((accum, curr) => accum * curr)
};
