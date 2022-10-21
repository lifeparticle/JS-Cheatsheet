import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";

const sleep = (time: any) => {
	const date = Date.now();
	let currentDate;
	do {
		currentDate = Date.now();
	} while (currentDate - date < time);
};

function App() {
	const [count, setCount] = useState(0);
	console.log("Inside App Comoponent");

	useEffect(() => {
		console.log("Inside useEffect");

		return () => {
			console.log("Inside Clean up function useEffect");
		};
	}, []);

	//  useLayoutEffect fires synchronously after all DOM mutations. So we can read layout from the DOM and synchronously re-render.
	useLayoutEffect(() => {
		// sleep(2000);

		console.log("Inside useLayoutEffect");
		document.title = `Count is ${count}`;
	});

	return (
		<div>
			{"hello world"}
			<h1>{count}</h1>
			<button onClick={() => setCount((c) => c + 1)}>Count</button>
		</div>
	);
}

export default App;
