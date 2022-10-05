import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import RoadmapCard from "../components/RoadmapCard/RoadmapCard";
import axios from "axios";

// MUI
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
<<<<<<< HEAD
=======
import postCompletedCheckpoint from "../api/api";
import { SafetyCheckRounded } from "@mui/icons-material";
>>>>>>> b296463 (fix: checkbox action in learning unit)

function Checkpoint() {
	const router = useRouter();
	const [data, setData] = useState();
	const [checked, setChecked] = useState(false);
<<<<<<< HEAD
	const {
		roadmapId,
		id: checkpointId,
		name: checkpointName,
		description: checkpointDescription,
	} = router.query;

=======
	const { roadmapId, id, name, description } = router.query;
>>>>>>> b296463 (fix: checkbox action in learning unit)
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

	const checkHandler = (completedData) => {
		setChecked(!checked);
		if (checked) {
			console.log(checked);
			//postCompletedCheckpoint(completedData);
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
			<FormControlLabel
				value="start"
				control={
					<Checkbox
						onChange={() => {
							checkHandler(checked);
							console.log(checked);
						}}
					/>
				}
				label="Completed"
				labelPlacement="start"
			/>
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
