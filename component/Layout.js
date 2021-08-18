import Footer from "./Footer.js";
import Header from "./Header.js";

const layoutStyle = {
  backgroundColor: "lightblue",
  opacity: 0.8,
  padding: 20,
  margin: 20,
  border: "1px solid black",
  animation: "mymove 5s infinite",
};

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div style={layoutStyle}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
