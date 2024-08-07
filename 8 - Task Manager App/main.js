import DbLocalStorage from "./db.js";
import PgTodo from "./page.js";

let todoPage = new PgTodo();
let storage = new DbLocalStorage("todos");

//create event listeners
todoPage.todoButton.addEventListener("click", addTask); //Step 1: add new task when the button is click.
todoPage.todoList.addEventListener("click", deleteTask); //Step 2: Delete or complete a task
todoPage.filterOption.addEventListener("change", filterTask); //Step 3: Filter the task based on completion
document.addEventListener("DOMContentLoaded", loadTask); //Step 4: Load task from the localStorage when page loaded.

function addTask(e) {
  //Prevent the form submission
  e.preventDefault();
  //Check empty value
  const todo = todoPage.todoInput.value;
  if (!todo || todo.length === 0) return;

  generate(todo);
  //save tasks to localstorage.
  storage.insert(todo);
}

//generate task listed on the page
function generate(todo) {
  // Create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create list item for the task
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todo;
  todoDiv.appendChild(newTodo);

  // Create a button to mark the task as completed
  const completedButton = document.createElement("button");
  completedButton.classList.add("complete-btn");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  todoDiv.appendChild(completedButton);

  // Create a button to delete the task
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  todoDiv.appendChild(trashButton);

  // Append todo div to the todo list
  todoPage.todoList.appendChild(todoDiv);
  todoPage.todoInput.value = "";
}

//Function to delete or mark the task to completed.
function deleteTask(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");

    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
    remove(todo);
  }

  //If the complete button is clicked, toggle the completed class
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    //toggle() - Add if not existing, remove if existing.
    todo.classList.toggle("completed");
  }
}

//Function to remove the task to the localstorage.
function remove(todo) {
  // todo element, div container have 3 children (task, complete button, delete button), children[0] = "Task content"
  const task = todo.children[0].innerText;
  storage.delete(task);
}

//Function to filter task based on completion
function filterTask(e) {
  const todos = todoPage.todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}

//Function to load task from LocalStorage
function loadTask() {
  let todos = storage.select();
  todos.forEach(function (todo) {
    generate(todo);
  });
}
//todo:refesh after delete? localstoreage
//todo:Duplicate data check
