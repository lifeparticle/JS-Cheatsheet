import { useEffect, useLayoutEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const sleep = (time: any) => {
	const date = Date.now();
	let currentDate;
	do {
		currentDate = Date.now();
	} while (currentDate - date < time);
};

const App1 = () => {
	const [count, setCount] = useState(0);
	console.log("Inside App1 Comoponent");

	useEffect(() => {
		console.log("Inside useEffect 1");

		return () => {
			console.log("Inside Clean up function useEffect 1");
		};
	}, [count]);

	//  useLayoutEffect fires synchronously after all DOM mutations. So we can read layout from the DOM and synchronously re-render.
	useLayoutEffect(() => {
		// sleep(2000);

		console.log("Inside useLayoutEffect 1");
		document.title = `Count is ${count}`;
		return () => {
			console.log("Inside Clean up function useLayoutEffect 1");
		};
	});

	return (
		<>
			App1
			<h1>{count}</h1>
			<button onClick={() => setCount((c) => c + 1)}>Count</button>
		</>
	);
};

const App2 = () => {
	return <>App2</>;
};

function App() {
	// console.log("Inside App Comoponent");

	// useEffect(() => {
	// 	console.log("Inside useEffect");

	// 	return () => {
	// 		console.log("Inside Clean up function useEffect");
	// 	};
	// }, []);

	// //  useLayoutEffect fires synchronously after all DOM mutations. So we can read layout from the DOM and synchronously re-render.
	// useLayoutEffect(() => {
	// 	// sleep(2000);

	// 	console.log("Inside useLayoutEffect");

	// 	return () => {
	// 		console.log("Inside Clean up function useLayoutEffect");
	// 	};
	// });

	return (
		<div>
			<Routes>
				<Route path="/" element={<App1 />} />
				<Route path="about" element={<App2 />} />
			</Routes>
		</div>
	);
}

export default App;
