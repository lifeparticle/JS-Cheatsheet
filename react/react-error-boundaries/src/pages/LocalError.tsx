import { Card } from "antd";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import CardData from "./components/CardData";

const LocalError = () => {
	return (
		<>
			<Card style={{ width: 300 }}>
				<ErrorBoundary fallback={<>Could not fetch data.</>}>
					<Suspense fallback={<h3>Loading posts...</h3>}>
						<CardData endpoint="api/lines/1" />
					</Suspense>
				</ErrorBoundary>
			</Card>
			<Card style={{ width: 300 }}>
				<ErrorBoundary fallback={<>Could not fetch data.</>}>
					<Suspense fallback={<h3>Loading posts...</h3>}>
						<CardData endpoint="api/lines/2" />
					</Suspense>
				</ErrorBoundary>
			</Card>
			<Card style={{ width: 300 }}>
				<ErrorBoundary fallback={<>Could not fetch data.</>}>
					<Suspense fallback={<h3>Loading posts...</h3>}>
						<CardData endpoint="api/lines/3" />
					</Suspense>
				</ErrorBoundary>
			</Card>
		</>
	);
};

export default LocalError;
