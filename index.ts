#! /usr/bin/env node
import inquirer from "inquirer";

const num_guesses = 3; // Number of guesses allowed
async function playGuessingGame() {
    for (let i = 0; i < num_guesses; i++) {
        const randomNum = Math.floor(Math.random() * 6 + 1);
    const answer = await inquirer.prompt([{
      name: "userGuessedNumber",
      type: "number",
      message: "Please Guess the number: ",
    }]);
    
      if (i === num_guesses) { // Check if all guesses were used
        console.log("Out of guesses! Better luck next time.");
      }else{
        console.log("try again")
      }

    if (answer.userGuessedNumber === randomNum) {
      console.log("MashAllah!!! You Guessed the Number in", i + 1, "guesses!");
      break; // Exit the loop if guess is correct
    } else {
      console.log("Ooh! Not quite. The number was {randomNum}. You have {num_guesses - (i + 1)} guesses left.");
    }
  }
}

playGuessingGame(); // Call the function to start the game
