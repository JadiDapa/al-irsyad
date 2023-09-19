import { BreadCrumb } from "../components";
import { news4, news5 } from "../assets";
import { Link } from "react-router-dom";
import DotBg from "../assets/DotBg";

const Tpa = () => {
  const links = [
    { link: "/lembaga", text: "Lenbaga" },
    { link: "/lembaga/tpa", text: "TPA" },
  ];

  return (
    <section id="home" className=" py-12 lg:pt-12 px-8 overflow-hidden">
      <BreadCrumb links={links} />
      <div className="container mx-auto h-full lg:px-10 mt-8">
        <div className="  text-center mb-8 tracking-wide ">
          <h1 className="font-play text-4xl font-semibold text-text2">
            TPA Masjid{" "}
            <span className="font-arab uppercase text-primary">Al-Irsyad</span>
          </h1>
          <div className="text-lg">
            Taman Pendidikan Al-Qur'an (TPA) khusus Masjid Al-Irsyad
          </div>
        </div>
        <div className="relative">
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
          <div className="grid lg:grid-cols-[minmax(0,65%)_minmax(0,_34%)] gap-[5%] mb-12">
            <div className="">
              <h2 className="text-3xl font-semibold mt-4 tracking-wide mb-4 text-primary">
                Apa Itu TPA Al-Irsyad
              </h2>
              <div className="w-[85%] text-justify">
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  totam consequatur magni delectus voluptates aliquam corrupti,
                  dignissimos nihil eius asperiores velit perferendis quasi, ut
                  non, odio repellat voluptas obcaecati. Voluptates dolore quos
                  fuga inventore nostrum, temporibus praesentium tempora animi
                  ad! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta fugit doloremque minus quo! Facilis corrupti accusantium
                  ea iusto! Cumque, id.
                </p>
              </div>
            </div>
            <div className=" mt-12">
              <div className="p-3 shadow-lg rounlg">
                <img
                  src={news4}
                  alt=""
                  className="w-full aspect-video rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-[minmax(0,34%)_minmax(0,_65%)] gap-[5%]">
            <div className=" mt-12">
              <div className="p-3 shadow-lg rounlg">
                <img
                  src={news5}
                  alt=""
                  className="w-full aspect-video rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col items-end">
              <h2 className="text-3xl font-semibold mt-4 tracking-wide mb-4 text-primary text-end">
                Agenda TPA Al-Irsyad
              </h2>
              <div className="w-[85%] justify-end text-justify">
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  totam consequatur magni delectus voluptates aliquam corrupti,
                  dignissimos nihil eius asperiores velit perferendis quasi, ut
                  non, odio repellat voluptas obcaecati. Voluptates dolore quos
                  fuga inventore nostrum, temporibus praesentium tempora animi
                  ad! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta fugit doloremque minus quo! Facilis corrupti accusantium
                  ea iusto! Cumque, id.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tpa;
