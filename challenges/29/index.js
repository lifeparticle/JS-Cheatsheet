
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

document.getElementById("new-todo").addEventListener("input", (e) => {
	console.log(`${e.target.value}`);
	renderTodos(e.target.value, todos);
});
