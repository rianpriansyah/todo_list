// Kumpulkan semau element UI
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");

// DOM functions
const getTodos = () => {
  let todos;

  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {
    // Membuat li element
    const li = document.createElement("li");

    // Menambahkan properti class pada li element
    li.className = "list-group-item d-flex justify-content-between align-items-center mb-1 todo-item";

    // Menambahkan children ke dalam li element
    li.appendChild(document.createTextNode(todo));

    // Membuat delete button
    const a = document.createElement("a");
    a.href = "#";
    a.className = "badge badge-danger delete-todo";
    a.innerHTML = "Delete";

    // Menambahkan children a ke dalam li element
    li.appendChild(a);

    // Memasukan element li yang telah dibuat dengan javascript ke dalam element todo list
    todoList.appendChild(li);
  });
};

const addTodo = (e) => {
  e.preventDefault();

  if (todoInput.value.trim()) {
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

    addTodoLocalStorage(todoInput.value);

    todoInput.value = "";
  } else {
    alert("Todo input tidak boleh kosong!");
  }
};

const addTodoLocalStorage = (todoInputValue) => {
  let todos;

  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todoInputValue);

  localStorage.setItem("todos", JSON.stringify(todos));
};

const deleteTodo = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("delete-todo")) {
    if (confirm("Apakah anda yakin ingin menghapus todo list?")) {
      const parent = e.target.parentElement;
      parent.remove();
    }
  }
};

const clearTodos = () => {
  if (confirm("Apakah anda yakin ingin menghapus semua todo list?")) {
    todoList.innerHTML = "";
  }
};

const filterTodos = (e) => {
  const filterText = e.target.value.toLowerCase();
  const todoItems = document.querySelectorAll(".todo-item");

  todoItems.forEach((item) => {
    const itemText = item.firstChild.textContent.toLowerCase();

    if (itemText.indexOf(filterText) !== -1) {
      item.setAttribute("style", "display: block;");
    } else {
      item.setAttribute("style", "display: none !important;");
    }
  });
};

const immediateLoadEventListener = () => {
  // Mendapatkan todo list dari local storage dan menampilkan di browser
  document.addEventListener("DOMContentLoaded", getTodos);

  // EventListener untuk menambahkan todo list
  todoForm.addEventListener("submit", addTodo);

  // EventListener untuk menghapus satu todo list
  todoList.addEventListener("click", deleteTodo);

  // EventListener untuk menghapus semua todo list
  clearButton.addEventListener("click", clearTodos);

  // EventListener untuk memfilter todo list
  filterInput.addEventListener("keyup", filterTodos);
};

immediateLoadEventListener();
