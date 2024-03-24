#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer Will generate a random number - Done.
// 2) ues input for guessing number.
// 3) compare user input with computer genrated number and show result.
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congtratulation! you guessed right number.");
}
else {
    console.log("you gussed wrong num");
}
