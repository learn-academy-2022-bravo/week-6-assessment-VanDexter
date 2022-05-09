// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
 

// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


// psuedo code
  // function of .filter by data type. return an array of just numbers
  // take the numbers and divde by 3

//   finishedArray = (n) => {
//     let numArry = n.filter(
//       value => typeof value === 'number')
//    {divisibleBy3 = numArry.map(number => number % 3)
//   }
//   return divisibleBy3
//   }
//
// console.log(finishedArray(hodgepodge1));

// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// comeToDirtyBirds = (probablyYou) => {
// let livesNearSD =true
//   if (livesNearSD == true) { `${probablyYou} should come to dirty birds`}
//   else {'you should still come anyways'}
// return livesNearSD
// }


console.log(comeToDirtyBirds('dustin'));

// ****************** I THOUGHT THIS IS HOW THE QUESTION READ! IF I DIDN'T HAVE EXPECTED OUTPUTS I WOULD BE DOOMED********************
//   sumArray = (array) => {
//   const summer = array.reduce((a, b) => a + b, 0)
//   return summer ** 3
// }

// sumArray = (array) => {
// const cuber = array.map (value => value **3)
// return cuber.reduce((a, b) => a + b, 0)
// }
//
// console.log(sumArray(cubeAndSum1));
// b) Create the function that makes the test pass.
