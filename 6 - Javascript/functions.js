//Function
// Reusable block of code that can be executed whenever we need.

console.log("%c你%c好%c吗","color:red","color:blue","color:green");
// 1. Function Definition/Declaration
function greet()
{
    console.log("Hello World!");   
}

greet();
greet();

// 2. Function with parameters

/**
 *  Parameters -variables that will hold values.
 *  Argument - values that you pass to a functions parameter.
 */

function greetUser(name)
{
    console.log("Hello %s!",name);   
   
}

greetUser("Jason"); //Jason is the argument, name in greetUser(name) is a parameter.
greetUser("Lynn");


function add(num1, num2){
    let sum =num1 + num2;
    console.log("Sum of %s and %s: %s", num1, num2,sum);
	return sum;
    
}

console.log("hh");
add(10,20);