import { FaMosque } from "react-icons/fa";
import { AiOutlineDownCircle } from "react-icons/ai";
import mainImg from "../assets/main.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className=" bg-grey pt-12 lg:pt-12  overflow-hidden">
      <div className="container mx-auto h-full lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-y-10 ">
          <div className="heroText lg:w-[60%] text-center lg:text-left">
            <div className="flex items-center bg-white py-[10px] px-5 w-max gap-x-2 mb-[26px] rounded-full mx-auto lg:mx-0">
              <FaMosque className="text-2xl text-primary" />
              <div className="uppercase text-base font-medium text-[#9ab4b7] tracking-[2.25px]">
                Masjid Al-Irsyad
              </div>
            </div>
            <h1 className="h1 lg:text-6xl/[65px] mb-6">
              Ayo Kita <br />
              <span className="text-primary">Makmurkan</span> Masjid!
            </h1>
            <p className="mb-8 md:max-w-4xl lg:max-w-lg">
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
          <div className="heroImg flex max-w-[814px] md:self-end md:justify-end max-md:w-9/12">
            <img
              src={mainImg}
              alt=""
              className="lg:sm-[70%] sm: mx-auto w-full border-white shadow-[0_10px_0_0_rgba(255,255,255,0.8-0329)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
