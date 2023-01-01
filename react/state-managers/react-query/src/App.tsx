import "./App.css";
import { DataProvider, useData } from "./store";
import { QueryClient, QueryClientProvider } from "react-query";
import {
    Link,
    Outlet,
    ReactLocation,
    Router,
    useMatch,
} from "@tanstack/react-location";

const queryClient = new QueryClient();
const location = new ReactLocation();

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
                return (
                    <Link key={d.id} to={`${d.id}`}>
                        <div key={d.id}>{d.name}</div>
                    </Link>
                );
            })}
        </div>
    );
};

const DataListDetail: React.FC = () => {
    const { id } = useMatch();
    const { data } = useData();

    const details = data.find((d) => d.id === parseInt(id, 10));

    if (!details) {
        return <div>No data found</div>;
    }

    return <div>{JSON.stringify(details)}</div>;
};

const routes = [
    {
        path: "/",
        element: (
            <>
                <SearchBox />
                <DataList />
            </>
        ),
    },
    {
        path: ":id",
        element: <DataListDetail />,
    },
];

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <DataProvider>
                <Router location={location} routes={routes}>
                    <div>
                        <Outlet />
                    </div>
                </Router>
            </DataProvider>
        </QueryClientProvider>
    );
}

export default App;
