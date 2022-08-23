import { useState } from "react";

const Parent: React.FC = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>The count is: {count}</h1>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Add
			</button>
		</div>
	);
};

export default Parent;
