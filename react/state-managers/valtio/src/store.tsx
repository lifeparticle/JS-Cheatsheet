import { proxy } from "valtio";
import { derive } from "valtio/utils";

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

export const search = proxy({
    query: "",
});

const allData = proxy({
    data: [] as Data[],
});

export const data = derive({
    list: (get) => {
        const query = get(search).query.toLowerCase();
        return get(allData)
            .data.filter((p) => p.name.toLowerCase().includes(query))
            .slice(0, 10)
            .sort((a, b) => a.name.localeCompare(b.name));
    },
});

fetch("/data.json")
    .then((res) => res.json())
    .then((pokemon) => {
        allData.data = pokemon;
    });
