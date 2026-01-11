//your code here

const input = document.getElementById("newTodoInput");
const button = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

button.addEventListener("click", function () {
  const todoText = input.value.trim(); // remove extra spaces

  // prevent empty submission
  if (todoText === "") {
    return;
  }

  // create new list item
  const li = document.createElement("li");
  li.textContent = todoText;

  // add li to ordered list
  todoList.appendChild(li);

  // clear input after adding todo
  input.value = "";
});
