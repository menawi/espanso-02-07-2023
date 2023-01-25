// console.log('hi');

// let x = 7;
// let y = 3;
// let z = x + y;
// console.log("Answer: " + z);

// var _x = 22
// var $x = 25
// var x = 26

// console.log(x + $x + _x);

// let firstNumber;
// let secondNumber;
// var firstName;
// let lastName;
// let zipCode;

// firstName = "Omar"

// console.log("Hello, my name is ", firstName, ", very nice to meet you!");

// firstName = "Yumna"

// console.log("My wife's name is ", firstName, ", she is the best woman I know in the entire world!");

/*
let z = 7;
console.log(typeof z);

let y = true;
console.log(typeof y);

let x = 'hello';
console.log(typeof x);

let a;
console.log(a);
console.log(typeof a);

*/

// convert type

/*
let a = 7;
let b = '6';
b = parseInt(b, 10);
let c = a + b;
console.log(c); */

/*
let d = parseInt('bob', 10);

let e = isNaN(d);
console.log(d);
console.log(e);*/

// javascript syntax

// variable declaration

/*let a = "apples"
console.log(a);

// assign a value
a = 4;
a = 5;
console.log(a);
console.log(a);

let b = 3; let c = 44; let z = b + c; console.log(b + c); */

// Categories of Operators below

// assignment =

// arithmetic + - * / , modulus (modulus I didn't understand)

// var m = 10 % 3;
// console.log(m);

// increment / decrement

/*var f = 1;
f++;
console.log(f++);
// when put the ++ to the left, it will evaluate the increment first then print - don't know how to explain it but try both and see
console.log(++f);*/

// string operator

// precedence (order of operations)
/*var b = 1 + 2 * 3;
console.log(b); */

// Logical and : && and or: ||

// member accessor operator
// console.log();

// code block operators {}

// array element access operators [] : arrays are objects

/*let a = [2, 8, 15, 24, 25, 88, 99];
let b = ["apples", "bananas", "alex", "michael"];
// grab index
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

// below: assign an index from the array a new value
let c = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(c[0]);
c[0] = 7;
console.log(c);

console.log(typeof c);

let d = [4, "alex", true];
console.log(d);

// print out the length of the array
console.log(c.length);
// add an element/item into the array

/*c[10] = 15;
console.log(c);
console.log(c.length);*/
// it will return length of array + "x2 empty items" because we haven't assigned values to those empty positions

// better way to add elements to the array:

/*console.log(c);
c.push(15, 16);
console.log(c.length); */

// arrays are important to keep things organized and accessible

// functions:

/*
function sayHello(params) {
     console.log('-------------');
     console.log('hello!');
     console.log('-------------');
}

// sayHello();

/* let x = sayHello;
x(); */

/*
function sayHello(name) {
     console.log('-------------');
     console.log('hello! ' + name + '!');
     console.log('-------------');
}

sayHello('bob');
sayHello('beth');
sayHello('Mr Tibble');

*/

// Now to return values from functions: more interesting things now!

/*
function calculateTax(amount) {
     let result = amount * 0.0825;
     return result;
}

let tax = calculateTax(100);
console.log(tax);

function temperature(temp) {
     let resultOf = temp * 1.6;
     return resultOf;
}

let temp = temperature(37);
console.log(temp);

function X(Y) {
     let XY = Y / 10;
     return XY;
}

Y = 100;
Z = X(Y);
console.log(Z);

*/

// function expressions:

/*
setTimeout(function () {
     console.log("I waited 2 seconds");
}, 2000);

setTimeout(() => {
     console.log("I waited 3 seconds");
}, 3000);

setTimeout(() => {
     console.log('apples !!');
}, 4000); */


// counter: will count number of times the function result is returned

/* let counter = 0;
function timeout() {
     setTimeout(function () {
          console.log('hi ' + counter++);
          timeout();
     }, 2000);
} */

/*let counter = 0;
function timeout() {
     setTimeout(function () {
          console.log('hi ' + counter++);
          timeout();
     }, 2000);
}*/

// timeout();

// use command + c to stop it


// inserting the timeout function we declared within itself makes it run itself continously , every 2000 ms as per our function 

// functions can take functions as input parameters !

/*
(function () {
     console.log('immediately invoked function expression IIFE');

})(); */

// immediately runs itself


// Logic statements

/*
var count = 3

if (count == 3) {
     console.log('count is 3');
} else {
     console.log('count is not 3');
}*/

/*
count = 4

if (count == 3) {
     console.log("count is 3");
} else if (count > 3) {
     console.log('count greater than 3');
} else if (count < 3) {
     console.log('count is less than 3');
}; */

/*let hero = 'superman';
switch (hero) {
     case 'superman':
          console.log('super strength');
          console.log('x-ray vision');

     case 'batman':
          console.log('intelligence');
          console.log('fighting skills');
     default:
          console.log('member of JLA');
} */


/*
let exclusiveHero = 'Batman';
switch (exclusiveHero.toLowerCase()) {
     case 'superman':
          console.log('super strength');
          console.log('x-ray vision');
          break;
     case 'batman':
          console.log('intelligence');
          console.log('fighting skills');
          break;
     default:
          console.log('member of JLA');
} */

// toLowerCase() allows the function to retrieve an all lower case version of the input so it matches up with the variables

// ternary operator:

/*let a = 1, b = '1';
let result = (a == b) ? 'equal' : 'unequal';
console.log(result);

// console.log((a == b) ? 'equal' : 'unequal');

// what about STRICT equality?

let result_2 = (a === b) ? 'equal' : 'unequal';
console.log(result_2);

// not uqual is !=
// strict unequality is !== */

// for loops:


/*for (let i = 0; i < 10; i++) {
     console.log(i);
}

*/

/*
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 0; i < a.length; i++) {
     console.log(a[i]);
}
*/

/*
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let p = 0; p < a.length; p++) {
     const x = a[p];
     console.log(x);
} */

// while loop

let x = 1;
while (x < 10) {
     console.log(x++);
}

// I want to set a function that has setTimeout and prints a x++ every 2000ms up until it hits 10 - then exits function

// left off at iteration statements @02:20