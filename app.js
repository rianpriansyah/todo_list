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
  li.appendChild(document.createTextNode(todoInput.value));

  // Membuat delete button
  const a = document.createElement("a");
  a.href = "#";
  a.className = "badge badge-danger delete-todo";
  a.innerHTML = "Delete";

  // Menambahkan children a ke dalam li element
  li.appendChild(a);

  // Memasukan element li yang telah dibuat dengan javascript ke dalam element todo list
  todoList.appendChild(li);
};

const deleteTodo = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("delete-todo")) {
    const parent = e.target.parentElement;
    parent.remove();
  }
};

todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);
