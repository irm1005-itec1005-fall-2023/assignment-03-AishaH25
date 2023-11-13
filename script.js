/* Assignment 03: Starting a Todo List App
 *
 * You are going to build the brains of a simple Todo List application
 * in JavaScript. You don't have to worry about the look of the app for now.
 * We will make it look awesome in Assignment 04.
 *
 * For now, we'll focus on giving the application the following features:
 * 1. Add a new todo item
 * 2. Delete a todo item
 * 3. Mark a todo item as completed
 * 4. Delete a todo item
 * 5. Clear all completed todos
 *
 * The following code is the starting point for this assignment.
 *
 * You will have to write the code to initialise the todoItems array and
 * for the functions below.
 *
 * 1. addToDoItem(text)
 * 2. removeToDoItem(todoId)
 * 3. markToDoItemAsCompleted(todoId)
 * 4. deleteToDoItem(todoId)
 * 5. clearCompletedTasks()
 *
 * YOU MUST NOT CHANGE ANY OF THE FUNCTION NAMES OR THE AUTOMATED TESTS WILL FAIL
 *
 * As you write each function, press on the "Run Tests" button in the browser
 * to run the automated tests and check your work.
 *
 * You can also add your own tests and debug statements at the bottom of this file.
 *
 */


// Data storage - Initialize the array of To Do items
//
// NOTE:
//
// You must use the following object literal structure when creating new todo items
// {
//   id: 0,
//   text: "This is a todo item",
//   completed: false,
// }

// Initialise an empty array with the variable name todoItems
let todoItems = []
let todoCounter = 0;
// Function to add a todo to the list
// It should accept a string as a parameter (text of the todo item)
// and it should add a new todo item to the todoItems array
// the function does not need to return anything

function addToDoItem(text) {
  // Implement the logic to add a task here
  
  const newTodo = {
    id: todoCounter,
    text: text,
    completed: false,
  };
  todoItems.push(newTodo);
  todoCounter++;
  console.log("To do item added:", newTodo); // Remove this line when you start working on the function
}

// Function to remove a todo to the list
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything
function removeToDoItem(todoid) {
  // Implement the logic to add a task here
  todoItems = todoItems.filter((item) => item.id !== todoid);
  console.log("Todo item removed with ID:", todoid); // Remove this line when you start working on the function
}

// Function to mark a task as completed
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, set its completed property to true
// the function does not need to return anything
function markToDoItemAsCompleted(todoId) {
  // Implement the logic to mark a task as completed here
  todoItems.forEach((item) => {
    if (item.id === todoId) {
      item.completed = true;
    }
  });
  console.log("Todo item marked as completed with ID:", todoId); // Remove this line when you start working on the function
}

// Function to delete a task from the array
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything, though you can return
// true or false depending on whether the item was successfully deleted
function deleteToDoItem(todoId) {
  // Implement the logic to remove a task here
 
  const initialLength = todoItems.length;
  todoItems = todoItems.filter((item) => item.id !== todoId);
  if (todoItems.length !== initialLength) {
    console.log("Todo item deleted with ID:", todoId);
    return true;
 
  }
}
// Function to clear all completed tasks
// Loop through the array of todos, and when you find a todo item that is marked
// as completed, remove it completely from the array
function clearCompletedTasks() {
  // Implement the logic to clear completed tasks here
  todoItems = todoItems.filter((item) => !item.completed);
  console.log("Cleared all completed tasks.");
   // Remove this line when you start working on the function
}

// You can write your own tests here if you would like to test
// your code before using the automated tests
// For example, you could run:
//  addToDoItem("Test ToDo"); // This should add a new todo item to the array
//  console.log(todoItems); // This should show the todo item you added
//  removeToDoItem(0); // This should remove the todo item with ID 0 from the array
//  markToDoItemAsCompleted(0); // This should mark the todo item with ID 0 as completed

//Cite: Chat GPT 
