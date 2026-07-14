import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const options = ["Heads", "Tails"];

rl.question("Do you wish to start :(y/n) ", (choice) => {
  switch (choice.toLowerCase()) {
    case "yes":
    case "y":
    case "1":
      play();
      break;
    case "no":
    case "n":
    case "2":
      rl.close();
      break;
  }
});

function play() {
  const randomIndex = Math.floor(Math.random() * options.length);
  const randomChoice = options[randomIndex];
  console.log(randomChoice);
  rl.close();
}
