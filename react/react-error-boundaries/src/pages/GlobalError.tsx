import { Card } from "antd";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import CardData from "./components/CardData";

const GlobalError = () => {
	return (
		<ErrorBoundary fallback={<>Could not fetch data.</>}>
			<Suspense fallback={<h3>Loading posts...</h3>}>
				<Card style={{ width: 300 }}>
					<CardData endpoint="/api/lines/1" />
				</Card>
				<Card style={{ width: 300 }}>
					<CardData endpoint="/api/lines/2" />
				</Card>
				<Card style={{ width: 300 }}>
					<CardData endpoint="/api/lines/3" />
				</Card>
			</Suspense>
		</ErrorBoundary>
	);
};

export default GlobalError;
