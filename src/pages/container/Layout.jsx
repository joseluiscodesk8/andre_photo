import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import styles from "../../styles/index.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <section className={styles.Layout}>
        <NavBar />
        {children}
        <Footer />
      </section>
    </>
  );
};

export default Layout;
