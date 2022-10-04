import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import RoadmapCard from "../components/RoadmapCard/RoadmapCard";
import axios from "axios";

function Roadmap() {
	const router = useRouter();
	const {
		id: roadmapId,
		name: roadmapName,
		description: roadmapDescription,
	} = router.query;
	const [data, setData] = useState();
	const dataHandler = (currentCheckpoint) => {
		router.push(
			{
				pathname: "/checkpoint",
				query: {
					...currentCheckpoint,
					roadmapId: id,
				},
			},
			"/checkpoint"
		);
	};

	useEffect(() => {
		const getCheckpoints = async () => {
			try {
				const response = await axios.get(
					`/api/curriculums/${roadmapId}/learning_units`
				);
				setData(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		getCheckpoints();
	}, []);

	const dataHandler = (currentCheckpoint) => {
		router.push(
			{
				pathname: "/checkpoint",
				query: {
					...currentCheckpoint,
					roadmapId: roadmapId,
				},
			},
			"/checkpoint"
		);
	};

	return (
		<div>
			<h1>{roadmapName}</h1>
			<p>{roadmapDescription}</p>
			{data?.map((checkpoint, i) => (
				<RoadmapCard
					key={checkpoint.id}
					title={checkpoint.name}
					description={checkpoint.description}
					action={() => dataHandler(checkpoint)}
					style={{ margin: "10%" }}
				/>
			))}
		</div>
	);
}
export default Roadmap;
