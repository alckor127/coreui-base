import React from "react";
import { Content, Sidebar, Header, Footer } from "layouts";
import { CToaster } from "@coreui/react";

const Layout = () => {
  return (
    <div className="c-app c-default-layout">
      <Sidebar />
      <div className="c-wrapper">
        <Header />
        <div className="c-body">
          <Content />
        </div>
        <Footer />
      </div>
      <CToaster position="top-right" />
    </div>
  );
};

export default Layout;
