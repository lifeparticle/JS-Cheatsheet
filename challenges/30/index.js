let todos = [
	{
		text: "todo 1",
		completed: false,
	},
	{
		text: "todo 2",
		completed: true,
	},
	{
		text: "todo 3",
		completed: true,
	},
	{
		text: "todo 4",
		completed: true,
	},
	{
		text: "todo 5",
		completed: false,
	},
];

let filterText = "";

const renderTodos = (filterText, todos) => {
	const filterdTodos = todos.filter((todo) => {
		return todo.text.toLowerCase().includes(filterText.toLowerCase());
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
	renderTodos(filterText, todos);
	e.target.elements.todo.value = "";
});
