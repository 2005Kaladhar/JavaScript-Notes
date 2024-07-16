/*
Variables in Javascript 
to declare variables in js we use const,let,var

Before ES6(ECMA script 6) var was used but nowadays mostly let and const are used to declare a variable

Javascript is dynamically typed language, it means that datatype of a variable can be changed during runtime.

var - scope of var is global, it can be re-declared anywhere and can be updated anywhere

const - scope of const is block and is used to declare constant variables whose values are not going to be changed, when re-declared or updated after declaration it throws error.

let - scope of this let is block, when re-declared in same scope gives error, although we can declare variable of same name in another scope. It can be updated after it is declared.


Initialization - During declaration of a variable, in case of "var" and "let" it need not to initialized but in case of "const" it should be 

*/


console.log("THis is Kaladhar Gopal")
a = 45
{
   a = 78
    console.log(a)
}
console.log(a)