import Footer from "./Footer.js";
import Header from "./Header.js";
import Drawer from "./Drawer.js";

const Layout = (props) => {
  return (
    <div>
      <Header />
      {/* <Drawer /> */}

      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
