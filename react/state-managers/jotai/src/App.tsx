import "./App.css";
import { useAtom, useAtomValue } from "jotai";

import { searchAtom, sortedDataAtom } from "./store";

const SearchBox = () => {
    const [search, setSearch] = useAtom(searchAtom);
    return (
        <input
            placeholder="Search"
            value={search}
            onChange={(evt) => setSearch(evt.target.value)}
        />
    );
};

const DataList: React.FC = () => {
    const data = useAtomValue(sortedDataAtom);
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
