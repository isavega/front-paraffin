import styles from "./layout.module.css";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";

const Layout = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
