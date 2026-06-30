const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numberToGuess = parseInt(randomInt(1, 100));
let attempts = 0;
let maxAttempts;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('Welcome to the Guess the Number Game!');
console.log('Enter the difficulty level (easy, medium, hard):');
rl.question('Difficulty: ', (difficulty) => {
    switch (difficulty.toLowerCase()) {
        case 'easy':
            case 'e':
                case '1':
            maxAttempts = 10;
            askGuess();
            break;
        case 'medium':
            case 'm':
                case '2':
            maxAttempts = 7;
            askGuess();
            break;
        case 'hard':
            case 'h':
                case '3':
            maxAttempts = 5;
            askGuess();
            break;
        default:
            console.log('Invalid difficulty level. Please choose easy, medium, or hard.');
            rl.close();
            return;
    }
});

function askGuess() {
    if (attempts < maxAttempts) {
        rl.question('Enter your guess (1-100): ', (guess) => {
            attempts++;
            const guessNumber = parseInt(guess);
            if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100)
            {
                console.log('Please enter a valid number between 1 and 100.');
                askGuess();
            }
            else if (guessNumber === numberToGuess)
            {
                console.log(`Congratulations! You've guessed the number ${numberToGuess} in ${attempts} attempts.`);
                console.log('DO YOU WANT TO PLAY AGAIN? (yes/no)');
                rl.question('Your choice: ', (choice) => 
                {
                if (choice.toLowerCase() === 'yes' || choice.toLowerCase() === 'y')
                {
                attempts = 0;
                askGuess();
                } 
                else 
                {
                console.log('Thanks for playing!');
                rl.close();
                }
                })
            }
            else if (guessNumber < numberToGuess)
            {
                console.log('Too low! Try again.');
                askGuess();
            }
            else if(guessNumber > numberToGuess)
            {
                console.log('Too high! Try again.');
                askGuess();
            }
        });
    }
    else
    {
        console.log('GAME OVER!');
        console.log(`You've used all your attempts. The number was ${numberToGuess}.`);
        console.log('Better luck next time!');
        console.log('-------------------------------');
        console.log('DO YOU WANT TO PLAY AGAIN? (yes/no)');
        rl.question('Your choice: ', (choice) =>
        {
            if (choice.toLowerCase() === 'yes' || choice.toLowerCase() === 'y')
            {
                attempts = 0;
                askGuess();
            }
            else
            {
                console.log('Thanks for playing!');
                //Added thank you message.
                rl.close();
            }
        });
    }
}