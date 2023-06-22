import React, { useReducer } from "react";
import "./App.css";

const initialStateNumbers = { number: 0, numbers: [] };
const initialStateForm = { firstName: "", lastName: "" };

const reducerForm = (state: any, action: any) => {
	return {
		...state,
		...action,
	};
};
function Form() {
	const [state, dispatch] = useReducer(reducerForm, initialStateForm);

	return (
		<>
			<h1>Firstname: {state.firstName}</h1>
			<h1>lastname: {state.lastName}</h1>
			<input
				type="text"
				value={state.firstName}
				onChange={(e) => dispatch({ firstName: e.target.value })}
			/>{" "}
			<input
				type="text"
				value={state.lastName}
				onChange={(e) => dispatch({ lastName: e.target.value })}
			/>
		</>
	);
}

const reducerNumber = (state: any, action: any): any => {
	switch (action.type) {
		case "SET_NUMBER":
			return { ...state, number: Number(action.paylod) };
		case "ADD_NUMBER":
			return { ...state, numbers: [...state.numbers, state.number], number: 0 };
		default:
			throw new Error();
	}
};

function NumberList() {
	const [state, dispatch] = useReducer(reducerNumber, initialStateNumbers);

	return (
		<div className="App">
			{state.numbers.map((number: number, index: number) => (
				<ul key={index}>{number}</ul>
			))}
			<h1>Number: {state.number}</h1>
			<input
				type="number"
				value={state.number}
				onChange={(e) =>
					dispatch({ type: "SET_NUMBER", paylod: e.target.value })
				}
			/>
			<button onClick={() => dispatch({ type: "ADD_NUMBER" })}>
				Add a number
			</button>
		</div>
	);
}

function App() {
	return (
		<>
			<NumberList />
			<Form />
		</>
	);
}
export default App;
