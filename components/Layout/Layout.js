import styles from "./layout.module.css";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
