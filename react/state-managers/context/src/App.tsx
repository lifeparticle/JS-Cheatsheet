import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";

interface Data {
    id: number;
    name: string;
    type: string[];
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
}

const useDataSource = () => {
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return { data };
};

interface QuoteListProps {
    data?: Data[];
}

// const ThemeContext = createContext("light");
const DataContext = createContext<ReturnType<typeof useDataSource>>(
    {} as unknown as ReturnType<typeof useDataSource>
);

const useData = () => {
    return useContext(DataContext);
};

const DataList: React.FC<QuoteListProps> = () => {
    const { data } = useData();
    return (
        <div>
            {/* <h1>Theme: {theme}</h1> */}
            {data.map((d) => {
                return <div key={d.id}>{d.name}</div>;
            })}
        </div>
    );
};

function App() {
    return (
        <DataContext.Provider value={useDataSource()}>
            <DataList />
        </DataContext.Provider>
    );
}

export default App;
