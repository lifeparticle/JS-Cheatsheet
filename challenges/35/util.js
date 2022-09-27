const getSavedTodos = () => {
    const todosJSON = localStorage.getItem("todos");

    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    }

    return [];
};

const savedTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => {
        return todo.id === id;
    });

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
};

const toggleTodo = (id) => {
    const todo = todos.find((todo) => {
        return todo.id === id;
    });

    if (todo !== undefined) {
        todo.completed = !todo.completed;
    }
};

const renderTodos = (filterText, todos) => {
    const filterdTodos = todos.filter((todo) => {
        return (
            todo.text.toLowerCase().includes(filterText.toLowerCase()) &&
            (!hideCompleted || !todo.completed)
        );
    });

    const incompletedTodos = filterdTodos.filter((todo, index) => {
        return todo.completed === false;
    });

    document.getElementById("todos").innerHTML = "";
    document
        .getElementById("todos")
        .appendChild(generateSummaryDOM(incompletedTodos));

    filterdTodos.forEach((todo) => {
        document.getElementById("todos").appendChild(generateTodoDOM(todo));
    });
};

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement("div");

    const checkBox = document.createElement("input");
    const todoText = document.createElement("span");
    const removeButton = document.createElement("button");

    checkBox.setAttribute("type", "checkbox");
    checkBox.checked = todo.completed;
    todoEl.appendChild(checkBox);
    checkBox.addEventListener("change", () => {
        toggleTodo(todo.id);
        savedTodos(todos);
        renderTodos(todos, filters);
    });

    todoText.textContent = todo.text;
    todoEl.appendChild(todoText);

    removeButton.textContent = "x";
    todoEl.appendChild(removeButton);

    return todoEl;
};

const generateSummaryDOM = (incompletedTodos) => {
    const summary = document.createElement("h2");
    summary.textContent = `You have ${incompletedTodos.length} todos left`;
    return summary;
};
