let maximum = parseInt(prompt("Enter a number between 0-50:"));
while (!maximum) {
    let maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess == 'q') { break; }
    attempts++;

    if (guess > targetNum) {
        guess = parseInt(prompt("Too high! Enter a new guess!Press q for quit!"));
    } else {
        guess = parseInt(prompt("Too low! Enter a new guess!Press q for quit!"));
    }
}
if (guess === 'q') {
    console.log("Ok, you quit!");
} else if (attempts == 1) {
    console.log("Congrats!You win!");
    console.log(`YOU GOT IT! It took you ${attempts} guess.`);
} else if (attempts > 1) {
    console.log("Congrats!You win!");
    console.log(`YOU GOT IT! It took you ${attempts} guesses.`);
}
