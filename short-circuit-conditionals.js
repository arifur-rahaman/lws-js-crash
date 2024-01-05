// nullish qualishing
/**
 * short cut of if/else
 * nullish means like null(2 types null or undefined)
 * nullish = Null/undefined
 * nullish qualishing operator ?? means which combines null and undefined
 */
//let language = undefined; // if language = nullihs(null or undefined) ?? will return right side of ?? that means Python
//let language = "Java"; // if language = not null or undefined, ?? will return left side of ?? , that means Java
let language = "Python"; // || will return right side of || for any 6 types of falsy value
/**
 * there are 6 falsy data type:
 * 1. false
 * 2. 0
 * 3. undefined
 * 4. null
 * 5. ""
 * 6. NaN
 * * rest all of others excluding these 6 are truthy
 */

console.log(language ?? "Python");

// logical or ||
/**
 * this is not like nullish qualishing
 * value is not nullish but any kind of falsy;
 * if falsy than || return right side of || ;
 * if truthy than || return left side of ||;
 **/
console.log(language || "JavaScript"); // here it returns left side that means "java"

//logical and &&
/**
 * if truthy than && will return right side of &&
 * if falsy than && will return left side of &&
 */
console.log(language && "PHP");
