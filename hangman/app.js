import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const word = "programming";
const guessed = [];
let lives = 6;

function playGame() {
  let displayWord = "";
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (guessed.includes(letter)) {
      displayWord += letter + " ";
    } else {
      displayWord += "_ ";
    }
  }
  console.log("\nWord: " + displayWord);
  console.log("Lives left: " + lives);
  console.log("Guessed letters: " + (guessed.join(", ") || "None"));

  if (!displayWord.includes("_")) {
    console.log("\n You won! You guessed the word!");
    rl.close();
    return;
  }
  if (lives <= 0) {
    console.log("\n Game over! The word was: " + word);
    rl.close();
    return;
  }

  rl.question("\nGuess a letter: ", (input) => {
    const letter = input.trim().toLowerCase();

    if (letter.length !== 1) {
      console.log("❌ Please enter exactly one letter.");
      playGame();
      return;
    }

    if (guessed.includes(letter)) {
      console.log(" You already guessed that letter!");
      playGame();
      return;
    }

    guessed.push(letter);

    if (!word.includes(letter)) {
      lives--;
      console.log(" Incorrect!");
    } else {
      console.log(" Correct!");
    }

    playGame();
  });
}

playGame();

//   _______
//  |/      |
//  |      (_)
//  |      \|/
//  |       |
//  |      / \
//  |
// _|___
