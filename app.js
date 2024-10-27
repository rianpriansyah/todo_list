// Kumpulkan semau element UI
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");

const addTodo = (e) => {
  e.preventDefault();

  // Membuat li element
  const li = document.createElement("li");

  // Menambahkan properti class pada li element
  li.className = "list-group-item d-flex justify-content-between align-items-center mb-1 todo-item";

  // Menambahkan children ke dalam li element
  li.appendChild(document.createTextNode("Value dari task input"));

  // Membuat delete button
  const a = document.createElement("a");
  a.href = "#";
  a.className = "badge badge-danger delete-todo";
  a.innerHTML = "Delete";

  // Menambahkan children a ke dalam li element
  li.appendChild(a);
};

todoForm.addEventListener("submit", addTodo);
