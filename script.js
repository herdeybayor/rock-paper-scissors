const VALUES = ["rock", "paper", "scissors"];

/**
 * isInputValid - Checks if input is valid (rock, paper or scissors)
 * @value: string ("rock" | "paper" | "scissors")
 * Return: true (if value is valid) and false otherwise
 */
function isInputValid(value) {
    // if (value === "rock" || value === "paper" || value === "scissors") {
    //     return true;
    // } else {
    //     return false;
    // }
    if (VALUES.includes(value)) {
        return true;
    } else {
        return false;
    }
}

function compareValues(user, computer) {
    if (user === computer) {
        return "It's a draw :)";
    } else if ((user === "rock" && computer === "paper") || (user === "paper" && computer === "scissors") || (user === "scissors" && computer === "rock")) {
        return "Computer wins 🎉";
    } else {
        return "User wins 🎉";
    }
}

function startGame() {
    // declares a variable to store the user input
    // uses a prompt
    const userChoice = prompt('What do you choose?\n"rock", "paper" or "scissors"');

    // calling the isInputValid function and using it to log outputs
    if (isInputValid(userChoice)) {
        console.log(`User choose: ${userChoice}`); // userChoice = "paper" -> User choose: paper
    } else {
        alert('Invalid input, ("rock", "paper" or "scissors")'); // userChoice = "fish" -> blah blah blah .... error message
        return false;
    }

    // get computer to choose rock, paper or scissors
    const randValue = Math.floor(Math.random() * 3);
    const computerChoice = VALUES[randValue];
    console.log("Computer chose: " + computerChoice);

    alert(compareValues(userChoice, computerChoice));

    return true;
}
