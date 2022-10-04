import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BasicCard from "../components/BasicCard/BasicCard";

function Roadmap() {
	const router = useRouter();
	const { id, name, description } = router.query;
	const [data, setData] = useState();

	useEffect(() => {
		const getCheckpoints = async () => {
			const response = await fetch(`/api/curriculums/${id}/learning_units`);
			const getResponse = await response.json();
			setData(getResponse);
		};
		getCheckpoints();
	}, []);

	return (
		<div>
			<h1>{name}</h1>
			<p>{description}</p>
			{data?.map((item, i) => (
				<p key={item.id}>
					{item.name}
					<BasicCard
						title={item.name}
						description={item.description}
						type="Checkpoint"
						action={() => handleRedirect(item)}
					/>
				</p>
			))}
		</div>
	);
}
export default Roadmap;
