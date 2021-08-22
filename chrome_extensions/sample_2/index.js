const element = document.getElementById("data");
const userName = document.getElementById("user-name");
element.textContent = "Hello world";

chrome.storage.sync.get(["name_key"], (result) => {
	const val = result.name_key ?? "Set user name from options page";
	userName.textContent = `User name is: ${val}`;
});
