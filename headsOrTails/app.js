import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const options =['heads', 'tails'];

rl.question('Do you wish to start :(y/n) ', (choice)
{
    switch (choice.toLowerCase())
    {
        case 'yes':
            case 'y':
                case '1':
                    play();
                    break;
        case 'no':
            case 'n':
                case '2':
                    rl.close();
                    break;
    }
});

