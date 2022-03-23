import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, className }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className={className}>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
