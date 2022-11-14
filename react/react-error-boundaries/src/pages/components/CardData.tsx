// https://swr.vercel.app/docs/suspense
// https://stackoverflow.com/questions/70654847/with-react-18-and-suspense-how-to-display-specific-errors-not-just-fallback-in

import { Card } from "antd";
import React from "react";
import useSWR from "swr";

interface CardDataProps {
	endpoint: string;
}

const fetcher = (url: string) =>
	fetch(url).then((r) => {
		console.log(r);
		if (r.ok) {
			return r.json();
		} else {
			console.log("I am here");
			throw new Error("Fetch failed");
		}
	});
// const fetcher = (url: any) => fetch(url).then((r) => r.json());

const CardData: React.FC<CardDataProps> = ({ endpoint }) => {
	let { data } = useSWR(endpoint, fetcher, { suspense: true });
	// const [data, setData] = useState<any>({});
	// useEffect(() => {
	// 	fetch(endpoint)
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			setData(json);
	// 		});
	// }, []);
	return <>{data.data}</>;
};

export default CardData;
