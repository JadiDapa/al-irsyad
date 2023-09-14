import { BreadCrumb } from "../components";
import { news2 } from "../assets";
import { Link } from "react-router-dom";

const VissionMission = () => {
  const links = [
    { link: "/profile", text: "Profil" },
    { link: "/visi-misi", text: "Visi Misi" },
  ];
  return (
    <section id="home" className=" py-12 lg:pt-12 px-8 overflow-hidden">
      <BreadCrumb links={links} />
      <svg
        width="100%"
        height="100%"
        className="-z-10 absolute w-7/12 top-[325px] left-10"
      >
        <pattern
          id="pattern-circles"
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle
            id="pattern-circle"
            cx="10"
            cy="10"
            r="1.6257413380501518"
            fill="#d3d3d3"
          ></circle>
        </pattern>

        <rect
          id="rect"
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#pattern-circles)"
        ></rect>
      </svg>
      <h1 className="text-4xl font-semibold text-text2 text-center my-12 tracking-wide">
        Visi & Misi Masjid
        <span className="font-arab uppercase text-primary"> Al-Irsyad</span>
      </h1>
      <div className="grid lg:grid-cols-[minmax(0,55%)_minmax(0,_35%)] gap-[5%] lg:px-10">
        <div className="">
          <div className="mb-4">
            <h2 className="font-play text-2xl tracking-wider mb-2 font-semibold">
              Visi :
            </h2>
            <p className="text-xl text-slate-600">
              Menjadikan Masjid yang Makmur Sebagai Sentra Ibadah dan
              Pemberdayaan Umat untuk Membangun Indonesia
            </p>
          </div>
          <div className="">
            <h2 className="font-play text-2xl tracking-wider mb-2 font-semibold">
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
        <div className="">
          <div className="p-4 shadow-xl rounded-lg">
            <img src={news2} alt="" className="rounded-lg" />
          </div>
        </div>
      </div>
      <div className="text-secondary lg:px-10 mt-8 flex items-center gap-6">
        <div className="text-lg font-semibold">Baca : </div>
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
