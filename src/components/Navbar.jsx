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
    [
      { link: "/", name: "Home", icon: <AiFillHome /> },
      { link: "/#shalat", name: "Shalat" },
      { link: "/#sambutan", name: "Sambutan" },
      { link: "/#berita", name: "Berita" },
      { link: "/#rencana", name: "Rencana" },
      { link: "/#keuangan", name: "Keuangan" },
      { link: "/#tpa", name: "TPA" },
    ],
    [
      { link: "/profil", name: "Profil", icon: <AiFillInfoCircle /> },
      { link: "/profil/sejarah", name: "Sejarah" },
      { link: "/profil/visi-misi", name: "Visi Misi" },
    ],
    [
      { link: "/kegiatan", name: "Kegiatan", icon: <IoNewspaper /> },
      { link: "/kegiatan/berita", name: "Berita" },
      { link: "/kegiatan/rencana", name: "Rencana" },
    ],
    [
      { link: "/ekonomi", name: "Ekonomi", icon: <FaRupiahSign /> },
      { link: "/ekonomi/finansial", name: "Finansial" },
      { link: "/ekonomi/donasi", name: "Donasi" },
    ],
    [
      { link: "/lembaga", name: "Lembaga", icon: <FaRupiahSign /> },
      { link: "/lembaga/tpa", name: "TPA" },
      { link: "/lembaga/organisasi", name: "Lainnya" },
    ],
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

              <ul className="flex flex-col gap-y-5 ">
                {links.map((link, index) => (
                  <div
                    key={index}
                    className={`dropdown-parent border-slate-200 text-text1 `}
                  >
                    <div className="dropdown group inline-block relative ">
                      <Link
                        to={link[0].link}
                        className="inline-flex items-center hover:text-primary"
                      >
                        <span className="mr-1">{link[0].name}</span>

                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </Link>
                      <ul
                        className="dropdown-menu group  hidden group-hover:block w-32 transition-all duration-300 -translate-x-4 border-b-2 border-primary pt-2 bg-white"
                        onClick={() => setisOpen(!isOpen)}
                      >
                        {link.map((sublink, index) => {
                          return (
                            <li key={index} className="bg-white z-50">
                              <Link
                                className="rounded-t bg-white hover:text-primary py-1 px-4 block whitespace-no-wrap"
                                to={sublink.link}
                              >
                                {sublink.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
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
          <nav className="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:px-[50px] lg:justify-between">
            <ul className="flex">
              {links.map((link, index) => (
                <div
                  key={index}
                  className={`dropdown-parent border-r-4 border-dotted ${
                    index === 0 && "pl-0"
                  } px-6 border-slate-200 text-text1`}
                >
                  <div className="dropdown group inline-block relative ">
                    <Link
                      to={link[0].link}
                      className="inline-flex items-center hover:text-primary"
                    >
                      <span className="mr-1">{link[0].name}</span>

                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </Link>
                    <ul className="dropdown-menu group absolute hidden group-hover:block w-32 transition-all duration-300 -translate-x-4 border-b-2 border-primary pt-2">
                      {index > 0
                        ? link.map((sublink, index) => {
                            if (index > 0) {
                              return (
                                <li key={index} className="">
                                  <Link
                                    className="rounded-t bg-white hover:text-primary py-1 px-4 block whitespace-no-wrap"
                                    to={sublink.link}
                                  >
                                    {sublink.name}
                                  </Link>
                                </li>
                              );
                            }
                          })
                        : link.map((sublink, index) => {
                            if (index > 0) {
                              return (
                                <li key={index} className="">
                                  <a
                                    className="rounded-t bg-white hover:text-primary py-1 px-4 block whitespace-no-wrap"
                                    href={sublink.link}
                                  >
                                    {sublink.name}
                                  </a>
                                </li>
                              );
                            }
                          })}
                    </ul>
                  </div>
                </div>
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
