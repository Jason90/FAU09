let elementWithID = document.getElementById("first-div");
console.log("Element accessed using ID:", elementWithID);

//Modify the .textcontent property
elementWithID.textContent="Div 1";
console.log(elementWithID);

// Accessing elements using class name
let elementsWithClass = document.getElementsByClassName("sample-div");
console.log("Element accessed using Class:", elementsWithClass);

// Accessing elements using Tagname
let listItems = document.getElementsByTagName("li");
console.log("Elements accessed using Tagname:", listItems);
// Modify the background color property
listItems[3].style.backgroundColor = "skyblue";
listItems[3].style.color = "crimson";
document.getElementsByTagNameNS

// .querySelectorAll()
// #id, .class-name, tag
let unordered_list_items = document.querySelectorAll(".unordered-list");
console.log("Elements accessed using Query Selector All:", unordered_list_items);

// Modify the background color and color property
unordered_list_items[1].style.backgroundColor = "cyan";
unordered_list_items[1].style.color = "red";

// Updating Element Attribute
let dayNightIcon =  document.getElementById("day-night-icon");
dayNightIcon.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3688/3688129.png");

// Appending Element
let parentElement=document.querySelector("#parent-element");
let createElement=document.createElement("div");
createElement.textContent="Child-Element";
parentElement.appendChild(createElement);

//Remove Elements

let elementToBeRemoved=document.getElementById("element-to-be-removed");
elementToBeRemoved.remove();


// // Removing Elements
// let elementToBeRemoved = document.getElementById("element-to-be-removed");
// elementToBeRemoved.remove();


// Adding event listeners
let darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", function(){

    let pageContainer = document.getElementById("page-container");
    let pageModeText = document.getElementById("page-mode-text");
    if(darkModeBtn.textContent=="Dark Mode")
    {
        darkModeBtn.textContent="Light Mode";

        pageContainer.style.backgroundColor = "black";
        pageContainer.style.color = "white";
        
        pageModeText.textContent = "Dark Mode";
    }else
    {
        darkModeBtn.textContent="Dark Mode";

        pageContainer.style.backgroundColor = "white";
        pageContainer.style.color = "black";
        
        pageModeText.textContent = "Light Mode";
    }
})
