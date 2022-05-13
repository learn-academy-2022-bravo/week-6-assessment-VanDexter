
// a) Create a test with an expect statement using the variable provided.



describe("capitalizeNames", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
  it("Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    expect(capitalizeNames(people)).toEqual("Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee.")

  })
})

// psuedo code
// combine will split array and use touppercase on split items. will combine the letters back together with substring
// will return a sentence using string interpelation




// Objects.entries(people).map((key,value)) => [key,value.toUpperCase]

// console.log(capitalizeNames(people));
const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// b) Create the function that makes the test pass.
const capitalizeNames = (arr) => {
  return arr.map((value) => {
    let splitFirst = value.name.split(' ')
    let capFirst = splitFirst[0][0].toUpperCase() + splitFirst[0].substring(1) + " " + splitFirst[1][0].toUpperCase() + splitFirst[1].substring(1)
    return `${capFirst} is ${value.occupation}`
  })
}

// a) Create a test with an expect statement using the variables provided.

describe("finishedArray", () => {
  it("Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(finishedArray(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(finishedArray(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

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

  finishedArray = (n) => {
    let numArry = n.filter(
      value => typeof value === 'number')
   {divisibleBy3 = numArry.map(number => number % 3)
  }
  return divisibleBy3
  }



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.


describe("sumArray", () => {
  it("returns eat food or keep working based on input", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(sumArray(cubeAndSum1)).toEqual(99)
    expect(sumArray(cubeAndSum2)).toEqual(1125)
  })
})

// psuedo code will have a function called cuber that will .map all items in an array and then cube them with **3

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

sumArray = (array) => {
const cuber = array.map (value => value **3)
return cuber.reduce((a, b) => a + b, 0)
}
