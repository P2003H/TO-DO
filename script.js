let todoList = [];

function addTodo() {
    let todoInput = document.getElementById('todoInput');
    let todoText = todoInput.value.trim();

    if (todoText !== '') {
        todoList.push(todoText);
        todoInput.value = '';
        displayTodos();
    }
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    displayTodos();
}

function displayTodos() {
    let todoListUl = document.getElementById('todoList');
    todoListUl.innerHTML = '';

    todoList.forEach((todo, index) => {
        let li = document.createElement('li');
        li.textContent = todo;
        let deleteButton = document.createElement('span');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        deleteButton.setAttribute('onclick', `deleteTodo(${index})`);
        li.appendChild(deleteButton);
        todoListUl.appendChild(li);
    });
}
