import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AppBar from "../components/AppBar";
import BasicCard from "../components/BasicCard";

import Home from "./home";

export default function Index() {
	// const [data, setData] = useState();

	// useEffect(() => {
	// 	const getCurriculums = async () => {
	// 		const response = await fetch("/api/curriculums");
	// 		const getResponse = await response.json();
	// 		setData(getResponse);
	// 	};
	// 	getCurriculums();
	// }, []);

	return (
		<div className={styles.container}>
			<Home />
		</div>
	);
}
