import React, { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	console.log(count);
	return (
		<div className="App">
			{count}
			<button onClick={() => setCount((count) => count + 1)}>Click me!</button>
		</div>
	);
}

export default App;
