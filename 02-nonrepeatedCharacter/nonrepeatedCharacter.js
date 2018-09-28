/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  newStr = string.split('').sort().join('')

  for (var i = 0; i < newStr.length; i++) {
    if (newStr[i+1] !== newStr[i+2] && newStr[i] !== newStr[i+1]) {
      return newStr[i+1]
    }
  }
  return null
};
