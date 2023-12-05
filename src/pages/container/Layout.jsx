import NavBar from "../components/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <NavBar />
    </>
  );
};

export default Layout;
