let todos = [];

let filterText = "";
let hideCompleted = false;

const todosJSON = localStorage.getItem('todos');

if (todosJSON !== null) {
    todos = JSON.parse(todosJSON);
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

	const summary = document.createElement("h2");
	summary.textContent = `You have ${incompletedTodos.length} todos left`;
	document.getElementById("todos").appendChild(summary);

	filterdTodos.forEach((todo) => {
		const p = document.createElement("p");
		p.textContent = todo.text;
		document.getElementById("todos").appendChild(p);
	});
};

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
    localStorage.setItem("todos", JSON.stringify(todos));
	renderTodos(filterText, todos);
	e.target.elements.todo.value = "";
});

document.getElementById("hide-completed").addEventListener("change", (e) => {
	hideCompleted = e.target.checked;
	renderTodos(filterText, todos);
});
