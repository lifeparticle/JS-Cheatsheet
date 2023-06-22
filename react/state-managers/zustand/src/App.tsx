import "./App.css";
import { useData } from "./store";

const SearchBox = () => {
    const search = useData((state) => state.search);
    const setSearch = useData((state) => state.setSearch);
    return (
        <input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
};

const DataList: React.FC = () => {
    const data = useData((state) => state.data);
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
        <>
            <SearchBox />
            <DataList />
        </>
    );
}

export default App;
