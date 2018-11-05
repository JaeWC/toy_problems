/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

function gcd(str) {
  var array = str.split(' ').map(Number);
  var firstNum = array[0];
  var secondNum = array[1];

  if (secondNum === 0) {
    return firstNum;
  }

  str = secondNum + ' ' + (firstNum % secondNum);
  return gcd(str);
}

var toFraction = function(number) {
  // Your code here
  if (number === 0) return '0/1';
  let firstNumber = parseInt(number);

  let secondNumber = number - firstNumber;

  let zeroNumber = secondNumber.toString().length - 2;

  let zeros = 1;
  for (i = 0; i < zeroNumber; i++) {
    zeros *= 10;
  }

  console.log(number);
  console.log(firstNumber);
  console.log(secondNumber);
  console.log(secondNumber.toString().length - 2);
  console.log(zeros);
  console.log(`${parseInt(secondNumber * zeros)} ${zeros}`);
  let common = gcd(`${secondNumber * zeros} ${zeros}`);
  console.log(gcd(`${secondNumber * zeros} ${zeros}`));

  console.log(Number.isInteger(common));

  console.log(`${parseInt(secondNumber * zeros) / common}/${zeros / common}`);

  if (secondNumber === 0) return `${firstNumber}/1`;

  if (!Number.isInteger(common)) {
    return `${parseInt(secondNumber * zeros)}/${zeros}`;
  }

  return `${parseInt(secondNumber * zeros) / common +
    firstNumber * (zeros / common)}/${zeros / common}`;
};
