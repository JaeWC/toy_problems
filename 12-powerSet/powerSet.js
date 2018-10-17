/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  var unique = str.split("");

  var unique = unique.reduce(function(a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);

  str = unique.join("");

  let result = [];

  var length = str.length;

  for (var i = 0; i < 2 ** length; i++) {
    var bin = i.toString(2);

    if (bin.length !== length) {
      var diff = length - bin.length;
      if (diff === 3) {
        bin = "000" + bin;
      } else if (diff === 2) {
        bin = "00" + bin;
      } else if (diff === 1) {
        bin = "0" + bin;
      }
    }

    var splitted = bin.split("");
    var power = "";
    splitted.filter(function(elem, index) {
      // console.log(splitted);
      if (elem === "1") {
        // console.log(str[index]);
        power += str[index];
      }
      // result.push(power);
    });
    result.push(power);
  }

  return result.sort();
};
