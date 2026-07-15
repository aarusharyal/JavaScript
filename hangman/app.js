// Simple Hangman game using Node's readline for console I/O
import readline from "readline";

// Create readline interface to read input and write output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// The secret word to guess
const word = "programming";

// Array to store letters the player has guessed
const guessed = [];

// Number of allowed incorrect guesses
let lives = 6;

// Main game loop: displays progress, checks win/lose, and prompts for a guess
function playGame() {
  // Build display string showing guessed letters and underscores
  let displayWord = "";
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (guessed.includes(letter)) {
      displayWord += letter + " ";
    } else {
      displayWord += "_ ";
    }
  }

  // Show current game state
  console.log("\nWord: " + displayWord);
  console.log("Lives left: " + lives);
  console.log("Guessed letters: " + (guessed.join(", ") || "None"));

  // Check for win (no underscores left)
  if (!displayWord.includes("_")) {
    console.log("\nYou won! You guessed the word!");
    rl.close();
    return;
  }

  // Check for loss (no lives)
  if (lives <= 0) {
    console.log("\nGame over! The word was: " + word);
    rl.close();
    return;
  }

  // Prompt the player for a letter
  rl.question("\nGuess a letter: ", (input) => {
    // Normalize input
    const letter = input.trim().toLowerCase();

    // Validate input length
    if (letter.length !== 1) {
      console.log("Please enter exactly one letter.");
      playGame();
      return;
    }

    // Prevent guessing the same letter twice
    if (guessed.includes(letter)) {
      console.log("You already guessed that letter!");
      playGame();
      return;
    }

    // Record the guess
    guessed.push(letter);

    // Update lives if the guess is incorrect
    if (!word.includes(letter)) {
      lives--;
      console.log("Incorrect!");
    } else {
      console.log("Correct!");
    }

    // Continue the game loop
    playGame();
  });
}

// Start the game
playGame();

// ASCII hangman (for fun)
//   _______
//  |/      |
//  |      (_)
//  |      \|/
//  |       |
//  |      / \
//  |
// _|___
