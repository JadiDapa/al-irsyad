import { BreadCrumb } from "../components";
import { gallery1, gallery2 } from "../assets";
import dot from "../assets/dot.svg";
import { Link } from "react-router-dom";
import DotBg from "../assets/DotBg";

const History = () => {
  const links = [
    { link: "/profile", text: "Profil" },
    { link: "/sejarah", text: "Sejarah" },
  ];

  const histories = [
    {
      year: "1980",
      title: "Pembangunan perdana masjid",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing",
      image: gallery1,
    },
    {
      year: "1980",
      title: "Pembangunan perdana masjid",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing",
      image: gallery1,
    },
    {
      year: "1980",
      title: "Pembangunan perdana masjid",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing",
      image: gallery1,
    },
  ];
  return (
    <section id="home" className="py-12 lg:pt-12 lg:px-8 px-2 overflow-hidden">
      <BreadCrumb links={links} />
      <div className="container mx-auto h-full md:px-10 mt-8">
        <div className="  text-center mb-8 tracking-wide ">
          <h1 className="text-3xl font-semibold text-text2  mt-8 tracking-wide font-play mb-2">
            Sejarah Masjid{" "}
            <span className="font-arab uppercase text-primary">Al-Irsyad</span>
          </h1>
          <div className="lg:text-lg text-base max-lg:mt-2">
            Sejarah Perkembangan Masjid Al-Irsyad dari masa ke masa
          </div>
        </div>
        <div className="grid md:grid-cols-[minmax(0,65%)_minmax(0,_35%)] md:gap-[5%] gap-y-4 relative">
          <div className="absolute opacity-[20%] top-0 left-0 grid grid-cols-2 scale-[65%] origin-top-left -z-50">
            <DotBg />
            <DotBg />
            <DotBg />
            <DotBg />
            <DotBg />
            <DotBg />
            <DotBg />
            <DotBg />
          </div>
          <div className="">
            <h2 className="text-3xl font-semibold lg:mt-4 mt-2 tracking-wide mb-4 text-primary">
              Sejarah Singkat :
            </h2>
            <div className="md:w-[85%] w-full lg:text-base leading-[29px]">
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                totam consequatur magni delectus voluptates aliquam corrupti,
                dignissimos nihil eius asperiores velit perferendis quasi, ut
                non, odio repellat voluptas obcaecati. Voluptates dolore quos
                fuga inventore nostrum, temporibus praesentium tempora animi ad!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                fugit doloremque minus quo! Facilis corrupti accusantium ea
                iusto! Cumque, id.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                totam consequatur magni delectus voluptates aliquam corrupti,
                dignissimos nihil eius asperiores velit perferendis quasi, ut
                non, odio repellat voluptas obcaecati. Voluptates dolore quos
                fuga inventore nostrum, temporibus praesentium tempora animi ad!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                fugit doloremque minus quo! Facilis corrupti accusantium ea
                iusto! Cumque, id.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                totam consequatur magni delectus voluptates aliquam corrupti,
                dignissimos nihil eius asperiores velit perferendis quasi, ut
                non, odio repellat voluptas obcaecati. Voluptates dolore quos
                fuga inventore nostrum, temporibus praesentium tempora animi ad!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                fugit doloremque minus quo! Facilis corrupti accusantium ea
                iusto! Cumque, id.
              </p>
            </div>
            <div className="text-secondary mt-8 items-center gap-6 md:flex hidden">
              <div className="text-lg font-semibold">Baca : </div>
              <div className="rounded-md px-2 py-1 shadow-lg bg-white">
                <Link to="/profil">Profil Masjid</Link>
              </div>
              <div className="rounded-md px-2 py-1 shadow-lg bg-white">
                <Link to="/profil/visi-misi">Visi & Misi</Link>
              </div>
            </div>
          </div>
          <ol className="relative border-l border-green-300 md:mt-5 max-md:max-w-sm max-w-[300px]">
            {histories.map((history, index) => (
              <li key={index} className="mb-4 ml-4 clear-both">
                <div className="absolute w-3 h-3 bg-primary outline outline-primary-light outline-1 rounded-full mt-1.5 -left-1.5 border "></div>
                <div className="border rounded-md p-2">
                  <time className="mb-1 font-semibold text-text2 leading-none">
                    Tahun {history.year}
                  </time>
                  <div className="">
                    <img
                      src={history.image}
                      alt=""
                      className="aspect-video object-cover mr-4 rounded-lg p-2 bg-white shadow-xl"
                    />
                    <p className="text-sm leading-6 text-justify">
                      {history.content}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="text-secondary mt-8 items-center gap-6 flex md:hidden px-4  ">
        <div className=" font-semibold">Baca : </div>
        <div className="rounded-md px-1 py-0.5 shadow-md bg-white">
          <Link to="/profil">Profil Masjid</Link>
        </div>
        <div className="rounded-md px-1 py-0.5 shadow-md bg-white">
          <Link to="/profil/visi-misi">Visi & Misi</Link>
        </div>
      </div>
    </section>
  );
};

export default History;
