/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

isPalindrome = str => {
  const reverse = str
    .split('')
    .reverse()
    .join('');

  return str === reverse;
};

var longestPalindrome = function(string) {
  if (string.length === 0) return '';

  let max = '';
  let sub = '';

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      sub = string.substr(i, j - i + 1);
      if (isPalindrome(sub) && sub.length > max.length) {
        max = sub;
      }
    }
  }

  return max;
};
