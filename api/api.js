import axios from "axios";

export const postResource = async (data) => {
	try {
		const response = await axios.post(
			`api/curriculums/${data.curriculumId}/learning_units/${data.learningUnitId}/resources/create`,
			data
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const postComment = async (data) => {
	try {
		const response = await axios.post(
			`api/curriculums/${data.roadmapId}/learning_units/${data.checkpointId}/resources/${data.resourceId}/comments`,
			data
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const postCompletedCheckpoint = async (data) => {
	try {
		const response = await axios.post(
			`api/curriculums/${data.curriculumId}/learning_units/${data.learningUnitId}/completed_learning_unit`,
			data
		);
		console.log("Changed!");
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
};
