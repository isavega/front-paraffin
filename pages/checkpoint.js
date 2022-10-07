import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import RoadmapCard from "../components/RoadmapCard/RoadmapCard";
import axios from "axios";
import Button from "@mui/material/Button";
import { postCompletedCheckpoint } from "../api/api";
import useCurrentUser from "../hooks/useCurrentUser";

function Checkpoint() {
	const router = useRouter();
	const [data, setData] = useState();
	const [completed, setCompleted] = useState("Completar");
	const {
		roadmapId,
		learning_unit_id: checkpointId,
		name: checkpointName,
		description: checkpointDescription,
	} = router.query;
	const { id: userId, name: userName, email: userEmail } = useCurrentUser();

	useEffect(() => {
		const getResources = async () => {
			try {
				const response = await axios.get(
					`/api/curriculums/${roadmapId}/learning_units/${checkpointId}/resources`
				);
				setData(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		getResources();
	}, []);

	const checkHandler = () => {
		if (completed === "Completar") {
			setCompleted("Completado!");
			console.log(completed);
			postCompletedCheckpoint({
				learning_unit_id: checkpointId,
				learningUnitId: checkpointId,
				curriculumId: roadmapId,
				user_id: userId,
			});
		} else {
			setCompleted("Completar");
		}
	};

	const dataHandler = (currentResource) => {
		router.push(
			{
				pathname: "/resource",
				query: {
					...currentResource,
					roadmapId: roadmapId,
					checkpointId: checkpointId,
				},
			},
			"/resource"
		);
	};

	return (
		<div>
			<h1>{checkpointName}</h1>
			<p>{checkpointDescription}</p>
			<Button variant="contained" onClick={checkHandler}>
				{completed}
			</Button>
			<div>
				{data?.map((resource, index) => (
					<RoadmapCard
						key={resource.id}
						title={resource.name}
						description={resource.description}
						action={() => dataHandler(resource)}
					/>
				))}
			</div>
		</div>
	);
}
export default Checkpoint;
