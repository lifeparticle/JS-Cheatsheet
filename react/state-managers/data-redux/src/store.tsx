import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
    createSlice,
    configureStore,
    type PayloadAction,
    createSelector,
} from "@reduxjs/toolkit";

export interface Data {
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

const dataApi = createApi({
    reducerPath: "dataApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/" }),
    endpoints: (builder) => ({
        getData: builder.query<Data[], undefined>({
            query: () => "data.json",
        }),
    }),
});

export const useDataQuery = dataApi.endpoints.getData.useQuery;

const searchSlice = createSlice({
    name: "search",
    initialState: {
        search: "",
    },
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
});

export const { setSearch } = searchSlice.actions;

export const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        dataApi: dataApi.reducer,
    },
    middleware: (getdefaultMiddleware) =>
        getdefaultMiddleware().concat([dataApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;

export const selectSearch = (state: RootState) => state.search.search;

store.dispatch(dataApi.endpoints.getData.initiate(undefined));

export const selectData = createSelector(
    (state: RootState) =>
        dataApi.endpoints.getData.select(undefined)(state)?.data,
    (state: RootState) => state.search.search,
    (data, search) =>
        (data || [])
            .filter((data) =>
                data.name.toLowerCase().includes(search.toLowerCase())
            )
            .slice(0, 10)
            .sort((a, b) => a.name.localeCompare(b.name))
);
