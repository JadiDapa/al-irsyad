import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import LoginAdmin from "../components/LoginAdmin";
import { LoginContext } from "../utils/LoginContext";

const Layout = () => {
  const { isLogin, setLog } = useContext(LoginContext);
  const [isOpen, setisOpen] = useState(true);
  return (
    <div className="overflow-hidden">
      {!isLogin && <LoginAdmin />}
      <Sidebar isOpen={isOpen} setisOpen={setisOpen} />
      <Outlet context={[isOpen, setisOpen]} />
    </div>
  );
};

export default Layout;
