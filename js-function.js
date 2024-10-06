// (1)regular function:
// this is a statement because it does not evalaute any value
// function hello() {
//   console.log("Hey, Whats Up regular function?");
//   //return undefined;
//   // if we do not return anything js will "return undefined" which is a data type
// }

//let massage = hello(); // calling this function will return undefined
//console.log(massage);

// (2)function expression:
// this is an expression because it is evaluates a value
// const hello = function () {
//   console.log("Hey Whats app from function expression?");
// };

//hello(); // we have to call this function by variable name;
//console.log(hello);// we will get [Function: hello]

/***** Statement vs Expression *****/
// statement: which does not evaluate any value
// Expression: which evaluates a value

// (3) named function expression:
// it is a good practice to give name to a function
// const hello = function hello() {
//   console.log("Hey whats up from named function?");
// };

// (4) arrow function:
// const hello = () => {
//   console.log("Hey, whats up from basic arrow func");
// };

// (4a) arrow function short from single line:
// const hello = () => console.log("Hey, whats up from short arrow func");

// (4b) arrow function short from single line without return writing:
//const hello = () => 5;
//const hello = (a, b)=> a + b; // here return is hiden but is there

/**Note: in case of returning an object when we write {} in an arrow
 * function the program will assume that there is a function body, so
 * for any object we have to
 * give separate {}
 */

// const hello = () =>{       ***this is illegal we have to add another {}
//     a: 2,
//     b: 4
// }

// const hello =()=>{         *** this is ok
//     return {
//         a:2,
//         b: 5,
//     };
// }

// const hello = () => ({     ***this is another short form writing object inside ({object})
//   a: 2,
//   b: 5,
// });

// console.log(hello());

// (5) anonymous function:
// anonymous returns inside from another function
// function hello() {
//   return () => {
//     console.log("This is anonymous func from another func");
//   };
// here when we call hello(), it will return this anonymous function from inside
// }


