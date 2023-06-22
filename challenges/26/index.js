let todos = [
	{
		text: "todo 1",
		completed: true,
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

const getThingsToDo = (todos) => {
	return todos.filter((todo, index) => {
		return todo.completed === false;
	});
};

const summary = document.createElement("h2");
summary.textContent = `You have ${getThingsToDo(todos).length} todos left`;
document.querySelector("body").appendChild(summary);

todos.forEach((todo) => {
	const p = document.createElement("p");
	p.textContent = todo.text;
	document.querySelector("body").appendChild(p);
});
