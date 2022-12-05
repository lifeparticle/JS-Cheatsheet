import React, { useCallback, useMemo, useState } from "react";
import "./App.css";

const SortedList = ({ list, sortFunction }: any) => {
	const sortedList = useMemo(() => {
		return [...list].sort(sortFunction);
	}, [list, sortFunction]);

	return (
		<>
			{sortedList.map((item: string, index: number) => {
				return <ul key={index}>{item}</ul>;
			})}
		</>
	);
};

function App() {
	const [names, setNames] = useState(["Bob", "Rob", "Tom"]);

	// Use useCallback when we are passing down a callback function like onClick, onChange, etc to a nested component as a prop
	const sortFunction = useCallback(
		(a: string, b: string) => a.localeCompare(b) * -1,
		[]
	);
	return (
		<div className="App">
			<SortedList list={names} sortFunction={sortFunction} />
		</div>
	);
}

export default App;
