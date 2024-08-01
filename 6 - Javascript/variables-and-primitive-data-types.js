console.log("Hello world!");
// This is a single-line comment.

/*
    This is a
    multi-line comment.
*/

//Variable =container
/*
    let - mutable /changeable
    var - mutable /changeable
    const - unmutable /unchangeable
*/

let firstName = "Gene";
console.log("First Name:", firstName);
firstName = "Jason";
console.log("First Name:", firstName);

var lastName="David";
console.log("Last Name:", lastName);
lastName="Jason";
console.log("Last Name:", lastName);

const birthday="01-01-2001";
console.log("Birthday:" , birthday);
// birthday="02-02-2002" This will not work.


//Variable =container
/*
    let - mutable /changeable - block scope
    var - mutable /changeable - global scope
    const - unmutable /unchangeable - block scope
*/
// () Condition block
// {} Code block
if (true){
    // The group of statements is here.
    var email="jasonzhu@gmail.com";
    let userName="JasonZhu";
    console.log(email);
    console.log(userName);
}
// console.log(email);
// console.log(userName);

// if (true){
//     var email="jasonzhu1@gmail.com";
//     // let userName="JasonZhu";
//     console.log(email);
// }

// primitive Data Types
// string: Textual data encolosed with '' or ""
console.log("Data Type of first name:", typeof firstName);

//Number: Represents numeric value
let age=30;
console.log("Age:",age);
console.log("Data Type of age:", typeof age);

//Boolean: Either true or false
let isStudent=false;
console.log("Is the user a stuent?",isStudent);
console.log("Data Type of isStudent:", typeof isStudent);

// Null: Intentional absence of a value.
let car=null;
console.log(car);
console.log("Data Type of car:", typeof car);

//Undefined: unintentional absence of a value.
let city;
console.log('city :>> ', city);
console.log("Data Type of City:", typeof city);
