import "./App.css";
import { DataProvider, useData } from "./store";

const SearchBox = () => {
    const { search, setSearch } = useData();
    return (
        <input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
};

const DataList: React.FC = () => {
    const { data } = useData();
    return (
        <div>
            {data.map((d) => {
                return <div key={d.id}>{d.name}</div>;
            })}
        </div>
    );
};

function App() {
    return (
        <DataProvider>
            <SearchBox />
            <DataList />
        </DataProvider>
    );
}

export default App;
