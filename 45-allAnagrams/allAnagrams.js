/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

var allAnagrams = function(string) {
  // Your code here.
  if (string.length === 1) return [string];

  var uniqOutput = {};

  function recursion(ana, string) {
    if (string === '') {
      uniqOutput[ana] = 1;
    }

    for (var i = 0; i < string.length; i++) {
      recursion(ana + string[i], string.slice(0, i) + string.slice(i + 1));
    }
  }

  recursion('', string);

  return Object.keys(uniqOutput);
};
