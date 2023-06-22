import { useState } from "react";

const Child: React.FC = () => {
	console.log("child");
	return <div>Child</div>;
};

const ParentChild: React.FC = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			Parent Child
			<h1>The count is: {count}</h1>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Add
			</button>
			<Child />
		</div>
	);
};

export default ParentChild;
