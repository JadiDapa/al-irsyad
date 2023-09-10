import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BiSearch, BiMenuAltRight, BiMenuAltLeft, BiX } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";

// const Navbar = () => {
//   let Links = [
//     { name: "Home", link: "/" },
//     { name: "Profile", link: "/profile" },
//     { name: "Organisasi", link: "/organisation" },
//     { name: "Kegiatan", link: "/agenda" },
//     { name: "Kontak", link: "/contact" },
//   ];
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="shadow-sm top-0 left-0 fixed w-full z-50 text-gray-100">
//       <div className="flex items-center justify-between  py-4 lg:mx-24 mx-4">
//         <div className="flex items-center gap-2">
//           <img src={logo} alt="" className="w-8" />
//           <div className="font-bold text-xl cursor-pointer font-inter text-emerald-500">
//             AL-ISRAD
//           </div>
//         </div>

//         <div className="text-3xl cursor-pointer md:hidden flex gap-2">
//           <BiSearch />
//           <div onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <BiX /> : <BiMenuAltRight />}
//           </div>
//         </div>

//         <ul
//           className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-transparent bg-white md:z-auto w-5/12 md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in top-[70px] ${
//             isOpen ? "left-0 " : "-left-[100vw]"
//           }`}
//         >
//           {Links.map((link, index) => (
//             <li
//               key={link.name}
//               className={`md:ml-8 text-xl md:my-0 z-50 ${
//                 index == 0 ? "mt-10 mb-7" : "my-7"
//               }`}
//             >
//               <Link
//                 to={link.link}
//                 className=" hover:text-gray-400 duration-500"
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//           <button
//             className=" text-white font-inter py-2 px-6 rounded md:ml-8 outline
//     duration-500"
//           >
//             Kelola Web
//           </button>
//         </ul>
//       </div>
//     </div>
//   );
// };

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <header className="py-8 lg:pt-6 lg:pb-14 lg:px-10">
      <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-8">
        <div className="flex justify-center lg:justify-normal">
          <a href="#" className="flex justify-center items-center">
            <img src={logo} alt="" className="w-16" />
            <div className="font-arab text-3xl text-emerald-600 font-semibold">
              AL-IRSYAD
            </div>
          </a>
        </div>
        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <FaMapMarkerAlt className="text-2xl text-accent" />
            <div className="text-secondary">Bukit Hijau, Palembang</div>
          </div>
          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <BsFillTelephoneFill className="text-2xl text-accent" />
            <div className="text-secondary">(+62)812 2300</div>
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
              className="mnav_close-btn bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all"
              onClick={() => setisOpen(!isOpen)}
            >
              {isOpen ? (
                <BiX className="close-btn text-2xl text-white" />
              ) : (
                <BiMenuAltLeft className="close-btn text-2xl text-white" />
              )}
            </div>
            <div className="px-12 flex flex-col gap-y-12 h-full">
              <a href="#" className="flex justify-center items-center">
                <img src={logo} alt="" className="w-16" />
                <div className="font-arab text-3xl text-emerald-600 font-semibold">
                  AL-IRSYAD
                </div>
              </a>
              <ul className="flex flex-col gap-y-5">
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Profil
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Organisasi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Kegiatan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
              <form
                action=""
                className="relative flex gap-x-[10px] items-center"
              >
                <label htmlFor="search">
                  <BiSearch className="text-2xl text-accent" />
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search..."
                  className="outline-none w-40 border-b-2 focus:border-b-2 focus:border-accent placeholder:italic"
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
              <li>
                <a
                  href="#"
                  className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                >
                  Profil
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                >
                  Organisasi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                >
                  Kegiatan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                >
                  Kontak
                </a>
              </li>
            </ul>
            <form action="" className="relative flex gap-x-[10px]">
              <label
                htmlFor="searchdesk"
                className="flex justify-center items-center group"
              >
                <BiSearch className="text-2xl text-accent" />
              </label>
              <input
                type="text"
                id="searchdesk"
                className="outline-none w-[100px] focus:w-[180px] focus:border-b-2 focus:border-accent placeholder:italic placeholder:text-base transition-all duration-200"
                placeholder="Search..."
              />
            </form>
          </nav>
        </div>
      </div>
    </header>
  );
}
