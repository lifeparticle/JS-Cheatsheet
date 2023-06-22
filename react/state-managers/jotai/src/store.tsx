import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";

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

export const searchAtom = atom("");

const [allData] = atomsWithQuery<Data[]>(() => ({
    queryKey: ["pokemon"],
    queryFn: () => fetch("/data.json").then((res) => res.json()),
}));

export const dataAtom = atom((get) => {
    const search = get(searchAtom).toLowerCase();
    const all = get(allData);
    return all.filter((p) => p.name.toLowerCase().includes(search));
});

export const sortedDataAtom = atom((get) => {
    const data = get(dataAtom);
    return data.slice(0, 10).sort((a, b) => a.name.localeCompare(b.name));
});
