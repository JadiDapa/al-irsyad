import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [isOpen, setisOpen] = useState(true);
  return (
    <div>
      <Sidebar isOpen={isOpen} setisOpen={setisOpen} />
      <Outlet context={[isOpen, setisOpen]} />
    </div>
  );
};

export default Layout;
