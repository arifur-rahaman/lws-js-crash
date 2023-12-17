// Event Handler

/** 2 ways:
 *  1. onclick function in HTML(Not followed by professional developer)
 *     >>> in this way event handler function will be triggered when user click the button.
 *  2. DOM and addEventListener (professional developer follow this)
 */

function hello() {
  alert("Hello World!");
}

//DOM
const clicked = document.getElementById("btn");
clicked.addEventListener("click", hello); //here we call hello function without ();
