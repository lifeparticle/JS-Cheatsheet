import { create } from "zustand";

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

const searchAndSortData = (data: Data[], search: string) =>
    data
        .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
        .slice(0, 10)
        .sort((a, b) => a.name.localeCompare(b.name));

export const useData = create<{
    data: Data[];
    allData: Data[];
    setAllData: (pokemon: Data[]) => void;
    search: string;
    setSearch: (search: string) => void;
}>((set, get) => ({
    data: [],
    allData: [],
    setAllData: (data) =>
        set({
            allData: data,
            data: searchAndSortData(data, get().search),
        }),
    search: "",
    setSearch: (search) =>
        set({
            search,
            data: searchAndSortData(get().allData, search),
        }),
}));

fetch("/data.json")
    .then((response) => response.json())
    .then((pokemon) => {
        useData.getState().setAllData(pokemon);
    });
