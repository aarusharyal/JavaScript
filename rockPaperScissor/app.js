const readline = require('readline');
const rl= readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);

// Created a array of the potential Options
const options = ['rock','paper','scissor'];

rl.question('Do you wish to start : (y/n)  ', (choice) =>
    // Ask the user if they're ready to start.
{
    switch (choice.toLowerCase())
    {
        case 'yes':
            case 'y':
                case '1':
                    // Various potential cases the user can enter to Start the game.
                    play();
                    break;
        case 'no':
            case 'no':
                case '2':
                    // Various potential cases the user can enter to end the game.
                    rl.close();
                    break;

    }
});
function play()
{
    const randomIndex =Math.floor(Math.random()*options.length);    // Get a random Index from The array.
    const randomChoice = options[randomIndex];      // Set the choice to the random Index.
    console.log("1. ROCK 2. Paper 3. Scissor");     // Prompt the user to Enter their choice
    rl.question( "Enter your choice :  ", (opt) =>
    {
        const choices = {   
            // Created a object for the options. 
            "1": "rock",
            "2": "paper", 
            "3": "scissor" 
        }; 
        const playerChoice = choices[opt.trim()]; // Trimmed the user provided value and stored in playerChoice.

        if(!playerChoice)
            // Condition to check if the choice is valid
        {
            console.log("Enter a valid number");
            rl.close();
            return;
        }

        // Displaying the user's choice and the computers choice.
    console.log(`You chose: ${playerChoice} | Computer chose: ${randomChoice}`);

        if(playerChoice== randomChoice)
            // Condition for a draw
        {
            console.log("ITS A DRAW");
        }
        else if (playerChoice === "paper" && randomChoice == 'rock' || 
                    playerChoice === "scissor" && randomChoice == 'paper' ||
                        playerChoice === "rock" && randomChoice == 'scissor'
                )
                // Condition for a win
                {
                    console.log("YOU WIN");
                }
        else 
        // If not draw or a win then loss.
        {
            console.log("You lost");
        }
        // Closed the rl interface.
        rl.close();
    }
    );
};