import Layout from "../components/Layout.js";
import Drawer from "../components/Drawer";
import Header from "../components/Header.js";

import React from "react";
function Homepage() {
  return (
    <div>
      <Header />
      <Layout>
        {/* <div>
          <h1>Welcome to the HSQL Documentation!</h1>
        </div> */}
      </Layout>
      <Drawer />
    </div>
  );
}

export default Homepage;
{
  /* Nothing
const index = () => {
  return (
    <Layout>
      <div>
        <h1>This page is from Index.js </h1>
      </div>
    </Layout>
  );
};
export default index;
*/
}
