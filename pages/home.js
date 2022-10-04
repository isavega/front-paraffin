import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import BasicCard from "../components/BasicCard/BasicCard";
import axios from "axios";

function Home() {
	const router = useRouter();
	const [data, setData] = useState([]);

	useEffect(() => {
		const getCurriculums = async () => {
			try {
				const response = await axios.get("/api/curriculums");
				setData(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		getCurriculums();
	}, []);

	const dataHandler = (currentRoadmap) => {
		router.push(
			{
				pathname: "/roadmap",
				query: {
					...currentRoadmap,
				},
			},
			"/roadmap"
		);
	};

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>🔥 Paraffin 🔥</h1>
				<br></br>
				<div>
					{" "}
					<h2>
						{" "}
						El camino a convertirse en desarrollador nunca fue tan fácil{" "}
					</h2>
				</div>
				<div>
					{data?.map((roadmap, index) => (
						<p className={styles.description} key={roadmap.id}>
							<BasicCard
								key={index}
								title={roadmap.name}
								description={roadmap.description}
								type="Roadmap"
								action={() => dataHandler(roadmap)}
							/>
						</p>
					))}
				</div>
			</main>
		</div>
	);
}

export default Home;
