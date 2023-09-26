import { BreadCrumb } from "../components";
import { news4, news5 } from "../assets";
import { Link } from "react-router-dom";
import DotBg from "../assets/DotBg";

const Majelis = () => {
  const links = [
    { link: "/lembaga", text: "Lembaga" },
    { link: "/lembaga/majelis", text: "Majelis" },
  ];

  return (
    <section id="home" className="py-12 md:pt-12 md:px-8 px-2 overflow-hidden">
      <BreadCrumb links={links} />
      <div className="container mx-auto md:px-5">
        <div className="text-center mt-8 mb-12">
          <h1 className="text-3xl font-semibold text-text2  mt-8 tracking-wide font-play mb-2">
            Majelis Masjid{" "}
            <span className="font-arab uppercase text-primary">Al-Irsyad</span>
          </h1>
          <div className="md:text-lg text-base max-md:mt-2">
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
          <div className="grid  md:grid-cols-[minmax(0,65%)_minmax(0,_34%)] mb-12">
            <div className="">
              <h2 className="text-3xl font-semibold mt-4 tracking-wide mb-4 text-primary">
                Apa Itu Majelis Al-Irsyad
              </h2>
              <div className="md:w-[85%] w-full md:text-base leading-[29px]">
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
            <div className="md:mt-12">
              <div className="p-3 shadow-lg rounded-lg">
                <img
                  src={news4}
                  alt=""
                  className="w-full aspect-video rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-[minmax(0,34%)_minmax(0,_65%)]">
            <div className="flex flex-col items-end md:order-2">
              <h2 className="text-3xl font-semibold mt-4 tracking-wide mb-4 text-primary md:text-end">
                Agenda TPA Al-Irsyad
              </h2>
              <div className="md:w-[85%] w-full md:text-base leading-[29px]">
                <p className="mb-4 md:text-end">
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
            <div className="md:order-1 md:mt-12">
              <div className="p-3 shadow-lg rounlg">
                <img
                  src={news5}
                  alt=""
                  className="w-full aspect-video rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Majelis;
