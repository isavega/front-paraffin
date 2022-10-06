import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import RoadmapCard from "../components/RoadmapCard/RoadmapCard";
import axios from "axios";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// export default function ContainedButtons() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <Button variant="contained">Contained</Button>
//       <Button variant="contained" disabled>
//         Disabled
//       </Button>
//       <Button variant="contained" href="#contained-buttons">
//         Link
//       </Button>
//     </Stack>
//   );
// }

function Checkpoint() {
	const router = useRouter();
	const [data, setData] = useState();
	const [completed, setCompleted] = useState("Completar");
	const {
		roadmapId,
		id: checkpointId,
		name: checkpointName,
		description: checkpointDescription,
	} = router.query;

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
			//postCompletedCheckpoint(completedData);
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
			<Button
				variant="contained"
				onClick={() => {
					checkHandler();
				}}>
				{" "}
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
