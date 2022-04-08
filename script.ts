import { v4 as uuidv4 } from "uuid";

//import readline module
const readline = require("readline");

//create interface for user input + output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// question user to enter min and max value
rl.question("Enter a min value\n", function (userInput: string) {
  let min = parseInt(userInput);
  console.log("Minimum Value: " + min);

  rl.question("Enter a max value\n", function (userInput: string) {
    let max = parseInt(userInput);
    console.log("Maximum Value: " + max);

    function generateUUID() {
      var random = Math.floor(Math.random() * (max - min)) + min;
      for (let x = 0; x < random; x++) {
        console.log(uuidv4());
      }
      return random;
    }
    console.log("Total Amount of UUID generated: " + generateUUID());

    rl.close();
  });
});
