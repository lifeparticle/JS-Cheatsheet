const element = document.getElementById("data");
const userName = document.getElementById("user-name");
const userTimer = document.getElementById("user-timer");
element.textContent = "Hello world";

chrome.storage.sync.get(["name_key"], (result) => {
	const val = result.name_key ?? "Set user name from options page";
	userName.textContent = `User name is: ${val}`;
});

const timer = () => {
	chrome.storage.sync.get(["timer_key"], (result) => {
		const val = result.timer_key ?? 0;
		userTimer.textContent = `User timer is: ${val}`;
	});
};

timer();
setInterval(timer, 1000);
