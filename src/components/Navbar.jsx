import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BiSearch, BiMenuAltLeft, BiX } from "react-icons/bi";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { IoNewspaper } from "react-icons/io5";
import { FaRupiahSign } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill, BsFillPeopleFill } from "react-icons/bs";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  const links = [
    { link: "/", name: "Beranda", icon: <AiFillHome /> },
    { link: "/profil", name: "Profil", icon: <AiFillInfoCircle /> },
    { link: "/kegiatan", name: "Kegiatan", icon: <IoNewspaper /> },
    { link: "/finansial", name: "Finansial", icon: <FaRupiahSign /> },
    { link: "/lembaga", name: "Lembaga", icon: <BsFillPeopleFill /> },
  ];

  return (
    <header className="py-8 lg:pt-6 lg:pb-14 lg:px-10">
      <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-8">
        <div className="flex justify-center lg:justify-normal">
          <a href="#" className="flex justify-center items-center">
            <img src={logo} alt="" className="lg:w-16 w-48 max-lg:mb-2" />
            <div className="hidden lg:block font-arab text-3xl text-emerald-600 font-semibold">
              AL-IRSYAD
            </div>
          </a>
        </div>
        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <FaMapMarkerAlt className="text-2xl text-primary" />
            <div className="text-text1">Bukit Hijau, Palembang</div>
          </div>
          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <BsFillTelephoneFill className="text-2xl text-primary" />
            <div className="text-text1">(+62)812 2300</div>
          </div>
          <button className="btn btn-sm btn-outline w-60 lg:w-auto mx-auto lg:mx-0">
            kontak
          </button>
          {/* Mobile */}
          <nav
            className={`mnav bg-white fixed w-[270px] top-0 h-screen ${
              isOpen ? "left-0" : "-left-[270px]"
            } shadow-2xl lg:hidden transition-all duration-300 z-20 `}
          >
            <div
              className="mnav_close-btn bg-text2 w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all"
              onClick={() => setisOpen(!isOpen)}
            >
              {isOpen ? (
                <BiX className="close-btn text-2xl text-white" />
              ) : (
                <BiMenuAltLeft className="close-btn text-2xl text-white" />
              )}
            </div>
            <div className="px-12 flex flex-col gap-y-8 h-full">
              <a href="#" className="flex justify-center items-center">
                <img src={logo} alt="" className="w-40" />
              </a>
              <ul className="flex flex-col gap-y-5">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.link}
                      className="text-text1 hover:text-primary transition-all duration-300 flex gap-2 items-center"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <form
                action=""
                className="relative flex gap-x-[10px] items-center"
              >
                <label htmlFor="search">
                  <BiSearch className="text-2xl text-primary" />
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search..."
                  className="outline-none w-40 border-b-2 focus:border-b-2 focus:border-pritext-primary placeholder:italic"
                />
              </form>
              <div
                className="mnav_close-btn bg-primary hidden justify-center items-center rounded-md cursor-pointer transition-all max-[300px]:flex  text-white"
                onClick={() => setisOpen(!isOpen)}
              >
                <div className="text-lg">CLOSE</div>
                <BiX className="close-btn text-2xl" />
              </div>
            </div>
          </nav>
          {/* Dekstop */}
          <nav className="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]">
            <ul className="flex gap-x-4">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    className="border-r pr-4 text-text1 hover:text-primary transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <form action="" className="relative flex gap-x-[10px]">
              <label
                htmlFor="searchdesk"
                className="flex justify-center items-center group"
              >
                <BiSearch className="text-2xl text-primary" />
              </label>
              <input
                type="text"
                id="searchdesk"
                className="outline-none w-[100px] focus:w-[180px] focus:border-b-2 focus:border-pritext-primary placeholder:italic placeholder:text-base transition-all duration-200"
                placeholder="Search..."
              />
            </form>
          </nav>
        </div>
      </div>
    </header>
  );
}
