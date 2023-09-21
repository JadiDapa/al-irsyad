import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { adminIcon } from "../assets";

function Admin() {
  return (
    <section className="w-full lg:pl-[288px] overflow-hidden bg-gray-100 h-screen">
      <div className="w-full p-6 flex flex-col gap-6">
        <div className="search bg-white flex px-4 py-4 rounded-md shadow-md justify-between items-center">
          <div className="flex gap-3 items-center">
            <FiSearch className="text-2xl" />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="">
            <div className="flex items-center justify-center aspect-square rounded-full text-white bg-primary-light text-sm">
              ADM
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-5/12">
            <div className="wfull bg-white rounded-md shadow-md px-4 py-6 pb-8 relative overflow-hidden">
              <div className="text-2xl text-text2 font-semibold">
                Selamat Datang, Admin! ⚙️
              </div>
              <p className="text-sm mb-4">Kelola data dengan hati hati </p>
              <div className="text-2xl font-semibold text-primary mb-1">
                {new Date().toLocaleDateString()}
              </div>
              <Link className="bg-primary text-white py-2 px-4 rounded-md ">
                Kelola Data
              </Link>
              <img
                src={adminIcon}
                alt=""
                className="absolute bottom-0 right-2
               w-1/4"
              />
            </div>
          </div>
          <div className="border w-7/12 h-96"></div>
        </div>
      </div>
    </section>
  );
}

export default Admin;
