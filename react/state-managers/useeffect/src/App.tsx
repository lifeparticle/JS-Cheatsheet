import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [names, setNames] = useState<any>([]);

	useEffect(() => {
		fetch("./names.json")
			.then((response) => response.json())
			.then((data) => setNames(data));
	}, []);

	return <div className="App">{names?.join(", ")}</div>;
}

export default App;
