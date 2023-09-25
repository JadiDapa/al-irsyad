import { BreadCrumb } from "../components";
import { news2 } from "../assets";
import { Link } from "react-router-dom";
import DotBg from "../assets/DotBg";

const VissionMission = () => {
  const links = [
    { link: "/profile", text: "Profil" },
    { link: "/visi-misi", text: "Visi Misi" },
  ];
  return (
    <section id="home" className=" py-12 lg:pt-12 lg:px-8 px-2 overflow-hidden">
      <BreadCrumb links={links} />
      <div className="text-center mb-12 ">
        <h1 className="text-3xl font-semibold text-text2  mt-8 tracking-wide font-play">
          Visi & Misi Masjid
          <span className="font-arab uppercase text-primary"> Al-Irsyad</span>
        </h1>
        <div className="lg:text-lg text-base max-lg:mt-2">
          Visi dan Misi Jamaah Masjid Al-Irsyad
        </div>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,55%)_minmax(0,_35%)] gap-[5%] lg:px-10 px-2 relative">
        <div className="absolute opacity-[15%] top-0 left-8 grid grid-cols-2 -z-50">
          <DotBg />
          <DotBg />
          <DotBg />
          <DotBg />
        </div>
        <div className="max-lg:order-2">
          <div className="mb-8">
            <h2 className="text-3xl text-primary tracking-widest mb-2 font-semibold">
              Visi :
            </h2>
            <p className="text-[19px] text-slate-600">
              Menjadikan Masjid yang Makmur Sebagai Sentra Ibadah dan
              Pemberdayaan Umat untuk Membangun Indonesia
            </p>
          </div>
          <div className="">
            <h2 className="text-3xl text-primary tracking-widest mb-2 font-semibold">
              Misi :
            </h2>
            <ol className="list-decimal list-inside pl-4">
              <li className="leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
                eveniet?
              </li>
              <li className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod?
              </li>
              <li className="leading-relaxed">Lorem ipsum dolor sit amet.</li>
              <li className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </li>
            </ol>
          </div>
        </div>
        <div className="max-lg:order-1">
          <div className="lg:p-4 p-2 shadow-xl rounded-lg">
            <img src={news2} alt="" className="rounded-lg" />
          </div>
        </div>
      </div>
      <div className="text-secondary lg:px-10 mt-10 flex items-center gap-6 px-3">
        <div className="text-lg font-semibold">Baca: </div>
        <div className="rounded-md px-2 py-1 shadow-lg bg-white">
          <Link to="/profil">Profil Masjid</Link>
        </div>
        <div className="rounded-md px-2 py-1 shadow-lg bg-white">
          <Link to="/profil/sejarah">Sejarah</Link>
        </div>
      </div>
    </section>
  );
};

export default VissionMission;
