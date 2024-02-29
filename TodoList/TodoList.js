const todoList = [];
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
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { task, date } = todoObject;
    const html = `
          <div>
            <p>${task}</p>  
          </div>
          <div>
            <p>${date}</p>  
          </div>
          <div>
            <button onclick="
              todoList.splice(${i},1);
              renderTodoList(todoList);
            ">Delete</button> 
          </div>
          `;
    todoHtml += html;
  }

  const displayTodo = document.querySelector(".js-displayTodo");

  displayTodo.innerHTML = todoHtml;

  document.querySelector(".js-todoInput").value = "";
}

function todoListEvent(event) {
  if(event.key === "Enter") {
    addTodo();
  }
}
