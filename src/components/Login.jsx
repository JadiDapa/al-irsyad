import { BiSolidLock } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Login = ({ showLogin, setShowLogin }) => {
  return (
    <div
      className={`w-[380px] h-[300px] shadow-lg fixed top-[50%] left-[50%] bg-white -translate-x-[50%] -translate-y-[50%] rounded-3xl ${
        showLogin ? "block" : "hidden"
      } `}
    >
      <>
        <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto relative -top-12">
          <RiAdminLine className="text-5xl text-white" />
        </div>
        <div className="flex flex-col items-center gap-4 -translate-y-5">
          <div className="flex items-center">
            <div className="p-[9px]  bg-primary">
              <label htmlFor="" className="text-white text-xl">
                <RiAdminLine />
              </label>
            </div>
            <div className="border border-primary">
              <input type="text" className="p-0.5" placeholder="Admin ID" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="p-[9px]  bg-primary">
              <label htmlFor="" className="text-white text-xl">
                <RiAdminLine />
              </label>
            </div>
            <div className="border border-primary">
              <input type="text" className="p-0.5" placeholder="Password" />
            </div>
          </div>
          <div className="flex justify-between text-sm w-[264px] mt-2">
            <div className="flex gap-1">
              <input type="checkbox" className="w-4" />
              <div className="">Remember Me</div>
            </div>
            <div className="">
              <div className="">Forgot Password?</div>
            </div>
          </div>
          <div className="mt-2">
            <button className="py-0.5 px-20 rounded-2xl bg-primary text-white">
              LOGIN
            </button>
          </div>
        </div>
      </>
      <div className="w-60 p-1 shadow-lg border-t-2  bg-white rounded-b-xl border text-center translate-y-2 mx-auto flex justify-center gap-2 items-center">
        <div className="text-secondary">ADMINISTRATOR</div>
        <div
          className="p-0.5 text-sm bg-primary rounded-full text-white"
          onClick={() => setShowLogin(!showLogin)}
        >
          <RxCross2 />
        </div>
      </div>
    </div>
  );
};

export default Login;
