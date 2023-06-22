import Parent from "pages/Parent";
import ParentChild from "pages/ParentChild";
import React from "react";
import "./App.css";

function App() {
	console.log("re-render");
	return (
		<div className="App">
			<ol>
				<li>
					The component re-renders when state changes. In this case only the
					Parent component.
					<Parent />
				</li>
				<li>
					The components re-renders when state changes and any child components.
					In this case the Parent and child components.
					<ParentChild />
				</li>
			</ol>
		</div>
	);
}

export default App;
