import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This will render the page content */}
      </main>
      <Footer/>
    </>
  );
};

export default Layout;