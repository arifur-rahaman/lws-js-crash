/** Array methods:
 * 1. filter()
 * 2. find()
 * 3. findIndex()
 * 3. map()
 * 4. reduce():  to calculate all numbers of a array
 * 5. slice()
 * 6. splice()
 * 7. concat(): to add new element at the end; does not change the original array;
 * 8. push(): to add new element at the end; changes the original array;
 * 9. forEach
 * 10. forIn: this is for not iterable (Objects)
 * 11. forOf: this is for iterable(array, string)
 */
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

/**find() method */
// const result = fruits.find((f) => f === "Lemon");
const findResult = fruits.find((f) => f === "Lemon" || f === "Apple"); // will return the first condition element only
// we have to put a call back function
// basically this runs a loop and will go through each element
// needs a parameter, this will bring each element and compare,
// if condition true then it will return that element
console.log("find-method: " + findResult);

/**findIndex() method */
// const findIndexResult = fruits.findIndex((fruit) => fruit === "Mango");
const findIndexResult = fruits.findIndex(
  (fruit) => fruit === "Banana" || fruit === "Orange"
); // it returns single and first element index for multiple query
console.log("findIndex method: " + findIndexResult);

/**filter() method */
const filterResult = fruits.filter(
  (fruit) => fruit === "Orange" || fruit === "Apple"
);
// it can return multiple element
// it keeps the main array as original
console.log("filter method: " + filterResult);
console.log("Main Array after filter method: " + fruits);

/**slice() method */
// when we want to cut specific indexed element from an array we use slice();
// it takes to parameter: start and end index number
// const sliceResult = fruits.slice(starting index number, ending index number)
const sliceResult = fruits.slice(2, 4);
console.log("slice method: " + sliceResult);
// console.log(fruits); //slice keeps original array as original

/**splice() method */
// it takes minimum 2 parameter: index number(starting point), number of removing
// items and we can give 3rd parameter to as we need as new item we want to add;
// most importantly it changes original array.
// because it changes the original array. it is best practice to make a copy of main array;
// const spliceResult = fruits.splice(index, noOfRemovingItems, newItem1, newItem2, newItem3);
const spliceResult = fruits.splice(1, 3, "newItem1", "newItem2", "newItem3");
// console.log("splice result: " + spliceResult);
// console.log(fruits + " after splice");

/**concat() method */
const concatResult = fruits.concat("musambi", "grape", "lichi");
console.log("concat method: " + concatResult);
// console.log(fruits); //it does not change original array

/**push() method */
const pushResult = fruits.push("musambi", "grape", "lichi", "grape");
console.log("push method: " + pushResult); // push returns array length after push();
console.log(fruits); // it changes original array with new element

/**map() method */
// map() can transform the array and we can use serve our that transformed array but keeping original array as original;
// const mapResult = fruits.map((fruit) => {
//   if (fruit === "grape") {
//     return "grape";
//   } else {
//     return "N/A";
//   }
// });

const mapResult = fruits.map((f) => `${f} !!!`);

//alternative of map() is lengthy process:
// const array = [];
// for (let i = 0; i <= fruits.length; i++) {
//   if (fruits[i] === "grape") {
//     array.push("grape");
//   } else {
//     array.push("N/A");
//   }
// }
// console.log(array);
console.log(mapResult);
console.log(fruits); // map() does not change original array

/**reduce() method */
// we use reduce() when we need to get one result of lots of numbers from array like cumulative sum
const numbers = [2, 4, 6, 10];
const reduceResult = numbers.reduce((cumulitativeTotal, currentValue) => {
  // cumTotal is 0+2 and currentValue is 6, then cumtotal is 6 and currentvalue is 12
  return cumulitativeTotal + currentValue;
}, 0); // 0 is the default cumulitativeTotal;
console.log(reduceResult);

/**forEach method */
//it is for array
const forEachResult = fruits.forEach((f) => {
  if (f != NaN) {
    // console.log("not a number");
  }
});

/**forOf method */
// aplicable only in iterable; means array and string because they have index but not over objects
// over number of array
for (number of numbers) {
  console.log(number);
}

//over strings
const names = "arifur Rahaman";
for (n of names) {
  console.log(n);
}

/**forIn method */
// applicable for objects only
const language = {
  name: "JavaScript",
  year: 1995,
  creator: "Brendan Eich",
};

// to print key
for (key in language) {
  console.log(key);
}
/**  output:
 * name
 * year
 * creator */

// to print value
for (key in language) {
  console.log(language[key]);
}
/** Output:
 * JavaScript
 * 1995
 * Brendan Eich
 */

//1.04 hours
