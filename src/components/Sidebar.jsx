import logo from "../assets/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { TbMoneybag, TbLogout2 } from "react-icons/tb";
import { BiDonateHeart } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { nama: "Dashboard", link: "/admin", icon: <AiOutlineHome /> },
    { nama: "Berita", link: "/admin/berita", icon: <BsNewspaper /> },
    { nama: "Rencana", link: "/admin/rencana", icon: <AiOutlineSchedule /> },
    { nama: "Finansial", link: "/admin/finansial", icon: <TbMoneybag /> },
    { nama: "Donasi", link: "/admin/donasi", icon: <BiDonateHeart /> },
    { nama: "Keluar", link: "/", icon: <TbLogout2 /> },
  ];
  return (
    <>
      <aside
        id="logo-sidebar"
        className="shadow-[5px_0px_7px_-3px_rgba(0,0,0,0.1)] fixed top-0 left-0 z-40 w-72 h-screen pt-7 transition-transform -translate-x-full bg-white  sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-5 pb-6 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="flex justify-center items-center mb-7">
                <img src={logo} alt="" className="lg:w-14 max-lg:mb-2 mr-2" />
                <div className="hidden lg:block font-arab text-3xl text-emerald-600 font-semibold">
                  AL-IRSYAD
                </div>
              </a>
            </li>
            {links.map((link, index) => (
              <li key={index} className="mb-2">
                <Link
                  to={link.link}
                  className="flex items-center py-2 pl-5 text-gray-900 rounded-lg  hover:bg-primary hover:text-white group"
                >
                  <div className="text-2xl">{link.icon}</div>
                  <span className="ml-3 text-lg">{link.nama}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
