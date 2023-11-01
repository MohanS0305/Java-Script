const todoList = [];
const addBtn = document.querySelector(".js-addBtn");
addBtn.addEventListener("click", () => addTodo());

function addTodo() {
  const inputElement = document.querySelector(".js-todoInput");
  const inputDate = document.querySelector(".js-todoDate");

  const task = inputElement.value;
  const date = inputDate.value;

  todoList.push({ task, date });

  renderTodoList(todoList);
}

function renderTodoList(todoList) {
  let todoHtml = "";

  todoList.forEach((todoObject) => {
    const { task, date } = todoObject;
    const html = `
          <div>
            <p>${task}</p>  
          </div>
          <div>
            <p>${date}</p>  
          </div>
          <div>
            <button class="js-delete-btn">Delete</button> 
          </div>
          `;
    todoHtml += html;
  });

  document.querySelector(".js-displayTodo").innerHTML = todoHtml;

  document.querySelectorAll(".js-delete-btn").forEach((deleteBtn, index) => {
    deleteBtn.addEventListener("click", () => {
      todoList.splice(index, 1);
      renderTodoList(todoList);
    });
  });

  document.querySelector(".js-todoInput").value = "";
}
document.querySelector(".js-todoInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

document.querySelector(".js-todoDate").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});
