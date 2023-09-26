import { BreadCrumb } from "../components";
import { Link } from "react-router-dom";
import DotBg from "../assets/DotBg";
import { BsArrowRightCircle } from "react-icons/bs";
import { news1, news2, news3 } from "../assets";

const Institute = () => {
  const links = [{ link: "/lembaga", text: "Lembaga" }];
  return (
    <section className="py-12 lg:pt-12 lg:px-8 px-2 overflow-hidden">
      <BreadCrumb links={links} />
      <div className="container mx-auto lg:px-5 ">
        <div className="text-center mt-8 mb-12">
          <h1 className="text-3xl font-semibold text-text2  mt-8 tracking-wide font-play mb-2">
            Lembaga Masjid{" "}
            <span className="font-arab tracking-wider text-primary font-bold">
              AL-IRSYAD
            </span>
          </h1>
          <div className="lg:text-lg text-base max-lg:mt-2">
            Aspek Ekonomi Masjid Al-Irsyad mencakup Finansial, Sumbangan, dan
            lainnya
          </div>
        </div>
        <div className="flex flex-wrap  justify-between relative">
          <div className="absolute opacity-[15%] top-12 left-10 grid grid-cols-2 -z-50">
            <DotBg />
            <DotBg />
            <DotBg />
            <DotBg />
          </div>

          <div className="md:w-1/2">
            <p className="w-full lg:text-base leading-[29px]">
              Masjid Al-Irsyad memiliki berbagai lembaga yang menaungi nya.
              Beberapa Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit rerum enim voluptatibus quisquam minus, ducimus
              consequatur nulla earum hic recusandae unde dolorem dolor cum
              architecto fuga aut perspiciatis quasi nostrum!
            </p>

            <h2 className="text-3xl font-semibold text-primary mb-4 mt-8">
              TPA Masjid Al-Irsyad
            </h2>
            <p className="w-full lg:text-base leading-[29px]">
              Masjid Al-Irysad akan merekam setiap pengerluaran untuk yang di
              butuhkan atau untuk pengembangan masjid. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eaque fugiat illo
              necessitatibus ducimus similique dicta quos, velit delectus
              repellat quasi.
            </p>
            <div className="mb-4"></div>
            <Link to="/lembaga/tpa" className="">
              <button className="flex justify-center items-center gap-2 bg-secondary text-white px-6 py-1 rounded-full uppercase max-lg:mb-12 hover:bg-secondary-dark transition-all duration-300">
                TENTANG TPA{" "}
                <span className="text-xl">
                  <BsArrowRightCircle />
                </span>
              </button>
            </Link>

            <h2 className="text-3xl font-semibold text-primary mb-4 mt-8">
              Majelis Ibu-ibu & Majelis Bapak-bapak
            </h2>
            <p className="w-full lg:text-base leading-[29px]">
              Masjid Al-Irysad akan menyusun rangkaian kegiatan yang akan segera
              di laksanakan kedepannya. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Perspiciatis aspernatur quam ipsam quia, aliquid
              explicabo tenetur ab blanditiis vitae ea accusamus error ratione
              debitis rerum labore nesciunt quaerat. Explicabo, fuga!
            </p>
            <Link to="/lembaga/majelis" className="">
              <button className="flex justify-center items-center gap-2 bg-secondary text-white px-6 py-1 rounded-full uppercase max-lg:mb-12 hover:bg-secondary-dark transition-all duration-300">
                TENTANG TPA{" "}
                <span className="text-xl">
                  <BsArrowRightCircle />
                </span>
              </button>
            </Link>

            <h2 className="text-3xl font-semibold text-primary mb-4 mt-8">
              FAKM
            </h2>
            <p className="w-full lg:text-base leading-[29px]">
              Masjid Al-Irysad akan menyusun rangkaian kegiatan yang akan segera
              di laksanakan kedepannya. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Perspiciatis aspernatur quam ipsam quia, aliquid
              explicabo tenetur ab blanditiis vitae ea accusamus error ratione
              debitis rerum labore nesciunt quaerat. Explicabo, fuga!
            </p>
            <div className="mb-4"></div>
            <Link to="/lembaga/fakm" className="">
              <button className="flex justify-center items-center gap-2 bg-secondary text-white px-6 py-1 rounded-full uppercase max-lg:mb-12 hover:bg-secondary-dark transition-all duration-300">
                DETAIL DONASI{" "}
                <span className="text-xl">
                  <BsArrowRightCircle />
                </span>
              </button>
            </Link>
          </div>
          <div className="md:w-5/12">
            <div className="w-full mb-16">
              <div className="w-full mb-16">
                <div className="justify-end flex">
                  <div className="p-2 rounded-md shadow-xl md:w-5/12 ">
                    <img
                      src={news1}
                      alt=""
                      className="rounded-md w-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full mb-16">
                <div className="">
                  <div className=" p-2 rounded-md shadow-xl md:w-5/12 ">
                    <img
                      src={news2}
                      alt=""
                      className="rounded-md w-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-full mb-16">
                <div className="justify-end flex">
                  <div className=" p-2 rounded-md shadow-xl md:w-5/12 hidden md:block ">
                    <img
                      src={news3}
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

export default Institute;
