const fruits = ["Banana", "Orange"];

// spread operator works to perfect copy the values from array
const result = [...fruits, fruits]; //here ...fruits means a copy of values where fruits means array
// fruits.push("mango");
result.push("Mango");
console.log(fruits);
console.log(result);

/**
 * exception in case of array of objects:
 * 1. ... does not make perfect copy
 */
const person = [
  {
    name1: "Arif",
  },
  { name2: "Raju" },
];
// we can not perfectly copy this by:
const persons = [...person];
console.log(persons);

//in case of object
const languages = {
  names: "java",
  year: 1995,
};

//const tech = [...languages]; // this will not work and it will give an error: can not iterable
const techs = {
  ...languages, // first make an object and then ...
  languages,
};

// console.log(tech); will give error
console.log(techs);

/**
 * ...rest operator:
 * it enables to take multiple arguments when we dont to know how many
 * arguments will be given
 */

function sum(...rest) {
  console.log("all given input by rest: ", rest);
  return rest.reduce(
    (cumulitativeSum, currentValue) => cumulitativeSum + currentValue
  );
}

console.log(sum(2, 23, 34, 50, 20, 45));

// if we want to print text by rest operator:
function sum1(text, ...rest) {
  const resultAll = rest.reduce((sum, cur) => sum + cur);
  console.log(`${text} ${resultAll}`);
}

sum1("The sum is: ", 12, 234, 234, 12, 123);
