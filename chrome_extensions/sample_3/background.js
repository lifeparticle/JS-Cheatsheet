chrome.alarms.create({
	periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
	chrome.storage.sync.get(["timer_key"], (result) => {
		let val = result.timer_key ?? 0;
		val += 1;
		chrome.storage.sync.set({ timer_key: val }, () => {
			console.log("Value is set to " + val);
		});
		chrome.action.setBadgeText({
			text: `${val}`,
		});
	});
});
