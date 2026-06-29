const readline = require('readline');
const rl= readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);

const options = ['rock','paper','scissor'];

rl.question('Do you wish to start : (y/n)  ', (choice) =>
{
    switch (choice.toLowerCase())
    {
        case 'yes':
            case 'y':
                case '1':
                    play();
                    break;
        case 'no':
            case 'no':
                case '2':
                    rl.close();
                    break;

    }
});
function play()
{
    const randomIndex =Math.floor(Math.random()*options.length);
    const randomChoice = options[randomIndex];
    console.log("1. ROCK 2. Paper 3. Scissor");
    rl.question( "Enter your choice :  ", (opt) =>
    {
        const choices = { "1": "rock", "2": "paper", "3": "scissor" };
        const playerChoice = choices[opt.trim()];

        if(!playerChoice)
        {
            console.log("Enter a valid number");
            rl.close();
            return;
        }

    console.log(`You chose: ${playerChoice} | Computer chose: ${randomChoice}`);

        if(playerChoice== randomChoice)
        {
            console.log("ITS A DRAW");
        }
        else if (playerChoice === "paper" && randomChoice == 'rock' || 
                    playerChoice === "scissor" && randomChoice == 'paper' ||
                        playerChoice === "rock" && randomChoice == 'scissor'
                )
                {
                    console.log("YOU WIN");
                }
        else 
        {
            console.log("You lost");
        }
        rl.close();
    }
    );
};