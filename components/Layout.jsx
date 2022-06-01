import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children, className }) => {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <div>
        <NavBar />
      </div>
      <div className={className}>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
