import { FaMosque } from "react-icons/fa";
import { AiOutlineDownCircle } from "react-icons/ai";
import mainImg from "../assets/main.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-grey overflow-hidden h-[110vh] w-full bg-[url('./assets/mainls.jpg')] bg-cover bg-top"
    >
      <div
        style={{
          width: "100%",
          height: "110vh",
          background: "linear-gradient(to right, #111, transparent)",
          zIndex: 10,
          position: "absolute",
        }}
      ></div>

      <div className="container mx-auto h-full lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-10 h-full  mt-12 fleem">
          <div className="heroText text-center lg:text-left">
            <div className="flex items-center bg-white py-[10px] px-5 w-max gap-x-2 mb-[26px] rounded-full mx-auto lg:mx-0">
              <FaMosque className="text-2xl text-primary" />
              <div className="uppercase text-base font-medium text-[#9ab4b7] tracking-[2.25px]">
                Masjid Al-Irsyad
              </div>
            </div>
            <h1 className="h1 lg:text-6xl/[65px] mb-6 text-slate-100">
              Ayo Bersama Kita <br />
              <span className="text-primary text-7xl">Makmurkan </span>
              Masjid!
            </h1>
            <p className="mb-8 md:max-w-4xl lg:max-w-2xl text-slate-100">
              Rasulullah SAW bersabda: &quot;Siapa yang pergi ke masjid pada
              pagi dan petang hari, Allah mempersiapkan jamuan untuknya di surga
              setiap kali ia pergi atau pulang.&quot;
              <br /> (HR. Bukhari dan Muslim).
            </p>
            <Link to={"/profil"} className="">
              <button className="btn btn-lg btn-accent mx-auto lg:mx-0 mb-8 hover:shadow-[0_0_5px_0_#49cf97] transition-all duration-200">
                Selengkapnya{" "}
                <span className="ml-2 text-xl">
                  <AiOutlineDownCircle />
                </span>
              </button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
