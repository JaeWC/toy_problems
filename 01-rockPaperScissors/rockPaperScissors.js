/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (rounds
) {
  // TODO: your solution here
  rounds = rounds || 3
  var result  = [];
  var choices = ['rock', 'paper', 'scissors'];

  var recursion = function(n, inner) {
    if (n === 0) {
      result.push(inner)
      return;
    }

    choices.forEach(function(choice) {
      recursion(n-1, inner.concat(choice))
    })
  }

  recursion(rounds, [])
  
  return result
};
