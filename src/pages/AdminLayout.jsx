import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
