// Operators and Expressions
// 1. Arithmetic Operators
let num1 = 10;
let num2 = 5;
console.log("Addition(+):", num1 + num2);
console.log("Subtraction(-):", num1 - num2);
console.log("Multiplication(*):", num1 * num2);
console.log("Division(/):", num1 / num2);
console.log("Exponent(**)",num1**num2);
console.log("Remainder(%):", num1 % 6);

// Order of Operations
//Pemdas/Bodmas

//p括号=,e=exponent,m=multiplication/division,a=add plus,
//b=bracket, md=left ot right.
let answer=3+4*(5-2)**2/2;
console.log("Answer:",answer)

//2. String Expression or Concatenation
let greeting="Hi!";
let user="Jason";
console.log(greeting+" "+user);

//3.Comparison Operators
//Type conversion:convert the type if necessary.
// Equal to: Check if two values are equal
console.log("Equal to(==)" , 5==5);
console.log("Equal to(==)" , 5=="5");
// Not Equal to: Check if two values are not equal
console.log("Equal to(!=)" , 5!=5);
console.log("Equal to(!=)" , 5!="5");

// Strict Equal to (===): Check if two values are equal in value and in data type
console.log("Strict Equal to (===):", 5 === 5);
console.log("Strict Equal to (===):", 5 === "5");

// Strict Not Equal to (!==): Check if two values are not equal in value and in data type
console.log("Strict Not Equal to (!==):", 5 !== 5);
console.log("Strict Not Equal to (!==):", 5 !== "5");

// Greater than (>)
console.log("Greater Than (>):", num1 > num2);
// Greater than or Equal to (>=)
console.log("Greater Than or Equal to (>=):", num1 >= num2);
console.log("Greater Than or Equal to (>=):", num1 >= 10);

// Less than (<)
console.log("Less Than (<):", num1 < num2);
// Less than or Equal to (<=)
console.log("Less Than or Equal to (<=):", num1 <= num2);
console.log("Less Than or Equal to (<=):", num1 <= 10);



//  4. Logical Operators
// AND - && 
// OR - ||
// NOT - !
/*
| A     | B     | NOT A | A AND B | A OR B |
|-------|-------|-------|---------|--------|
| true  | true  | false | true    | true   |
| true  | false | false | false   | true   |
| false | true  | true  | false   | true   |
| false | false | true  | false   | false  |
*/
let sunny = true;
let warm = true;
console.log("Is it sunny AND warm?", sunny && warm);


// AND: true if all of the condition is met otherwise, false
console.log("Is it sunny AND warm?", sunny && warm);

// OR: true if at least one condition is met, otherwise false
console.log("Is it sunny OR warm?", sunny || warm);

// NOT: Invert the value of a boolean
console.log("Is it NOT sunny?", !sunny);

// 5. Assignment Expressions
// Assigning a value to a variable (=)
let num3 = 10;
let num4 = 5;
// Addition Expression (+=)
// num3 = num3 + num4;
num3 += num4
console.log(num3);

// Multiplication Assignment (*=)
num3 *= num4
console.log("The new value for num3:", num3);
// Computation: 10 * 5 = 50
// Division Assignment (*=)
num3 /= num4
console.log("The new value for num3:", num3);
// Computation: 50 / 5 = 10

