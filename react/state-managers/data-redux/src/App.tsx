import "./App.css";
import { useSelector, useDispatch, Provider } from "react-redux";

import { store, selectSearch, setSearch, selectData } from "./store";

const SearchBox = () => {
    const search = useSelector(selectSearch);
    const dispatch = useDispatch();
    return (
        <input
            placeholder="Search"
            value={search}
            onChange={(evt) => setSearch(evt.target.value)}
        />
    );
};

const DataList: React.FC = () => {
    const data = useSelector(selectData);
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
        <Provider store={store}>
            <SearchBox />
            <DataList />
        </Provider>
    );
}

export default App;
