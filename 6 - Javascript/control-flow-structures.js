// Control Flow Structures

// 1. Conditional Statements
// Allows us to execute a block of code based on a condition.

//Conditionals: if, else if, else
let temperature = 35;
if (temperature < 0){
    console.log("It is freezing.");
} else if (temperature >= 0 && temperature < 20) {
    // Range: 0 - 19
    console.log("It's cool outside.");
} else if (temperature >= 20 && temperature < 30) {
    // Range: 20 - 29
    console.log("It's warm outside.");
} else {
    console.log("It's hot outside.");
}

// Conditional: switch-case
let day = "Friday";
switch (day) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's the end of the weekdays.");
        break;
    default:
        console.log("It's a normal day.");
}

// 2. looping statement
// Repeatedly execute a block of code until a specific condition is met.
console.log("Hello Yatt!");

// 1. For loop
/*
    1st: Variable Initialization
    2nd: Condition Expression
    3rd: Increment/Decrement
*/
for (let i = 1; i <=3; i++) {
    console.log("For Loop Count:" ,i);
    // if(i==1){
    //     break;
    // }
}


// 2. While Loop
let count = 1;
while (count <= 3){
    console.log("While Loop Count:", count);
    count++;
}

//3. Do-While Loop
let counter=4;
do{
    console.log("Do While Loop Count:", counter);
    counter++;

} while(counter<=3);

