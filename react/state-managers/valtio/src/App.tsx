import "./App.css";
import { useSnapshot } from "valtio";

import { search, data } from "./store";

const SearchBox = () => {
    const snap = useSnapshot(search);
    return (
        <input
            placeholder="Search"
            value={snap.query}
            onChange={(evt) => {
                search.query = evt.target.value;
            }}
        />
    );
};

const DataList: React.FC = () => {
    const snap = useSnapshot(data);
    return (
        <div>
            {snap.list.map((d) => {
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
