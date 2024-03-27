// index.js

//  import the crypto module
const crypto = require('crypto');


//  get a commands using process.argv


// complete the  function

const add = (num1, num2) => num1 + num2;

// Function to perform subtraction
const sub = (num1, num2) => num1 - num2;

// Function to perform multiplication
const mult = (num1, num2) => num1 * num2;

// Function to perform division
const divide = (num1, num2) => num1 / num2;

// Function to generate a random number of the desired length
const generateRandomNumber = (length) => {
  if (!length) {
    console.log("Provide length for random number generation.");
    return;
  }
  const bytes = crypto.randomBytes(Math.ceil(length / 2));
  const randomNumber = parseInt(bytes.toString('hex'), 16);
  console.log(randomNumber.toString().substring(0, length));
};

// Function to handle command-line arguments and perform calculations
const calculate = () => {
  // Retrieving command line arguments
  const args = process.argv.slice(2);

  // Checking if there are enough arguments
  if (args.length < 1) {
    console.log('Usage: node index.js <operation> [operands]');
    return;
  }

  // Parsing operation and operands
  const operation = args[0];
  const operands = args.slice(1).map(Number);



switch (operation) {

    case 'add':
      if (operands.length !== 2) {
        console.log('Usage: node index.js add <num1> <num2>');
        return;
      }
      console.log(add(...operands));
      break;
    case 'sub':
      if (operands.length !== 2) {
        console.log('Usage: node index.js sub <num1> <num2>');
        return;
      }
      console.log(sub(...operands));
      break;
    case 'mult':
      if (operands.length !== 2) {
        console.log('Usage: node index.js mult <num1> <num2>');
        return;
      }
      console.log(mult(...operands));
      break;
    case 'divide':
      if (operands.length !== 2) {
        console.log('Usage: node index.js divide <num1> <num2>');
        return;
      }
      if (operands[1] === 0) {
        console.log('Error: Division by zero');
        return;
      }
      console.log(divide(...operands));
      break;
    case 'sin':
      if (operands.length !== 1) {
        console.log('Usage: node index.js sin <angle>');
        return;
      }
      console.log(Math.sin(operands[0]));
      break;
    case 'cos':
      if (operands.length !== 1) {
        console.log('Usage: node index.js cos <angle>');
        return;
      }
      console.log(Math.cos(operands[0]));
      break;
    case 'tan':
      if (operands.length !== 1) {
        console.log('Usage: node index.js tan <angle>');
        return;
      }
      console.log(Math.tan(operands[0]));
      break;
    case 'random':
      if (operands.length > 1) {
        console.log('Usage: node index.js random [length]');
        return;
      }
      generateRandomNumber(operands[0]);
      break;
  
  default:
    console.log("Invalid operation");
}}

calculate();
