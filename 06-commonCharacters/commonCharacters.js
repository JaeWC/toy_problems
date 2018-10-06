/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  const newArray = string1.split(' ').join('').split('');

  for (let i = 1; i < arguments.length; i++) {
    var commonCache = newArray.filter((elem, index) => (arguments[i].includes(elem) && newArray.indexOf(elem) === index))
  }

  return commonCache.join('');
};
