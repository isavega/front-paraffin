import axios from "axios";

export const getCurriculums = async () => {
	try {
		const response = await axios.get("/api/curriculums");
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const postResource = async (data) => {
	try {
		const response = await axios.post(
			`api/curriculums/${data.curriculumId}/learning_units/${data.learningUnitId}/resources/create`,
			data
		);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
