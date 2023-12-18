//Primitive: Number, string, Boolean; these are core; we can do things by these

//Reference or non-primitive: Array, object;

//Primitive Explanation:
let x = 5;
// here we can change value of x and we dont change the reference;
let y = 6;

// y = x; // here we change the value of y by x's value; y = x and x = y do not mean same as value different
x = y; // here we change to value of x by y's value but not the reference. and y's value does not change;
y = 8; // we can still get x = y's previous value but we can see we can assign new value to y;
console.log(x);
console.log(y);

//Referrence Explanation:
let a = ["JS", "Python"];
let b = ["HTML", "CSS"];

b = a; // here we change the value of b by a's value
// a = b;

console.log(a);
console.log(b);
a.push("Java");
b.push("Go");

console.log(a);
console.log(b); //here by push() into a[] we also changed the b[]. This is the problem. here when b[] = a[] we copyied the reference. So when we change any of them will change both
