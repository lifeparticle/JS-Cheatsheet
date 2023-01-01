import React, { useEffect, useRef, useState } from "react";
import "./App.css";

// This is not working, it is producing 1,2,3,6,9 etc
const AnptherApp = () => {
    const inputRef = useRef<any>(null);
    const idRef = useRef<number>(1);

    const [names, setNames] = useState<any>([
        { id: idRef.current++, name: "Tom" },
        { id: idRef.current++, name: "Bob" },
    ]);
    const onAddName = () => {
        setNames((names: any) => [
            ...names,
            { id: idRef.current++, name: inputRef?.current?.value },
        ]);
        console.log(names);
        inputRef.current.value = "";
    };
    return (
        <div className="App">
            <h1>App 2</h1>
            <div>
                {names.map((obj: any, index: number) => {
                    return <ul key={index}>{obj.name}</ul>;
                })}
            </div>
            <input type="text" ref={inputRef} />
            <button onClick={onAddName}>Add Name</button>
        </div>
    );
};

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
            <h1>App 1</h1>
            <div>
                {names.map((name: string, index: number) => {
                    return <ul key={index}>{name}</ul>;
                })}
            </div>
            <input type="text" ref={inputRef} />
            <button onClick={onAddName}>Add Name</button>
            <AnptherApp />
        </div>
    );
}

export default App;
