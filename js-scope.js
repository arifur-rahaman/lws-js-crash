//https://www.youtube.com/watch?v=3sdpkFZUhlA

/*****Lesson 1: javascript scope(lexical scope)*****/
// Lexical Scope: In JS we can get access outsite variable from inside of the function but from outsite we can not get access from inside;

//var lang = "JavaScript";
var lang = "Bangla"; //this var lang is dedicated to the base function main();

function learn(topic) {
  // here this {....} is a function block for learn()
  //lang = topic; //when lang ="Bangla" is still printing JavaScript, because we can get access outstie lang variable from inside;
  var lang = topic; //by var we can create a separate lang; var creates function scope; program things that by var this is separate and only dedicated to the function or local variable;
  console.log(`I am learning ${topic}`);

  /***** Lesson 2: var,let and const ******/
  //let: blocked scoped; can not redeclare; can re-assign
  // var: function scoped; can redeclare and re-assign;  even global varialbe by var is limited to main() function
  // const: can not re-decalre and can not re-assign;

  if (true) {
    let ant = 5; // {....} is a block; 2 steps done here - first declared ant and 2nd assigned ant to 5
    //let ant = 6; by let we can not redeclare
    ant = 6; // by let we can re-assign
    console.log("let: " + ant);
    var aunt = 7;
    var aunt = 8; // by var we can redeclare and re assign
    console.log("var: " + aunt);
    // const obj = {
    //   white: 5,
    // };
    // obj = {
    //   red: 10,
    // };
    // console.log(obj);
  }
  // console.log(ant); // we can not access "ant" from outside if {} block for decalaration by let

  if (true) {
    const obj = {
      white: 5,
      red: 8,
    };
    //obj = { // we can not redeclare by const or re-assign but we can modify object property element
    //  yellow: 10,
    //};
    obj.white = 9; // but we can re-assign the object property value by dot notation
    console.log("Printing new object: ", obj);
  }
}

//console.log(topic); // We can not get access topic from outsite of the function;
learn("JavaScipt");

console.log(`I know ${lang}`);
