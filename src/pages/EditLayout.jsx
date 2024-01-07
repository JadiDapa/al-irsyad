import { Outlet } from "react-router-dom";
import { useState } from "react";
import LoginAdmin from "../components/LoginAdmin";

const Layout = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isOpen, setisOpen] = useState(true);
  return (
    <div className="overflow-hidden">
      {isLogin && <LoginAdmin />}
      <Outlet context={[isOpen, setisOpen]} />
    </div>
  );
};

export default Layout;
