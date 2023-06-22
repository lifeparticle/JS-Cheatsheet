const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');

    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    }
    
    return [];
}

const savedTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
}

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
    document.getElementById("todos").appendChild(generateSummaryDOM(incompletedTodos));

	filterdTodos.forEach((todo) => {
		document.getElementById("todos").appendChild(generateTodoDOM(todo));
	});
};

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div');
    
    const checkBox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');
    
    checkBox.setAttribute('type', 'checkbox');
    todoEl.appendChild(checkBox);
    
    todoText.textContent = todo.text;
    todoEl.appendChild(todoText);
    
    removeButton.textContent = 'x';
    todoEl.appendChild(removeButton);

    return todoEl;
}

const generateSummaryDOM = (incompletedTodos) => {
    const summary = document.createElement("h2");
	summary.textContent = `You have ${incompletedTodos.length} todos left`;
	return summary;
}
