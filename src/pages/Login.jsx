import { useState } from "react";
import { RiAdminLine } from "react-icons/ri";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = ({ onLogin }) => {
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isShown, setIsShown] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    let correctID = "ADM";
    let correctPw = "123";

    if (ID === correctID && password === correctPw) {
      let status = "logged-in";
      onLogin({ status });
    } else if (ID.length === 0 || password.length === 0) {
      return setError("Silahkan Isi Admin ID & Password Terlebih Dahulu!");
    } else {
      setID("");
      setPassword("");
      return setError("Terdapat kesalahan pada AdminID atau Password!");
    }
  }

  return (
    <div className="h-screen w-screen bg-white fixed z-50 overflow-hidden">
      <div className="w-[380px] h-[300px] shadow-lg fixed top-[50%] left-[50%] bg-white -translate-x-[50%] -translate-y-[50%] rounded-3xl ">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto relative -top-12">
            <RiAdminLine className="text-5xl text-white" />
          </div>
          {error && (
            <div className="text-red-500 text-sm h-0 -translate-y-11 text-center">
              {error}
            </div>
          )}
          <div className="flex flex-col items-center gap-4 -translate-y-5">
            <div className="flex items-center">
              <div className="p-[9px]  bg-primary">
                <label htmlFor="" className="text-white text-xl">
                  <RiAdminLine />
                </label>
              </div>
              <div
                className={`border border-primary ${error && "border-red-500"}`}
              >
                <input
                  type="text"
                  className="p-0.5 pl-3 text-slate-700"
                  placeholder="Admin ID"
                  value={ID}
                  onChange={(e) => setID(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center relative">
              <div className="p-[9px]  bg-primary">
                <label htmlFor="" className="text-white text-xl">
                  <RiAdminLine />
                </label>
              </div>
              <div
                className={` border border-primary ${
                  error && "border-red-500"
                }`}
              >
                <input
                  type={isShown ? "text" : "password"}
                  className="p-0.5 pl-3 text-slate-700"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div
                onClick={() => setIsShown(!isShown)}
                className="absolute right-2 text-[22px]"
              >
                {isShown ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            <div className="flex justify-between text-sm w-[264px] mt-2">
              <div className="flex gap-1">
                <input type="checkbox" className="w-4 checked:bg-primary" />
                <div className="hover:text-primary duration-300 cursor-pointer">
                  Remember Me
                </div>
              </div>
              <div className="">
                <div className="line-through">Forgot Password?</div>
              </div>
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="py-0.5 px-20 rounded-2xl bg-primary text-white"
              >
                LOGIN
              </button>
            </div>
          </div>
        </form>
        <div className="w-60 p-1 shadow-lg border-t-2  bg-white rounded-b-xl border text-center translate-y-2 mx-auto flex justify-center gap-2 items-center">
          <div className="text-secondary">ADMINISTRATOR</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
