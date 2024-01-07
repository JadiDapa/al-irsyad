import { Outlet, redirect } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { CookiesProvider, useCookies } from "react-cookie";
import Login from "./Login";

const Layout = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["status"]);

  function handleLogin(status) {
    setCookie("status", status, { path: "/admin", maxAge: 3600 });
  }

  const [isOpen, setisOpen] = useState(true);
  return (
    <div className="overflow-hidden">
      <CookiesProvider>
        {cookies.status ? (
          <>
            <Sidebar isOpen={isOpen} setisOpen={setisOpen} />
            <Outlet context={[isOpen, setisOpen]} />
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </CookiesProvider>
    </div>
  );
};

export default Layout;
