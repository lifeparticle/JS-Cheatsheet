import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
	const inputRef = useRef<any>(null);
	const [names, setNames] = useState<any>([]);

	// After the first render will have the reference to the input fields
	useEffect(() => {
		inputRef?.current?.focus();
	}, []);

	const onAddName = () => {
		setNames([...names, inputRef?.current?.value]);
		inputRef.current.value = "";
	};

	return (
		<div className="App">
			<div>
				{names.map((name: string, index: number) => {
					return <ul key={index}>{name}</ul>;
				})}
			</div>
			<input type="text" ref={inputRef} />
			<button onClick={onAddName}>Add Name</button>
		</div>
	);
}

export default App;
