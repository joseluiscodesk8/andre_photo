import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


const Layout = ({ children }) => {
  return (
    <>
      {children}
      <NavBar />
      <Footer />
    </>
  );
};

export default Layout;
