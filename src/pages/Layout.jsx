import { Footer, Navbar } from "../components";
import { Outlet } from "react-router-dom";
import Login from "../components/Login";
import { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer showLogin={showLogin} setShowLogin={setShowLogin} />
      <Login showLogin={showLogin} setShowLogin={setShowLogin} />
    </>
  );
};

export default Layout;
