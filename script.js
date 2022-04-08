"use strict";
// import { v4 as uuidv4 } from "uuid"; //ori code
//import readline module
const readline = require("readline");
//create interface for user input + output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// create empty user input
let userInput = "";
// question user to enter min value
rl.question("Enter a min value\n", function (string) {
    userInput = string;
    console.log("Minimum Value: " + userInput);
    // question user to enter max value
    rl.question("Enter a max value\n", function (string) {
        userInput = string;
        console.log("Maximum Value: " + userInput);
        rl.close();
        // close input stream
    });
    // var min = 20; //ori code
    // var max = 50; //ori code
    // var random = Math.floor(Math.random() * (max - min + 1)) + min;
    // let uuidx = new Array();
    /* process.argv.forEach((min, max) => {
      console.log(`${min}: ${max}`);
    });
     */
    //ori code
    // function generateUUID() {
    //   var random = Math.floor(Math.random() * (max - min + 1)) + min;
    //   // console.log(random);
    //   for (let x = 0; x < random; x++) {
    //     console.log(uuidv4());
    //   }
    //   return random;
    // }
    // console.log("Total Amount of UUID generated: " + generateUUID());
    //sample how to use functions
    /* import uuid from "uuidv4";
    function generateUUID() {
      return 7;
    }
    generateUUID();
    console.log(generateUUID()); */
    /* //ORIGINAL CODE//
     import { uuid } from "uuidv4"; //import uuid from uuid Version 4
    //console.log(uuid());
    
    var random = Math.floor(Math.random() * 50) + 1;
    
    console.log(random);
    for (let x = 0; x < random; x++) {
      console.log(uuid(), x);
    }  */
    //TO VALIDATE UUID TRUE OR FALSE
    /*  import { isUuid } from 'uuidv4';
    console.log(isUuid('75442486-0878-440c-9db1-a7006c25a39f'))    */
});
// var min = 20; //ori code
// var max = 50; //ori code
// var random = Math.floor(Math.random() * (max - min + 1)) + min;
// let uuidx = new Array();
/* process.argv.forEach((min, max) => {
  console.log(`${min}: ${max}`);
});
 */
//ori code
// function generateUUID() {
//   var random = Math.floor(Math.random() * (max - min + 1)) + min;
//   // console.log(random);
//   for (let x = 0; x < random; x++) {
//     console.log(uuidv4());
//   }
//   return random;
// }
// console.log("Total Amount of UUID generated: " + generateUUID());
//sample how to use functions
/* import uuid from "uuidv4";
function generateUUID() {
  return 7;
}
generateUUID();
console.log(generateUUID()); */
/* //ORIGINAL CODE//
 import { uuid } from "uuidv4"; //import uuid from uuid Version 4
//console.log(uuid());

var random = Math.floor(Math.random() * 50) + 1;

console.log(random);
for (let x = 0; x < random; x++) {
  console.log(uuid(), x);
}  */
//TO VALIDATE UUID TRUE OR FALSE
/*  import { isUuid } from 'uuidv4';
console.log(isUuid('75442486-0878-440c-9db1-a7006c25a39f'))    */
