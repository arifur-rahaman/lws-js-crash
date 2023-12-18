/** Array methods:
 * 1. filter()
 * 2. find()
 * 3. map()
 * 4. reduce()
 * 5. slice()
 * 6. splice()
 */
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

/**find method */
// const result = fruits.find((f) => f === "Lemon");
const findResult = fruits.find((f) => f === "Lemon" || f === "Apple"); // will return the first condition element only
// we have to put a call back function
// basically this runs a loop and will go through each element
// needs a parameter, this will bring each element and compare,
// if condition true then it will return that element
console.log("find-method: " + findResult);

/**findIndex method */
// const findIndexResult = fruits.findIndex((fruit) => fruit === "Mango");
const findIndexResult = fruits.findIndex(
  (fruit) => fruit === "Banana" || fruit === "Orange"
); // it returns single and first element index for multiple query
console.log("findIndex method: " + findIndexResult);

/**filter method */
const filterResult = fruits.filter(
  (fruit) => fruit === "Orange" || fruit === "Apple"
);
// it can return multiple element
// it keeps the main array as original
console.log("filter method: " + filterResult);
console.log("Main Array after filter method: " + fruits);
