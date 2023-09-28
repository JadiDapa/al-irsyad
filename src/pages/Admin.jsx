import { FiSearch } from "react-icons/fi";
import { Link, useOutletContext } from "react-router-dom";
import { adminIcon } from "../assets";
import { TbMoneybag, TbLogout2 } from "react-icons/tb";
import { BiDonateHeart } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";

function Admin() {
  const [isOpen, setisOpen] = useOutletContext();
  return (
    <section
      className={`w-full ${
        isOpen ? "md:pl-[288px]" : "md:translate-x-0"
      } transition-all duration-300 min-h-screen bg-gray-100`}
    >
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
        <div className="md:flex gap-6">
          <div className="md:w-5/12 md:mb-0 mb-4">
            <div className="wfull bg-white rounded-md shadow-md p-4 relative overflow-hidden h-48">
              <div className="text-2xl text-gray-600 font-semibold">
                Selamat Datang, Admin! ⚙️
              </div>
              <p className="text-sm mb-4">Kelola data dengan hati hati </p>
              <div className="text-2xl font-semibold text-primary mt-4 mb-4">
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
          <div className="md:w-7/12 h-96">
            <div className="w-full bg-white rounded-md shadow-md p-4 relative overflow-hidden h-48 flex flex-col justify-between">
              <div className="text-2xl text-gray-600 font-semibold">
                Rangkuman Data
              </div>
              <div className="grid grid-cols-2 gap-y-3 ">
                <div className="flex items-center gap-2">
                  <div className="text-xl w-10 h-10 flex items-center justify-center text-primary bg-green-100 rounded-full">
                    <BsNewspaper />
                  </div>
                  <div className="">
                    <div className="leading-6 text-2xl font-semibold text-slate-600">
                      64
                    </div>
                    <div className="leading-6 font-[500]">Berita</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xl w-10 h-10 flex items-center justify-center text-yellow-500 bg-yellow-100 rounded-full">
                    <AiOutlineSchedule />
                  </div>
                  <div className="">
                    <div className="leading-6 text-2xl font-semibold text-slate-600">
                      12
                    </div>
                    <div className="leading-6 font-[500]">Rencana</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xl w-10 h-10 flex items-center justify-center text-sky-500 bg-sky-100 rounded-full">
                    <TbMoneybag />
                  </div>
                  <div className="">
                    <div className="leading-6 text-2xl font-semibold text-slate-600">
                      90
                    </div>
                    <div className="leading-6 font-[500]">Finansial</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xl w-10 h-10 flex items-center justify-center text-red-500 bg-red-100 rounded-full">
                    <BiDonateHeart />
                  </div>
                  <div className="">
                    <div className="leading-6 text-2xl font-semibold text-slate-600">
                      4
                    </div>
                    <div className="leading-6 font-[500]">Donasi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admin;
