//Arrays

let fruit ="Apple";

let fruits=["Apple","Banana","Mango","Durian"];

console.log("Fruits:",fruits);
console.log("Length of Fruits: %d", fruits.length);
console.log("First Fruit:", fruits[0]);



// fruits.forEach(element => {
//     console.log(element);
// });

//Method - function that is associated with a particular class/object.

// .slice() - access a portion of the array.
// 1st Argument: starting index
// 2nd Argument: element that is not included.
let sliced_fruits = fruits.slice(1, 3);
console.log("Sliced Fruits:", sliced_fruits);
console.log("Fruits:", fruits);

//Updating Elements
fruits[0]="Guyabano";
console.log("Fruits:", fruits);

//Adding Elements
// .push() - add an element at the end of the array.
fruits.push("Kiwi");
console.log("Fruits:", fruits);

//Insert Elements
// .splice() - add or delete element/s at a specified index.
// 1st Argument: starting index
// 2nd Argument: Delete Count
// 3rd Argument: element/s that you want to add
fruits.splice(2, 0, "Orange", "Avocado");//splice 拼接， slice 切片
console.log("Fruits:", fruits);


//Delete elements

fruits.pop();
console.log("Fruits:", fruits);


// 1st Argument: starting index
// 2nd Argument: Delete Count
// 3rd Argument: element/s that you want to add
fruits.splice(1, 3);
console.log("Fruits:", fruits);

// Searching Elements
// .includes() - check if an element
console.log("Is Mango inside of the Fruits?", fruits.includes("Mango"));

// .indexOf() - Find then index of an element
let index=fruits.indexOf("Durian");
console.log("The index of Durian is:", index);

// Iterate over the elements
fruits.forEach(function (fruit)
{
    console.log(fruit);
});