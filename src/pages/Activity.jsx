import { BreadCrumb } from "../components";
import { Link } from "react-router-dom";
import DotBg from "../assets/DotBg";
import { BsArrowRightCircle } from "react-icons/bs";
import { news1, news2, news3, news4 } from "../assets";

const Activity = () => {
  const links = [{ link: "/kegiatan", text: "Kegiatan" }];
  return (
    <section className="py-12 lg:pt-12 lg:px-8 px-2 overflow-hidden">
      <BreadCrumb links={links} />
      <div className="container mx-auto lg:px-5 ">
        <div className="text-center mt-8 mb-12">
          <h1 className="text-3xl font-semibold text-text2  mt-8 tracking-wide font-play mb-2">
            Kegiatan Masjid{" "}
            <span className="font-arab tracking-wider text-primary font-bold">
              AL-IRSYAD
            </span>
          </h1>
          <div className="lg:text-lg text-base max-lg:mt-2">
            Agenda Kegiatan Termasuk Berita dan Rencana pada Masjid Al-Irsyad
          </div>
        </div>
        <div className="lg:flex flex-wrap  justify-between relative">
          <div className="absolute opacity-[15%] top-12 left-10 grid grid-cols-2 -z-50">
            <DotBg />
            <DotBg />
            <DotBg />
            <DotBg />
          </div>

          <div className="lg:w-1/2">
            <p className="md:w-[85%] w-full lg:text-base leading-[29px]">
              Masjid AL-IRSYAD memiliki berbagai serangkaian kegiatan yang Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Labore
              excepturi dolore eos asperiores, ipsa odio! Alias fuga sapiente
              quam perferendis. At, nam. Ea soluta tempora veritatis ullam
              tenetur eos rerum, voluptas voluptatum rem itaque, voluptates quod
              debitis consequatur quaerat iste ex, voluptate porro! Recusandae,
              id suscipit assumenda vitae incidunt cupiditate!
            </p>

            <h2 className="text-3xl font-semibold text-primary mb-4 mt-8">
              Berita Masjid Al-irsyad
            </h2>
            <p className="md:w-[85%] w-full lg:text-base leading-[29px]">
              Masjid Al-Irysad akan mendokumentasikan setiap kegiatan nya di
              dalam website ini. berikut Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Sit necessitatibus velit facere? Debitis sed
              adipisci cum consequuntur quos odit earum voluptates veritatis
              dolore, perferendis, excepturi libero. Voluptatibus sint labore
              quas perferendis nihil vitae eius excepturi? Illo molestiae
              aspernatur odio? Recusandae.
            </p>
            <div className="mb-4"></div>
            <Link to="/kegiatan/berita" className="">
              <button className="flex justify-center items-center gap-2 bg-secondary text-white px-6 py-1 rounded-full uppercase max-lg:mb-12 hover:bg-secondary-dark transition-all duration-300">
                Baca Berita{" "}
                <span className="text-xl">
                  <BsArrowRightCircle />
                </span>
              </button>
            </Link>

            <h2 className="text-3xl font-semibold text-primary mb-4 mt-8">
              Rencana Kegiatan Masjid Al-Irsyad
            </h2>
            <p className="md:w-[85%] w-full lg:text-base leading-[29px]">
              Masjid Al-Irysad akan menyusun rangkaian kegiatan yang akan segera
              di laksanakan kedepannya. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Perspiciatis aspernatur quam ipsam quia, aliquid
              explicabo tenetur ab blanditiis vitae ea accusamus error ratione
              debitis rerum labore nesciunt quaerat. Explicabo, fuga!
            </p>
            <div className="mb-4"></div>
            <Link to="/kegiatan/rencana" className="">
              <button className="flex justify-center items-center gap-2 bg-secondary text-white px-6 py-1 rounded-full uppercase max-lg:mb-12 hover:bg-secondary-dark transition-all duration-300">
                Lihat Rencana Kegiatan{" "}
                <span className="text-xl">
                  <BsArrowRightCircle />
                </span>
              </button>
            </Link>
          </div>
          <div className="lg:w-5/12">
            <div className="">
              <div className="flex w-full mb-16">
                <div className="">
                  <div className="p-2 rounded-md shadow-xl lg:w-5/12 ">
                    <img
                      src={news1}
                      alt=""
                      className="rounded-md w-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full mb-16">
                <div className="justify-end flex">
                  <div className=" p-2 rounded-md shadow-xl lg:w-5/12 ">
                    <img
                      src={news2}
                      alt=""
                      className="rounded-md w-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:flex hidden w-full mb-16">
                <div className="">
                  <div className=" p-2 rounded-md shadow-xl w-5/12 ">
                    <img
                      src={news3}
                      alt=""
                      className="rounded-md w-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>

              <div className="hidden lg:block w-full mb-16">
                <div className="justify-end flex">
                  <div className=" p-2 rounded-md shadow-xl w-5/12 ">
                    <img
                      src={news4}
                      alt=""
                      className="rounded-md w-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
