let todos = getSavedTodos();

let filterText = "";
let hideCompleted = false;

renderTodos("", todos);

document.getElementById("add-todo").addEventListener("click", (e) => {
	console.log(`Add todo button is clicked`);
});

document.getElementById("search-todo").addEventListener("input", (e) => {
	console.log(`${e.target.value}`);
	filterText = e.target.value;
	renderTodos(filterText, todos);
});

document.getElementById("form-todo").addEventListener("submit", (e) => {
	e.preventDefault();
	todos.push({
		text: e.target.elements.todo.value,
		completed: false,
	});
    savedTodos(todos);
	renderTodos(filterText, todos);
	e.target.elements.todo.value = "";
});

document.getElementById("hide-completed").addEventListener("change", (e) => {
	hideCompleted = e.target.checked;
	renderTodos(filterText, todos);
});
