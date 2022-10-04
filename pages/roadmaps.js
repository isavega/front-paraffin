import React, { useState, useEffect } from "react";
function Roadmap(props) {
	const [data, setData] = useState();

	useEffect(() => {
		const getCheckpoints = async () => {
			const response = await fetch(`/api/curriculums/${props.roadmap_id}`);
			const getResponse = await response.json();
			setData(getResponse);
		};
		getCheckpoints();
	}, []);
	return (
		<div>
			{data?.map((item, i) => (
				<p className={styles.description} key={item.id}>
					<BasicCard title={item.name} description={item.description} />
				</p>
			))}
		</div>
	);
}
export default Roadmap;
