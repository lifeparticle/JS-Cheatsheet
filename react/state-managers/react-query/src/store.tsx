import { useQuery } from "react-query";

import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useReducer,
} from "react";

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

type DataState = {
    search: string;
};
type DataActions = { type: "setSearch"; payload: string };

const initialStates = {
    search: "",
};

const reducerData = (state: DataState, action: DataActions) => {
    switch (action.type) {
        case "setSearch":
            return { ...state, search: action.payload }; // update the search string inside the state object
    }
};

const useDataSource = (): {
    data: Data[];
    search: string;
    setSearch: (search: string) => void;
} => {
    const { data } = useQuery<Data[]>(
        ["data"],
        () => fetch("/data.json").then((res) => res.json()),
        {
            initialData: [] as Data[],
        }
    );

    const [{ search }, dispatch] = useReducer(reducerData, initialStates);

    const setSearch = useCallback((search: string) => {
        dispatch({
            type: "setSearch",
            payload: search,
        });
    }, []);

    // call this function when there is a change in the data or search states
    // alternatively we could call the dispatch({type: "setData", payload: data,}) to set the new states ??
    const filterdData = useMemo(() => {
        return data?.filter((d) =>
            d.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [data, search]);

    const sortedData = useMemo(() => {
        if (filterdData)
            return [...filterdData].sort((a, b) =>
                a.name.localeCompare(b.name)
            );
        return [];
    }, [filterdData]);

    return { data: sortedData, search, setSearch };
};

const DataContext = createContext<ReturnType<typeof useDataSource>>(
    {} as unknown as ReturnType<typeof useDataSource>
);

export const useData = () => {
    return useContext(DataContext);
};

export function DataProvider({ children }: { children: React.ReactNode }) {
    return (
        <DataContext.Provider value={useDataSource()}>
            {children}
        </DataContext.Provider>
    );
}
