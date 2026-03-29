/*alert('hello');*/
document.body.innerHTML = "It will remove everything from webpage and show the message!";

let name="Anik Roy";
console.log(name);

const account = 12345;
console.log(account);

var a = 10;
var a = 26;
console.log(a);
/* we can declare same variable multiple time using var but can't do that using let */

// Primitive Data Type

// Number
let b = 10;
let c = 3.1416;
console.log(b,c);

// String
let naam = "Anik Roy"
console.log(naam);

// Boolean
let login = true;
console.log(login);

// Undefined

let user; // not defined anything in user
console.log(user);

// Big-int
let bignum = 283673882772887767777782;
console.log(bignum);

// null
let anik_has_money = null;
console.log(anik_has_money);

// Non-Primitive Data Type
// Array

let arr = [ 2,3,7,5.69,"Anik",false ];
console.log(arr);

// Object

let student = {
    name: "Smita Das",
    age: 22,
    University: "Metropolitan"
    }
console.log(student);

console.log(student.name);
console.log(student.age);

// Function

function printHello(){
   console.log("Hello User!");
   }

printHello();

// We can store function in Variable in Js 🙂

let f = function printHello(){
   console.log("Hello User!");
   }
   
// we can now call it using f()

f()

console.log(typeof f);

// Push element in a array

let arr2 = [10,20,30,40];
arr2.push(50);
console.log(arr2);
console.log(arr2[2]);

