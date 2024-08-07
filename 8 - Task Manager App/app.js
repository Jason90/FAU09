//select DOM elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//create event listeners
todoButton.addEventListener("click", addTodo); //Step2: add new task when the button is click.
document.addEventListener("DOMContentLoaded", loadTodoList); // Step 5: Load task from the localStorage
todoList.addEventListener("click", deleteOrCompleteTodo); // Step 7: Delete or complete a task
filterOption.addEventListener("change", filterTodo); // Step 10: Filter the task based on completion

//Step 1: function to add a new task
function addTodo(e) {
  //Prevent the form submission
  e.preventDefault();
  //Check empty value
  const todo = todoInput.value;
  if (!todo || todo.length === 0) return;

  generateTodoList(todo);
  saveTodoList(todo);
}

function generateTodoList(todo) {
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
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

//Step 3: function to save tasks to localstorage.
function saveTodoList(todo) {
  let todos = getTodoList();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodoList() {
  let todos=[];
  if (localStorage.getItem("todos") !== null) {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  if (!todos) todos=[];
  return todos;
}

//Step 4: Function to load task from LocalStorage
function loadTodoList() {
  let todos = getTodoList();
  todos.forEach(function(todo) {
    generateTodoList(todo);
  });
}

//Step 6: Function to delete or mark the task to completed.

function deleteOrCompleteTodo(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");

    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
    removeLocalTodos(todo);
  }

  // If the complete button is clicked, toggle the completed class
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    // toggle() - Add if not existing, remove if existing.
    todo.classList.toggle("completed");
  }
}

// Step 8: Function to remove the task to the localstorage.
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  // todo element / div container have 3 children (task, complete button, delete button)
  // children[0] = "Task content"
  const task = todo.children[0].innerText;
  const todoIndex = todos.indexOf(task);
  todos.splice(todoIndex, 1);

  localStorage.setItem("todos", JSON.stringify(todos));
}

//Step 9: Function to filter task based on completion
function filterTodo(e) {
  const todos = todoList.childNodes;
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

//todo:refesh after delete? localstoreage
