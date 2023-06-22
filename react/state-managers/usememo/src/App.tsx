import React, { useMemo, useState } from "react";
import "./App.css";

function App() {
	const [numbers, setNumbers] = useState([1, 2, 3]);

	// This App component will re-render on every state update. As a result, the following function will be called.
	// If the calculation of the function is significant, then there is no point in doing the calculation if the result is the same
	// const total = numbers.reduce((acc, cur) => acc + cur);
	// return the last value based on the dependency array, if nothing has (dependency array) changed.
	// And, call the function if the dependency array (numbers array) has changed
	const total = useMemo(
		() => numbers.reduce((acc, cur) => acc + cur),
		[numbers]
	);

	return <div className="App">{total}</div>;
}

export default App;
