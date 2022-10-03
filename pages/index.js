import styles from "../styles/Home.module.css";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Home from "./home";

export default function Index() {
	return (
		<div className={styles.container}>
			<ResponsiveAppBar />
			<Home />
		</div>
	);
}
