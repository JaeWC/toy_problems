/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== string[i+1] && string.indexOf(string[i+1]) === string.lastIndexOf(string[i+1])) {
      return string[i+1]
    }
  }
  return null
};
