import { BreadCrumb } from "../components";
import { gallery1, gallery2 } from "../assets";
import dot from "../assets/dot.svg";
import { Link } from "react-router-dom";

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
    <section id="home" className=" py-12 lg:pt-12 px-8 overflow-hidden">
      <BreadCrumb links={links} />
      <div className="container mx-auto h-full lg:px-10 mt-8">
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
        <h1 className="text-4xl font-semibold text-text2 text-center mb-8 tracking-wide">
          Sejarah Masjid{" "}
          <span className="font-arab uppercase text-primary">Al-Irsyad</span>
        </h1>
        <div className="grid lg:grid-cols-[minmax(0,65%)_minmax(0,_25%)] gap-[5%]">
          <div className="">
            <h2 className="text-xl font-semibold mt-4 tracking-wide mb-4">
              Sejarah Singkat :
            </h2>
            <div className="w-[85%] text-justify">
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
          </div>
          <ol className="relative border-l border-green-300 mt-5">
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
      <div className="text-secondary lg:px-10 mt-8 flex items-center gap-6">
        <div className="text-lg font-semibold">Baca : </div>
        <div className="rounded-md px-2 py-1 shadow-lg bg-white">
          <Link to="/profil">Profil Masjid</Link>
        </div>
        <div className="rounded-md px-2 py-1 shadow-lg bg-white">
          <Link to="/profil/visi-misi">Visi & Misi</Link>
        </div>
      </div>
    </section>
  );
};

export default History;
