import styles from "./layout.module.css";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";

export default function Layout({ children }) {
	return (
		<>
			<ResponsiveAppBar />
			<main className={styles.main}>{children}</main>
		</>
	);
}
