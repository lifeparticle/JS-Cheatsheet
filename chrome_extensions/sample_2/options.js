const nameIn = document.getElementById("name");
const save = document.getElementById("save");
save.addEventListener("click", () => {
	const val = nameIn.value;
	console.log(val);

	chrome.storage.sync.set({ name_key: val }, () => {
		console.log("Value is set to " + val);
	});
});

chrome.storage.sync.get(["name_key"], (result) => {
	nameIn.value = result.name_key ?? "";
	console.log("Value currently is " + result.name_key);
});
