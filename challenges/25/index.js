const ps = document.querySelectorAll("p");

ps.forEach((p) => {
	if (p.textContent.toLowerCase().includes("the")) {
		p.remove();
	}
});
