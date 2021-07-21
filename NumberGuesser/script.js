let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random()*10);
}
// Write your code below:
/*The function below is to compare what the user enter and the generatered random number assigned to the computer
and evaluate with finding the absolute figures between target and Computer number, and that of human and target number
*/
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
 //finding the absolute figure of human and target figure
  const humanDifference = Math.abs(targetGuess - humanGuess);

  const computerDifference = Math.abs(targetGuess - computerGuess)

  return humanDifference <= computerDifference;  //
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}
const advanceRound = () => currentRoundNumber++;
