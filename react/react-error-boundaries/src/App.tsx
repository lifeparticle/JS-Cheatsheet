import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import GlobalError from "./pages/GlobalError";
import LocalError from "./pages/LocalError";

function App() {
	return (
		<div className="App">
			<h1>Handle error globally</h1>
			<GlobalError />
			<h1>Handle error locally</h1>
			<LocalError />
		</div>
	);
}

export default App;
